import { httpStatusCodes } from './http-status-codes';

import BaseError from './base-error';

export class Api500Error extends BaseError {
  constructor(
    name: string,
    description = 'Internal server error.',
    statusCode = httpStatusCodes.INTERNAL_SERVER,
    data?: any
  ) {
    super(name, statusCode, description, data);
  }
}
