import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowName } from "../../Store/Profile/actions";
import { showNameSelector, nameSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
    const showName = useSelector(showNameSelector);

    const name = useSelector(nameSelector);

    const dispatch = useDispatch();

    const ShowName = useCallback(() => {
        dispatch(toggleShowName());
    }, [dispatch]);

    // const uid = firebase.auth().currentUser.uid;

    // firebase.database().ref("profile").child(uid).child("name").set();

    // useEffect(() => {
    //     firebase
    //         .database()
    //         .ref("profile")
    //         .child(uid)
    //         .child("name")
    //         .on("value", (snapshot) => {
    //             snapshot.val();
    //         });
    // }, [uid]);

    return (
        <div className="center">
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={ShowName}
            />
            <span>Show Name</span> {showName && <div>{name}</div>}
        </div>
    );
};
