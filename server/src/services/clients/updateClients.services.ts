import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entity";
import { IClientRequest } from "../../interfaces/clients";

export const updateClientsService = async (id:string,{fullname, email, telephone, cellphone, createdAt}:IClientRequest): Promise<any> => {
	const clientsRepository = AppDataSource.getRepository(Client);
	const isClient = await clientsRepository.findOne({
        where: {
            id: id
        }
    })
  
    if(!isClient){
        throw new Error('Client not found')
    }
     
    const client = new Client()
    client.fullname = fullname? fullname : isClient.fullname
    client.email = email? email : isClient.email
    client.telephone = telephone? telephone : isClient.telephone
    client.cellphone = cellphone? cellphone : isClient.cellphone
    client.createdAt = createdAt? createdAt : isClient.createdAt

    await clientsRepository.update(isClient!.id, client)
    
	return client
};