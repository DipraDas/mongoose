import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    // creating a new user
    const user = new User(payload); //User -> class  user -> instance
    await user.save();

    console.log(user.fullName());

    return user;
};

export const getUserFromDb = async () => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDb = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne(
        { id: payload }, { name: 1 }
    )
    return user;
}

export const getAdminFromDb = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}