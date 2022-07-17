import { Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorMiddleware = (error: any, req: Request, res: Response ) => {
    let errorObject;
    console.log(typeof error.toJson);
    if (typeof error.toJson === 'function') {
        errorObject = error.toJson();
    } else {
        errorObject = {
            status: 500,
            name: 'UnkwnownError',
            message: 'Unkwnown Error',
        };
    }

    // ...

    res.status(errorObject.status).json(errorObject);
};

