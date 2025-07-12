import { ApiResponse } from "./apiresponse";

export class NotifyUtil {


    static success(response: ApiResponse): void {
        alert(response?.message || 'Succcessful');
    }


    static error(error: any): void {
        console.log(error);
        if (error) {
            alert(error);

        } else {
            alert(error.error?.message || 'An error occurred');
        }
    }
}