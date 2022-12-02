import AppDataSource from "../../data-source";
import jwt from 'jsonwebtoken'
import { ILoginRequest } from "../../interfaces/login";
import Users from "../../entities/users.entity";
import { compare } from 'bcryptjs'

export const createLoginService = async ({email, password}:ILoginRequest):Promise<string> => {
    const usersRepository = AppDataSource.getRepository(Users)
    const users = await usersRepository.findOne({
        where:{
            email
        }
    })
    
    if(!users){
        throw new Error('Invalid email')
    }

    const matchPassword = await compare(password, users?.password)
    if(!matchPassword){
        throw new Error('Password invalid')
    }

    const token = jwt.sign(
        {
            
        },
        process.env.JWT_SECRET as string,
        {
            subject: users.id,
            expiresIn: '1d'
        }
    )
    
    return token
}