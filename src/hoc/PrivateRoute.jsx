import {observer} from "mobx-react-lite";
import {Navigate, Outlet} from "react-router-dom";
import AuthStore from "../store/AuthStore.js";
import LoaderStore from "../store/LoaderStore.js";
import {useEffect} from "react";

const PrivateRoute = () => {


    return AuthStore.isAuth ? (
        <Outlet />
    ) : <Navigate to={'/auth/login'}/>
}

export default observer(PrivateRoute);