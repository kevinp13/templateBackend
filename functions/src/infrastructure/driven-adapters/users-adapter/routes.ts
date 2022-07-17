import * as express from 'express';
import { routeHelper } from '../helpers/route.helper';
import { getUser, getUsersList } from './controller';

// eslint-disable-next-line new-cap
export const userRouter = express.Router();
userRouter.get('/list', routeHelper(getUsersList));

userRouter.get('/:id', routeHelper(getUser));
