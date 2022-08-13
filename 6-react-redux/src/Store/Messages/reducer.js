import { ADD_MESSAGE, SHOW_MESSAGES } from "./constants";

const initialState = {
    messages: {},
    selectedMessages: [],
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentMsgs = state.messages[action.chatId] || [];
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.chatId]: [
                        ...currentMsgs,
                        {
                            id: action.id,
                            author: action.text,
                            text: action.text,
                        },
                    ],
                },
            };
        case SHOW_MESSAGES:
            const currentChatMsgs = state.messages[action.chatId] || [];
            return {
                ...state,
                selectedMessages: [...currentChatMsgs],
            };
        default:
            return state;
    }
};
