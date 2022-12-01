import express from 'express'
import cors from 'cors'

import clientsRouter from './routes/clients.routes'
import contactsRouter from './routes/contacts.routes'

const app = express()
app.use(express.json())

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,       
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use('/clients', clientsRouter)
app.use('/contacts', contactsRouter)

export default app;