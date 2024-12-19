import {Routes, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import MainTemplate from "../../layouts/MainTemplate/MainTemplate.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";
import PrivateRoute from "../PrivateRoute.jsx";
import PayPage from "../../pages/PayPage/PayPage.jsx";
import ProfilePage from "../../pages/ProfilePage/ProfilePage.jsx";
import OperationResultPage from "../../pages/OperationResultPage/OperationResultPage.jsx";

const AppRouting = () => {
    return (
        <Routes>
            <Route path={""} element={<MainTemplate />}>
                <Route path={""} element={<PrivateRoute />}>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path="/resultPayment" element={<OperationResultPage />}/>
                    <Route path={"/profile"} element={<ProfilePage/>} />
                    <Route path={'/pay'} element={<PayPage/>}/>
                    <Route path="/profile/new-child" element={<RegistrationPage type={'CHILD'}/>}/>
                </Route>
                <Route path="/auth/registration" element={<RegistrationPage />}/>
                <Route path="/auth/login" element={<LoginPage />}/>
            </Route>
        </Routes>
    )
}

export default AppRouting;