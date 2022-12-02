import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";
import Client from "../../entities/clients.entity";
import { IContactRequest } from "../../interfaces/contact";

export const updateContactsService = async (id:string,{fullname, email, telephone, cellphone}:IContactRequest):Promise<any> => {
   /*  const clientsRepository = AppDataSource.getRepository(Client)
    const clients = await clientsRepository.findOne({
        where: { 
            id: clientId
        }
    });
    
    if(!clients){
        throw new Error('Client not found or client id invalid')
    } */
    
    const contactsRepository = AppDataSource.getRepository(Contact)
    const contacts = await contactsRepository.findOne({
        where: {
            id: id
        }
    })

    let newContact = {
        fullname: fullname? fullname : contacts?.fullname,
        email: email? email : contacts?.email,
        telephone: telephone? telephone : contacts?.telephone,
        cellphone: cellphone? cellphone : contacts?.cellphone,
    }

    await contactsRepository.update(contacts!.id, newContact)
    const contactUpdated = await contactsRepository.findOneBy({id});
 
    return contactUpdated
}
