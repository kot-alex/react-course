import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowName } from "../../Store/Profile/actions";
import { showNameSelector, nameSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
    const showName = useSelector(showNameSelector);
    const name = useSelector(nameSelector);

    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName());
    }, [dispatch]);

    return (
        <div>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span> {showName && <div>{name}</div>}
        </div>
    );
};
