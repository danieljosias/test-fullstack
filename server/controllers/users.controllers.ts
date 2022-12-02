import { Request, Response } from "express";
import { createUsersService } from "../services/users/createUser.services";
import { IUserRequest } from "../interfaces/users";

export const createUsersController = async (req: Request, res: Response) => {
	const { email, password }: IUserRequest = req.body;

	const user = await createUsersService({email, password});
	return res.status(201).json(user);
};