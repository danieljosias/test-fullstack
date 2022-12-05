import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedLogin, mockedWrongEmail } from "../../mocks"

describe("/login", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.log("Error during Data Source initialization", err);
      });

    await request(app).post("/login").send(mockedLogin);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /login - Must be able to login an client", async () => {
    const response = await request(app).post("/login").send(mockedLogin);

    expect(response.status).toEqual(200);
    expect(response.body).toHaveProperty("token");
  });

  test("/POST /login - Should return an error when trying to login with wrong email", async () => {
    const response = await request(app).post("/login").send(mockedWrongEmail);

        expect(response.body).toHaveProperty("message");
        expect(response.status).toEqual(400);
    });

  
});