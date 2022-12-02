import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";

export const deleteContactsService = async (id:string):Promise<any> => {
    const contactsRepository = AppDataSource.getRepository(Contact)
    const contacts = await contactsRepository.findOne({
        where: {
            id: id
        }
    })

    if(!contacts){
        throw new Error('Client not found or client id invalid')
    }

    await contactsRepository.delete(contacts!.id)
 
    return true
}