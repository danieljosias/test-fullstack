import AppDataSource from "../../data-source"
import Contact from "../../entities/contacts.entity";
import { IContactRequest } from "../../interfaces/contact";

export const createContactsService = async ({fullname,email,telephone,cellphone}:IContactRequest): Promise<Contact> =>{
	/* const clientsRepository = AppDataSource.getRepository(Client)
    const clients = await clientsRepository.findOne({
        where: { 
            id: clientId
        }
    });
    
    if(!clients){
        throw new Error('Client not found or client id invalid')
    } */
    const contactsRepository = AppDataSource.getRepository(Contact);
	const contact = contactsRepository.create({
		fullname,
		email,
        telephone,
		cellphone
	});

	await contactsRepository.save(contact);

	return contact
}