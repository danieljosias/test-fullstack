import { Request, Response } from "express";
import { createContactsService } from "../services/contacts/createContacts.services"
import { listContactsService } from "../services/contacts/listContacts.services";
import { updateContactsService } from "../services/contacts/updateContacts.services";
import { deleteContactsService } from "../services/contacts/deleteContacts.services";
import { IContactRequest } from "../interfaces/contact";

export const createContactsController = async (req: Request, res: Response) => {
	const { clientId, fullname, email, cellphone, mobile }: IContactRequest = req.body;

	const contact = await createContactsService({clientId, fullname, email, cellphone, mobile});
	return res.status(201).json(contact);
};

export const listContactsController = async (req: Request, res: Response) => {
	const contact = await listContactsService();
	return res.status(200).json(contact);
};

export const updateContactsController = async (req: Request, res: Response) => {
	const { clientId, fullname, email, cellphone, mobile }: IContactRequest = req.body;
	const id  = req.params.id

	const contact = await updateContactsService(id,{clientId, fullname, email, cellphone, mobile});
	return res.status(200).json({contact: contact});
};

export const deleteContactsController = async (req: Request, res: Response) => {
	//id do contact
	const id  = req.params.id

	const contact = await deleteContactsService(id);
	return res.status(200).json({contact: contact});
};
