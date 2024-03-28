import { Response } from "express";
import BaseError from "../errors/base-error";

type ErrorResponseOptions = {
  response: Response;
  message?: string;
  statusCode?: number;
  error?: BaseError;
  errors?: any[];
  data?: any;
};

type SuccessResponseOptions = {
  data?: any;
  message?: string;
  response: Response;
  statusCode?: number;
};

export const returnErrorResponse = ({
  error,
  errors,
  response,
  statusCode = 500,
  message = "Internal server error",
  data,
}: ErrorResponseOptions) => {
  response.status(statusCode).json({ status: "error", message, errors, data });
};

export const returnSuccessResponse = ({
  data,
  response,
  statusCode = 200,
  message = "Operation successfully completed",
}: SuccessResponseOptions) => {
  response.status(statusCode).json({ status: "success", message, data });
};
