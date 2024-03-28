import { httpStatusCodes } from './http-status-codes';

import BaseError from './base-error';

export class Api403Error extends BaseError {
  constructor(
    name: string,
    description = 'Forbidden.',
    statusCode = httpStatusCodes.FORBIDDEN,
    data?: any
  ) {
    super(name, statusCode, description, data);
  }
}
