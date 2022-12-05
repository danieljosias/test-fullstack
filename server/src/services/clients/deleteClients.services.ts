import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entity";

export const deleteClientsService = async (id:string) => {
	const clientsRepository = AppDataSource.getRepository(Client);
	const clients = await clientsRepository.find();

    let isClient = clients.find(client => client.id === id)

    if(!isClient){
        throw new Error('Client not found')
    }

    await clientsRepository.delete(isClient!.id)

	return {}
};