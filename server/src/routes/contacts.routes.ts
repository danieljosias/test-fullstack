import { Router } from "express"
import { createContactsController } from "../controllers/contacts.controllers"
import { listContactsController } from "../controllers/contacts.controllers"
import { updateContactsController } from "../controllers/contacts.controllers"
import { deleteContactsController } from "../controllers/contacts.controllers"
import ensureAuthTokenMiddleware from "../middlewares/ensureAuthToken.middleware"

const contactsRouter = Router()

contactsRouter.post("", ensureAuthTokenMiddleware, createContactsController)
contactsRouter.get("", listContactsController)
contactsRouter.patch("/:id", ensureAuthTokenMiddleware, updateContactsController)
contactsRouter.delete("/:id", deleteContactsController)

export default contactsRouter;