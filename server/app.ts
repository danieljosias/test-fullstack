import express from 'express'
import cors from 'cors'

import clientRouter from './routes/clients.routes'
import contactRouter from './routes/contacts.routes'

const app = express()
app.use(express.json())

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,       
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use('/client', clientRouter)
app.use('/contact', contactRouter)

export default app;