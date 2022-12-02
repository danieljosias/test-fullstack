import { Router } from "express"
import { createClientsController } from "../controllers/clients.controllers"
import { listClientsController } from "../controllers/clients.controllers"
import { updateClientsController } from "../controllers/clients.controllers"
import { deleteClientsController } from "../controllers/clients.controllers"
import ensureAuthTokenMiddleware from "../middlewares/ensureAuthToken.middleware"

const clientsRouter = Router()

clientsRouter.post("", ensureAuthTokenMiddleware, createClientsController)
clientsRouter.get("", listClientsController)
clientsRouter.patch("/:id", updateClientsController)
clientsRouter.delete("/:id", deleteClientsController)

export default clientsRouter;