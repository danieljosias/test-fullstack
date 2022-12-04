import { createContext } from 'react'
import api from '../services'
export const ApiContext = createContext([])

export const ApiProvider = ({children}) =>{

    async function createUser(data){
        try {
            const result = await api.post('/users', data)
            return result
        } catch (error) {
            return error
        }
    }

    async function createLogin(data){
        try {
            const result = await api.post('/login', data)
            return result
        } catch (error) {
            return error
        }
    }

    async function createClient(data, token){
        try {
            const result = await api.post('/clients', {data, token})
            return result
        } catch (error) {
            return error
        }
    }

    async function listClient(){
        try {
            const result = await api.get('/clients')
            return result
        } catch (error) {
            return error
        }
    }

    async function updateClient(id,token,data){
        try {
            const result = await api.patch(`/clients/${id}`,{token,data})
            return result
        } catch (error) {
            return error
        }
    }

    async function deleteClient(id){
        try {
            const result = await api.delete(`/clients/${id}`)
            return result
        } catch (error) {
            return error
        }
    }

    async function createContact(data){
        try {
            const result = await api.post('/contacts', data)
            return result
        } catch (error) {
            return error
        }
    }

    async function listContact(){
        try {
            const result = await api.get('/contacts')
            return result
        } catch (error) {
            return error
        }
    }

    async function updateContact(id){
        try {
            const result = await api.patch(`/clients/${id}`)
            return result
        } catch (error) {
            return error
        }
    }

    async function deleteContact(id){
        try {
            const result = await api.delete(`/contacts/${id}`)
            return result
        } catch (error) {
            return error
        }
    }
    return(
        <ApiContext.Provider
            value={{createUser,createLogin,createClient,listClient,updateClient,deleteClient,createContact,listContact,updateContact,deleteContact}}
        >
            {children}
        </ApiContext.Provider>
    )
}