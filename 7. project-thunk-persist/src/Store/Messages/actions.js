import { ADD_MESSAGE } from "./constants";

export const addMessage = (chatId, text, author) => ({
    type: ADD_MESSAGE,
    chatId,
    text,
    author,
});

export const addMessageWithThunk = (chatId, text, author) => (dispatch) => {
    dispatch(addMessage(chatId, text, author));
    if (author !== "bot") {
        const botMessage = {
            text: "Your message has been sent",
            author: "bot",
        };
        setTimeout(
            () =>
                dispatch(
                    addMessage(chatId, botMessage.text, botMessage.author)
                ),
            2000
        );
    }
};
