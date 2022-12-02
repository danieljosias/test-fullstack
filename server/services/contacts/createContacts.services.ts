import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity";
import User from '../../entities/users.entity'
import Contact from "../../entities/contacts.entity";
import { IContactRequest } from "../../interfaces/contact";

export const createContactsService = async ({clientId,fullname,email,cellphone,mobile}:IContactRequest): Promise<Contact> =>{
	//contact tem relacionamento com client e userId
	//um cliente pode ter vários contatos
	//dentro da tabela contact tem o campo client_id
	
	//o clientId virá do front-end
	const clientsRepository = AppDataSource.getRepository(Client);
	const client = await clientsRepository.findOne({
		where:{
			id: clientId
		}
	});

	if(!client){
        throw new Error('Client not found or invalid id',)
    }
	
    const contactsRepository = AppDataSource.getRepository(Contact);
	const contact = contactsRepository.create({
		fullname,
		email,
		cellphone,
        mobile
	});

	await contactsRepository.save(contact);

	return contact
}