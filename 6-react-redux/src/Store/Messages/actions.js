import _uniqueId from "lodash/uniqueId";
import { ADD_MESSAGE, SHOW_MESSAGES } from "./constants";

export const addMessage = (text, author, chatId) => ({
    type: ADD_MESSAGE,
    id: _uniqueId(),
    text,
    author,
    chatId,
});

export const showMessages = (chatId) => ({
    type: SHOW_MESSAGES,
    chatId,
});
