import { TOGGLE_SHOW_NAME } from "../../Store/Profile/actions";

const initialState = {
    showName: false,
    name: "Default",
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_NAME:
            return {
                ...state,
                showName: !state.showName,
            };
        default:
            return state;
    }
};
