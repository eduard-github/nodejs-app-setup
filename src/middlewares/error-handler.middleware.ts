import { type Request, type Response, type NextFunction } from 'express';
import { CustomError } from '../utils/errors/custom.error';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  return res.status(400).json({ errors: 'Something went wrong' });
};
