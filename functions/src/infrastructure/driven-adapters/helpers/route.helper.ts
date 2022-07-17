import { Request, Response } from 'express';

export const routeHelper = (callback: CallableFunction) => {
    return async (req: Request, res: Response, next: () => void) => {
        try {
            await callback(req, res, next);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch ( error: any) {
            let errorObject;
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
        }
    };
};
