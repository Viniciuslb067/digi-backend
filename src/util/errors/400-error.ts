import { httpStatusCodes } from './http-status-codes';

import BaseError from './base-error';

export class Api400Error extends BaseError {
  constructor(
    name: string,
    description = 'Bad request.',
    statusCode = httpStatusCodes.BAD_REQUEST,
    data?: any
  ) {
    super(name, statusCode, description, data);
  }
}
