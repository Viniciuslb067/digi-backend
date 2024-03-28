import { httpStatusCodes } from './http-status-codes';

import BaseError from './base-error';

export class Api404Error extends BaseError {
  constructor(
    name: string,
    description = 'Not found.',
    statusCode = httpStatusCodes.NOT_FOUND,
    data?: any
  ) {
    super(name, statusCode, description, data);
  }
}
