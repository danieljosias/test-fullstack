import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import {  mockedClient, mockedDeleteClient, mockedLogin, mockedUpdate, mockedClientUpdated } from "../../mocks"

describe('/clients', () => {
    let connection: DataSource

    beforeAll(async()=>{
        await AppDataSource.initialize().then((res)=>{
            connection = res
        }).catch((err)=>{
            console.log('Error during Data Source initialization',err)
        })
    })

    afterAll(async()=>{
        await connection.destroy()
    })

    test('POST/clients - Must be able to create a clients',async () =>{
        const response = await request(app).post('/clients').send(mockedClient)

        expect(response.body).toHaveProperty('fullname')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('telephone')
        expect(response.body).not.toHaveProperty('cellphone')
        expect(response.body).toHaveProperty('createdAt')
        expect(response.status).toBe(201)
    })

    test("POST/clients -  Email already exists",async () => {
        const response = await request(app).post("/clients").send({
            email: "teste@mail.com"
        });

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)       
    })

    test("GET /clients -  Must be able to list clients",async () => {
        const response = await request(app).get('/clients')
        expect(response.status).toBe(200)
        
    })

    test("PATCH /clients -  Must be able to update clients",async () => {
        const clientCreated = await request(app).post('/clients').send(mockedUpdate)
        const idClient = clientCreated.body.id
        const LoginResponse = await request(app).post("/login").send(mockedLogin);
        const response = await request(app).patch(`/clients/${idClient}`).set("Authorization", `Bearer ${LoginResponse.body.token}`).send(mockedClientUpdated)

        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('fullname')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('telephone')
        expect(response.body).toHaveProperty('cellphone')
        expect(response.body).toHaveProperty('createdAt')
        expect(response.status).toBe(200) 
    })

    test("DELETE /clients -  Must be able to soft delete clients",async () => {
        const clientCreated = await request(app).post('/clients').send(mockedDeleteClient)
        const idCLient = clientCreated.body.id
        const adminLoginResponse = await request(app).post("/login").send(mockedLogin);
        const response = await request(app).delete(`/clients/${idCLient}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        expect(response.body).toEqual({})
        expect(response.status).toBe(204)
    })
})