import { ADD_CHAT, DELETE_CHAT } from "./constants";

export const addChat = () => ({
    type: ADD_CHAT,
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId,
});
