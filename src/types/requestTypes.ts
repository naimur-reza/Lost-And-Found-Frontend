import { IMeta } from "./common";

export interface IResponseType {
  data: any;
  meta?: IMeta | null;
  message: string;
}

export interface IErrorResponse {
  error: {
    statusCode: number;
    message: string;
    errorMessages: string;
  };
}
