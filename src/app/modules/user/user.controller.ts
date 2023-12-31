import { NextFunction, Request, Response } from "express";
import { createUserToDb, getAdminFromDb, getUserByIdFromDb, getUserFromDb } from "./user.service";

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const data = req.body;

    const user = await createUserToDb(data);

    res.status(200)
        .json({
            status: "success",
            data: user,
        });
};
export const getUser = async (req: Request, res: Response) => {
    const user = await getUserFromDb();
    res.status(200).json({
        status: 'success',
        data: user
    })
}

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserByIdFromDb(id);
    res.status(200).json({
        status: 'success',
        data: user
    })
}
export const getAdmins = async (req: Request, res: Response) => {
    const user = await getAdminFromDb();
    res.status(200).json({
        status: 'success',
        data: user
    })
}