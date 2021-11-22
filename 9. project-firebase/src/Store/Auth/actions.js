import firebase from "firebase";
import { IS_AUTHENTICATED } from "./constants";

export const isAuthenticated = (payload) => ({
    type: IS_AUTHENTICATED,
    payload,
});

export const initAuthTrackAction = () => (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(isAuthenticated(true));
        } else {
            dispatch(isAuthenticated(false));
        }
    });
};
