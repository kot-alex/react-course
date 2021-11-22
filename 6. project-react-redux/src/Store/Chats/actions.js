import { ADD_CHAT, DELETE_CHAT } from "./constants";

export const addChat = (payload) => ({
    type: ADD_CHAT,
    payload,
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    chatId,
});
