import firebase from "firebase";
import { ADD_CHAT, DELETE_CHAT } from "./constants";

export const addChat = (payload) => ({
    type: ADD_CHAT,
    payload,
});

export const deleteChat = (payload) => ({
    type: DELETE_CHAT,
    payload,
});

export const addChatWithFirebase = () => async (dispatch) => {
    await firebase
        .database()
        .ref("chats")
        .push({ name: "chatName" })
        .then((snap) => {
            const key = snap.key;
            console.log(key);
            dispatch(addChat(key));
        });
};

export const deleteChatWithFirebase = (chatId) => async (dispatch) => {
    await firebase.database().ref("chats").child(chatId).remove();
    dispatch(deleteChat(chatId));
};
