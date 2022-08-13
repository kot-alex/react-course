import { ADD_MESSAGE } from "./constants";

const initialState = {
    messages: {},
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentChatMsgs = state.messages[action.payload.chatId] || [];
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [
                        ...currentChatMsgs,
                        {
                            id: `${action.payload.chatId}${currentChatMsgs.length}`,
                            text: action.payload.text,
                            author: action.payload.author,
                        },
                    ],
                },
            };
        default:
            return state;
    }
};
