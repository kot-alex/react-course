import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spacePhotosSelector } from "../../Store/Space/selectors";
import { getSpacePhotos } from "../../Store/Space/actions";
import { CircularProgress, Button, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./Space.css";

export const Space = () => {
    const { spacePhotos, loading, error } = useSelector(spacePhotosSelector);

    const dispatch = useDispatch();

    const requestSpacePhotos = useCallback(() => {
        dispatch(getSpacePhotos());
    }, [dispatch]);

    useEffect(() => {
        requestSpacePhotos();
    }, [requestSpacePhotos]);

    const renderSpacePhotos = useCallback(
        (spacePhotos) => (
            <li className="space-list-item" key={spacePhotos.date}>
                <p>{spacePhotos.title}</p>
                <img
                    className="space-list-image"
                    src={spacePhotos.url}
                    alt="img"
                />
            </li>
        ),
        []
    );

    if (loading) {
        return (
            <div className="space">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div className="space">
                <h3>Oops! Something went wrong.</h3>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={requestSpacePhotos}
                >
                    Retry
                </Button>
            </div>
        );
    }

    return (
        <div className="space-list">
            <Fab
                variant="extended"
                color="primary"
                className="space-list-load_btn"
                onClick={requestSpacePhotos}
            >
                <AddIcon />
                &nbsp;Load More
            </Fab>
            <ul>{spacePhotos.map(renderSpacePhotos)}</ul>
        </div>
    );
};
