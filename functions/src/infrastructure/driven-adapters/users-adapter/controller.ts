import { Response, Request } from 'express';
import { AuthError } from '../../../domain/errors/auth.error';
import { UsersUsecase } from '../../../domain/users/usecase';


import { Users } from '../../firebase/users/repository';

const useCase = new UsersUsecase( new Users());

export const getUsersList = async (req: Request, res: Response, next: CallableFunction ) => {
    const users = await useCase.getAllUsers();
    console.log(users);
    // res.status(200).json({
    //     users
    // });
    return next( new AuthError());
};
export const getUser = async (req: Request, res: Response, next: CallableFunction ) => {
    const user = await useCase.getUserData(req.params.id);
    res.status(200).json({
        user,
    });
    return next();
};
