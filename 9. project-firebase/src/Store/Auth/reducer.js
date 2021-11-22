import { IS_AUTHENTICATED } from "./constants";

const initialState = {
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                isAuth: action.payload
            };
        default:
            return state;
    }
};
