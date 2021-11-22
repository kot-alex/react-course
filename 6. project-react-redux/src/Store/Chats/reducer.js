import { ADD_CHAT, DELETE_CHAT } from "./constants";

const initialState = {
    chats: [],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chats: [
                    ...state.chats,
                    {
                        id: `id${state.chats.length + 1}`,
                        name: `chat ${state.chats.length + 1}`,
                    },
                ],
            };
        case DELETE_CHAT:
            const filteredChats = state.chats.filter(
                (chat) => chat.id !== action.chatId
            );
            return {
                ...state,
                chats: filteredChats,
            };
        default:
            return state;
    }
};
