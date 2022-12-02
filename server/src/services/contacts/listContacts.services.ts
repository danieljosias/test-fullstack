import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entity";

export const listContactsService = async ()=> {
	const contactRepository = AppDataSource.getRepository(Contact);
	const contact = await contactRepository.find();

	return contact
};