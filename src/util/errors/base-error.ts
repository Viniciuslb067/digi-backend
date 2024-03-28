export type TypeBaseError = {
  name: string;
  description: string;
  statusCode?: number;
  data?: any;
};

export default class BaseError extends Error {
  public readonly statusCode?: number;
  public readonly isOperational?: boolean;
  public readonly data: any;

  constructor(
    name: string,
    statusCode?: number,
    description?: string,
    data?: any
  ) {
    super(description);

    this.name = name;
    this.data = data;

    if (statusCode) this.statusCode = statusCode;

    Object.setPrototypeOf(this, new.target.prototype);

    Error.captureStackTrace(this);
  }
}
