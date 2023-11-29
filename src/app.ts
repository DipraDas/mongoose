import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express()

app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // res.send('Hello World!')
    // next();

    interface IUser {
        id: string,
        role: 'student',
        password: string,
        name: {
            firstName: string,
            middleName?: string,
            lastName: string
        },
        dateOfBirth: string,
        gender: 'male' | 'female',
        email?: string,
        contactNo: string,
        emergencyContactNo: string,
        presentAddress: string,
        permanentAddress: string
    }

    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String
            },
            lastName: {
                type: String,
                required: true
            }
        },
        dateOfBirth: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["male", "female"]
        },
        email: {
            type: String
        },
        contactNo: {
            type: String,
            required: true
        },
        emergencyContactNo: {
            type: String,
            required: true
        },
        presentAddress: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        }
    })

    const User = model<IUser>("User", userSchema);

    const createUserToDb = async () => {
        const user = new User({
            id: '3',
            role: 'student',
            password: 'dipra1212',
            name: {
                firstName: 'Dipra',
                middleName: '',
                lastName: 'Das'
            },
            dateOfBirth: '19/09/1999',
            gender: 'male',
            email: 'dip@gmail.com',
            contactNo: '01876704498',
            emergencyContactNo: '01876704498',
            presentAddress: 'my Addrtess',
            permanentAddress: 'address'
        })
        console.log('UserInfo', user);
        await user.save();
    }
    createUserToDb();

})

export default app;