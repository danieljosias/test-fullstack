import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity";
import { IClientRequest } from "../../interfaces/clients";

export const createClientsService = async ({fullname, email, telephone, cellphone, createdAt}:IClientRequest): Promise<Client> =>{
    const clientsRepository = AppDataSource.getRepository(Client);
	const clients = await clientsRepository.find();

    const emailAlreadyExists = clients.find((clients) => clients.email === email);
    if(emailAlreadyExists){
        throw new Error("Email already exists");
    }

    const client = clientsRepository.create({
		fullname,
		email,
        telephone,
		cellphone,
        createdAt
	});

	await clientsRepository.save(client);

	return client
}