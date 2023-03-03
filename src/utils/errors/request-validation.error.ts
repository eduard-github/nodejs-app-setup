import { CustomError } from './custom.error';
import { type ValidationError } from 'express-validator';

export class RequestValidationError extends CustomError {
  public statusCode = 400;

  constructor(private readonly errors: ValidationError[]) {
    super('Invalid request parameters');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param };
    });
  }
}
