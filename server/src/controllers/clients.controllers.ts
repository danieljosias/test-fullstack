import { Request, Response } from "express";
import { createClientsService } from "../services/clients/createClients.services";
import { listClientsService } from "../services/clients/listClients.services";
import { updateClientsService } from "../services/clients/updateClients.services";
import { deleteClientsService } from "../services/clients/deleteClients.services";
import { IClientRequest } from "../interfaces/clients";

export const createClientsController = async (req: Request, res: Response) => {
	const { fullname, email, telephone, cellphone, createdAt }: IClientRequest = req.body.data;

	const client = await createClientsService({fullname, email, telephone, cellphone, createdAt});
	return res.status(201).json(client);
};

export const listClientsController = async (req: Request, res: Response) => {

	const client = await listClientsService();
	return res.status(200).json(client);
};

export const updateClientsController = async (req: Request, res: Response) => {
	const { fullname, email, telephone, cellphone, createdAt }: IClientRequest = req.body;
    const id  = req.params.id
    
	const client = await updateClientsService(id,{fullname, email, telephone, cellphone, createdAt});
	return res.status(200).json(client);
};

export const deleteClientsController = async (req: Request, res: Response) => {
    const id  = req.params.id
    
	const client = await deleteClientsService(id);
	return res.status(204).json(client);
};

