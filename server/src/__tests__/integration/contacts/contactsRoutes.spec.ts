import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app"
import {  mockedContact, mockedDeleteContact, mockedLogin, mockedContactUpdate, mockedContactUpdated } from "../../mocks"

describe('/contacts', () => {
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

    test('POST/contacts - Must be able to create a contacts',async () =>{
        const response = await request(app).post('/contacts').send(mockedContact)

        expect(response.body).toHaveProperty('fullname')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('telephone')
        expect(response.body).not.toHaveProperty('cellphone')
        expect(response.status).toBe(201)
    })

    test("POST/contacts -  Email already exists",async () => {
        const response = await request(app).post("/contacts").send({
            email: "teste@mail.com"
        });

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)       
    })

    test("GET /contacts -  Must be able to list contacts",async () => {
        const response = await request(app).get('/contacts')
        expect(response.status).toBe(200)
        
    })

    test("PATCH /contacts -  Must be able to update contacts",async () => {
        const clientCreated = await request(app).post('/contacts').send(mockedContactUpdate)
        const idClient = clientCreated.body.id
        const LoginResponse = await request(app).post("/login").send(mockedLogin);
        const response = await request(app).patch(`/contacts/${idClient}`).set("Authorization", `Bearer ${LoginResponse.body.token}`).send(mockedContactUpdated)

        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('fullname')
        expect(response.body).toHaveProperty('email')
        expect(response.body).toHaveProperty('telephone')
        expect(response.body).toHaveProperty('cellphone')
        expect(response.status).toBe(200) 
    })

    test("DELETE /contacts -  Must be able to soft delete contacts",async () => {
        const clientCreated = await request(app).post('/contacts').send(mockedDeleteContact)
        const idCLient = clientCreated.body.id
        const adminLoginResponse = await request(app).post("/login").send(mockedLogin);
        const response = await request(app).delete(`/contacts/${idCLient}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        expect(response.body).toEqual({})
        expect(response.status).toBe(204)
    })
})