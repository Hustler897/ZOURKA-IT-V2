import { api } from "../api/api";

export const MessagesServices = {
    sendMessage: async (data: { nom: string; email: string; sujet: string; message: string; telephone: string }) => {
        const response =  await  api.post("/message/send", data);
        return response.data;
    },
    getALLMessages: async () => {
        const response =  await  api.get("/messages");
        return response.data;
    }
}