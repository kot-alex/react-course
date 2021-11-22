import { ADD_CHAT, DELETE_CHAT } from "./constants";

export const addChat = () => ({
    type: ADD_CHAT,
});

export const deleteChat = (payload) => ({
    type: DELETE_CHAT,
    payload,
});
