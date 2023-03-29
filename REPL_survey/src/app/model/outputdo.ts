import { User } from "./userdo";

export interface UserWrapper{
    data: User;
    message: String;
    statusCode: String;
}