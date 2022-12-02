import { Router } from 'express'
import { createUsersController } from '../controllers/users.controllers'

const usersRouter = Router()

usersRouter.post('', createUsersController)

export default usersRouter