import { stringify } from "querystring";

export interface AppErrorArgs {
    name?: string;
    message: string;
    httpCode?:number;
}

export class AppError extends Error {
    name:string;
    httpCode: Number;
        constructor(name:string, message: string,httpCode: number){
        super(message);
        this.name = message;
        this.httpCode = httpCode;
    }

    getHttpCode() {
        return this.httpCode;
    }

    getError (): AppErrorArgs{
        return{
            name: this.name,
            message: this.message,
            httpCode: this.httpCode
        }
    }
}