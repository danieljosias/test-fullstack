import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import { mockedUser } from "../../mocks"

describe('/users', () => {
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

    test('POST/users - Must be able to create ausers',async () =>{
        const response = await request(app).post('/users').send(mockedUser)

        expect(response.body).toHaveProperty('email')
        expect(response.body).not.toHaveProperty('password')
        expect(response.status).toBe(201)
    })

    test("POST /users -  Email already exists",async () => {
        const response = await request(app).post("/users").send({
            email: "teste@mail.com"
        });

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)       
    })

})