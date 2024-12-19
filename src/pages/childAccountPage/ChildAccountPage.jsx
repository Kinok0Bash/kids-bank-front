import './ChildAccountPage.scss';
import LeftArrow from "../../assets/icons/Base/LeftArrow.jsx";
import Paragraph from "../../components/Paragraph/Paragraph.jsx";
import {useNavigate} from "react-router-dom";
import Account from "../../components/Account/Account.jsx";
import Menu from "./components/Menu.jsx";

const ChildAccountPage = () => {
    const nav = useNavigate();
    return (
        <div className={'childAccountPage'}>
            <header className={'header childAccountPage__header'} onClick={() => nav('/')}>
                <LeftArrow/>
                <Paragraph level={2} type={'default'}>Финансовый профиль ребенка</Paragraph>
            </header>
            <Account type={'CHILD'}/>
            <Menu />
        </div>
    )
}

export default ChildAccountPage;