import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './app/modules/user/user.route'

const app: Application = express()

app.use(cors());

app.use('/api/v1/user', userRouter);

export default app;