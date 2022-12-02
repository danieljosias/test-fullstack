import { create } from 'domain'
import { Router } from 'express'
import { createLoginController } from '../controllers/login.controllers'

const loginRouter = Router()

loginRouter.post('', createLoginController)

export default loginRouter