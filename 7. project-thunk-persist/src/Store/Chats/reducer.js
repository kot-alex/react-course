import { ADD_CHAT, DELETE_CHAT } from "./constants";

const initialState = {
    chats: [],
};

function uniqueId() {
    return Math.random().toString(36).substr(2, 9);
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    {
                        id: uniqueId(),
                        name: `chat ${state.chats.length + 1}`,
                    },
                ],
            };
        case DELETE_CHAT:
            const filteredChats = state.chats.filter(
                (chat) => chat.id !== action.chatId
            );
            return {
                chats: [...filteredChats],
            };
        default:
            return state;
    }
};
