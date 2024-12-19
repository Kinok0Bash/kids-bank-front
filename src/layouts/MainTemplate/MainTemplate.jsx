import {Outlet} from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import './MainTemplate.scss';

const MainTemplate = () => {
    return (
        <>
            <Layout type={'thin'} className={'mainTemplate'}>
                <Outlet />
            </Layout>
        </>
    )
}

export default MainTemplate;