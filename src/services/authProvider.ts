import { api } from "../api/api";

export const AuthProvider = {
    login: async (data: { email: string; password: string }) => {
        const response =  await  api.post("/api/login", data);
        return response.data;
    },
    me : async () => {
        const response =  await  api.get("/api/me");
        return response.data;
    }
}