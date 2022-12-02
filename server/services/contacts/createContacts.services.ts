import AppDataSource from "../../data-source"
import Client from "../../entities/clients.entity";
import Contact from "../../entities/contacts.entity";
import { IContactRequest } from "../../interfaces/clients";

export const createContactsService = async (clientId:string,{fullname,email,cellphone,mobile}:IContactRequest): Promise<Contact> =>{
	const clientsRepository = AppDataSource.getRepository(Client);
	const client = await clientsRepository.findOne({
		where:{
			id: clientId
		}
	});

	if(!client){
        throw new Error('Invalid client id',)
    }
    
	
    const contactsRepository = AppDataSource.getRepository(Contact);
	const contacts = await contactsRepository.find();
    const contact = contactsRepository.create({
		fullname,
		email,
		cellphone,
        mobile
	});

	await contactsRepository.save(contact);

	return contact
}