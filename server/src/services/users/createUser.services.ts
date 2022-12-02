import AppDataSource from "../../data-source";
import Users from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users";
import { hash } from 'bcryptjs'

export const createUsersService = async ({email, password }:IUserRequest): Promise<Users> =>{
    const usersRepository = AppDataSource.getRepository(Users)
    const users = await usersRepository.find()

    const emailAlreadyExists:any = users.find(user => user.email === email)
    
    if(emailAlreadyExists){
        throw new Error('Email already exists')
    }

    const hashPassword = await hash(password, 10)

    const user = usersRepository.create({
        email,
        password: hashPassword
    })

    await usersRepository.save(user)
    return user
}