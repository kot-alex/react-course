import { ADD_MESSAGE } from "./constants";

export const addMessage = (payload) => ({
    type: ADD_MESSAGE,
    payload,
});

export const addMessageWithThunk =
    ({ chatId, text, author }) =>
    (dispatch) => {
        dispatch(addMessage({ chatId, text, author }));
        if (author !== "bot") {
            const { text, author } = {
                text: "Your message has been sent",
                author: "bot",
            };
            setTimeout(
                () => dispatch(addMessage({ chatId, text, author })),
                1500
            );
        }
    };
