import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { TextField, Button } from "@material-ui/core";
import { ROUTES } from "../../Routing/constants";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleButtonClick = async () => {
        setError("");
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <div className="center">
            <h4>Sign in</h4>
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
                    Not registered yet <Link to={ROUTES.SIGN_UP}>Register</Link>
                </p>
                {error && <div>{error}</div>}
            </div>
        </div>
    );
};
