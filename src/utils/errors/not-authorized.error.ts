import { CustomError } from './custom.error';

export class NotAuthorizedError extends CustomError {
  public statusCode = 401;
  private readonly reason = 'Not Authorized';

  constructor() {
    super('Not Authorized');

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
