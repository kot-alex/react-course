import {
    GET_SPACE_PHOTOS_REQUEST,
    GET_SPACE_PHOTOS_SUCCESS,
    GET_SPACE_PHOTOS_FAILURE,
    GET_SPACE_PHOTOS_FULFILL,
} from "./constants";

export const getSpacePhotosRequest = (payload) => ({
    type: GET_SPACE_PHOTOS_REQUEST,
    payload,
});

export const getSpacePhotosSuccess = (payload) => ({
    type: GET_SPACE_PHOTOS_SUCCESS,
    payload,
});

export const getSpacePhotosFailure = (payload) => ({
    type: GET_SPACE_PHOTOS_FAILURE,
    payload,
});

export const getSpacePhotosFulfill = (payload) => ({
    type: GET_SPACE_PHOTOS_FULFILL,
    payload,
});

const GET_SPACE_PHOTOS =
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";

export const getSpacePhotos = () => async (dispatch) => {
    try {
        dispatch(getSpacePhotosRequest());
        const response = await fetch(GET_SPACE_PHOTOS);

        if (!response.ok) {
            throw new Error(`Error occured ${response.status}`);
        }
        const result = await response.json();

        dispatch(getSpacePhotosSuccess(result));
    } catch (error) {
        dispatch(getSpacePhotosFailure());
    } finally {
        dispatch(getSpacePhotosFulfill());
    }
};
