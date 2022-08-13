import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowName } from "../../Store/Profile/actions";

export const Profile = () => {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();
    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
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
