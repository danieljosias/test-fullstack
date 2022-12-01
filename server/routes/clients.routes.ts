import { Router } from "express"
import { createClientsController } from "../controllers/clients.controllers"

const clientsRouter = Router()

clientsRouter.post("", createClientsController)
clientsRouter.get("")
clientsRouter.patch("/:id")
clientsRouter.delete("/:id")

export default clientsRouter;