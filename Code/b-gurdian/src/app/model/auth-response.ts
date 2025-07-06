import { UsermodelModule } from "./usermodel/usermodel-module";

export interface AuthResponse {
    token: string;
    user: UsermodelModule;
}