import { ADD_MESSAGE } from "./constants";

const initialState = {
    messages: {},
};

function uniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentChatMsgs = state.messages[action.chatId] || [];
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.chatId]: [
                        ...currentChatMsgs,
                        {
                            id: uniqueId(),
                            text: action.text,
                            author: action.author,
                        },
                    ],
                },
            };
        default:
            return state;
    }
};
