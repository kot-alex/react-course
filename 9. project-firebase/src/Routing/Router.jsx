import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { ROUTES } from "./constants";
import { Home } from "../Pages/Home/Home";
import { Profile } from "../Pages/Profile/Profile";
import { Chats } from "../Pages/Chats/Chats";
import { NoChats } from "../Components/NoChats/NoChats";
import { Space } from "../Pages/Space/Space";
import { SignUp } from "../Pages/SignUp/SignUp";
import { SignIn } from "../Pages/SignIn/SignIn";
import { initAuthTrackAction } from "../Store/Auth/actions";

export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthTrackAction());
    }, [dispatch]);

    return (
        <Switch>
            <PublicRoute exact path={ROUTES.MAIN}>
                <Home />
            </PublicRoute>
            <PublicRoute exact path={ROUTES.SPACE_PHOTOS}>
                <Space />
            </PublicRoute>
            <PublicRoute exact path={ROUTES.SIGN_IN}>
                <SignIn />
            </PublicRoute>
            <PublicRoute exact path={ROUTES.SIGN_UP}>
                <SignUp />
            </PublicRoute>
            <PrivateRoute exact path={ROUTES.PROFILE}>
                <Profile />
            </PrivateRoute>
            <PrivateRoute path={ROUTES.CHATS}>
                <Chats />
            </PrivateRoute>
            <PrivateRoute path={ROUTES.NO_CHAT}>
                <NoChats />
            </PrivateRoute>
            <PrivateRoute>
                <h3>Page not found</h3>
            </PrivateRoute>
        </Switch>
    );
};
