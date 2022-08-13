import firebase from "firebase";
import { Button } from "@material-ui/core";
import "./SignOut.css";

export const SignOut = () => {
    const handleButtonClick = async () => {
        await firebase.auth().signOut();
    };

    return (
        <Button
            onClick={handleButtonClick}
            className="signout_btn"
            variant="contained"
            color="secondary"
            size="small"
        >
            Sign out
        </Button>
    );
};
