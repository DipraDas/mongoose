import { NextFunction, Request, Response } from "express";
import { createUserToDb } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await createUserToDb();
    res.status(200).json({
        status: 'success',
        data: user
    })
}