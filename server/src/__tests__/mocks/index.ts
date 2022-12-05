import { IUserRequest } from '../../interfaces/users'
import { ILoginRequest } from '../../interfaces/login'
import { IClientRequest} from '../../interfaces/clients'
import { IContactRequest } from '../../interfaces/contact'

export const mockedUser: IUserRequest = {
    email: "teste@mail.com",
    password: "12345678"
};

export const mockedLogin: ILoginRequest = {
    email: "teste@mail.com",
    password: "12345678"
};

export const mockedWrongEmail: ILoginRequest = {
    email: "teste2@mail.com",
    password: "12345678"
};

const testeData = new Date(1996,2,17)
export const mockedClient: IClientRequest = {
    fullname: "teste",
    email: "teste@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
    createdAt: testeData
};

export const mockedListClients: IClientRequest = {
    fullname: "teste",
    email: "teste3@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
    createdAt: testeData
}


export const mockedLoginListClients : IClientRequest = {
    fullname: "teste",
    email: "teste3@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
    createdAt: testeData
}


export const mockedUpdate: IClientRequest = {
    fullname: "teste",
    email: "teste2@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
    createdAt: testeData
};

export const mockedClientUpdated: IClientRequest = {
    fullname: "teste",
    email: "teste4@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
    createdAt: testeData
};

export const mockedDeleteClient: IClientRequest = {
    fullname: "teste",
    email: "teste5@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
    createdAt: testeData
};


export const mockedContact: IContactRequest = {
    fullname: "teste",
    email: "teste@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
};

export const mockedContactUpdate: IContactRequest = {
    fullname: "teste",
    email: "teste2@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
};

export const mockedContactUpdated: IContactRequest = {
    fullname: "teste",
    email: "teste2@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
};

export const mockedDeleteContact: IContactRequest = {
    fullname: "teste",
    email: "teste5@mail.com",
    cellphone: "971164801",
    telephone: "32526896",
};