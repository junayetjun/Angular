import { UsermodelModule } from "./usermodel-module";

export interface AuthResponse {
    token: string;
    user: UsermodelModule;
}