export const messagesSelector = (state) => state.messages.messages;

export const getMessagesByChatId = (chatId) => {
    return (state) => state.messages.messages[chatId] ?? [];
};
