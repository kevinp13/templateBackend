import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { userRouter } from '../../driven-adapters/users-adapter/routes';
import { errorMiddleware } from '../../driven-adapters/middleware/errors';


const rootPath = '/api';
export const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rootPath + '/users', userRouter);
app.use(errorMiddleware);
app.listen(5000, () => console.log('Server run on port: ', 5000));
