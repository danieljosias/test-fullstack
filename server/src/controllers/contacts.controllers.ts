import { Request, Response } from "express";
import { createContactsService } from "../services/contacts/createContacts.services"
import { listContactsService } from "../services/contacts/listContacts.services";
import { updateContactsService } from "../services/contacts/updateContacts.services";
import { deleteContactsService } from "../services/contacts/deleteContacts.services";
import { IContactRequest } from "../interfaces/contact";

export const createContactsController = async (req: Request, res: Response) => {
	const { fullname, email, telephone, cellphone }: IContactRequest = req.body.data;

	const contact = await createContactsService({fullname, email, telephone, cellphone});
	return res.status(201).json(contact);
};

export const listContactsController = async (req: Request, res: Response) => {
	const contact = await listContactsService();
	return res.status(200).json(contact);
};

export const updateContactsController = async (req: Request, res: Response) => {
	const { fullname, email, telephone, cellphone }: IContactRequest = req.body.data;
	const id  = req.params.id

	const contact = await updateContactsService(id,{fullname, email, telephone, cellphone});
	return res.status(200).json({contact: contact});
};

export const deleteContactsController = async (req: Request, res: Response) => {
	const id  = req.params.id

	const contact = await deleteContactsService(id);
	return res.status(200).json(contact);
};
