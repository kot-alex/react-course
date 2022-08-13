import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { TextField, Button } from "@material-ui/core";
import { ROUTES } from "../../Routing/constants";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleButtonClick = async () => {
        setError("");
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div className="center">
            <h4>Register</h4>
            <div>
                <TextField
                    variant="outlined"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    onClick={handleButtonClick}
                >
                    Submit
                </Button>
            </div>
            <div>
                <p>
                    Already registered <Link to={ROUTES.SIGN_IN}>Sign in</Link>
                </p>
                {error && <div>{error}</div>}
            </div>
        </div>
    );
};
