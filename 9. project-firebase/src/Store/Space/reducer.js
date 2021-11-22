import {
    GET_SPACE_PHOTOS_REQUEST,
    GET_SPACE_PHOTOS_SUCCESS,
    GET_SPACE_PHOTOS_FAILURE,
    GET_SPACE_PHOTOS_FULFILL,
} from "./constants";

const initialState = {
    loading: true,
    error: undefined,
    spacePhotos: [],
};

export const spacePhotosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SPACE_PHOTOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        case GET_SPACE_PHOTOS_SUCCESS:
            return {
                ...state,
                spacePhotos: action.payload,
            };
        case GET_SPACE_PHOTOS_FAILURE:
            return {
                ...state,
                error: true,
            };
        case GET_SPACE_PHOTOS_FULFILL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
