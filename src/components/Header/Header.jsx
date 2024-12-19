import Title from "../Title/Title.jsx";
import AuthStore from "../../store/AuthStore.js";
import RightArrow from "../../assets/icons/Base/RightArrow.jsx";
import {useNavigate} from "react-router-dom";
import './Header.scss';
import {observer} from "mobx-react-lite";
const Header = () => {
    const navigate = useNavigate();
    const handlerClick = () => {
        navigate('/profile');
    }

    return (
        <header onClick={handlerClick} className={'header'}>
            <Title level={4} type={'default'}>{AuthStore.userData.name}</Title>
            <RightArrow />
        </header>
    )
}


export default observer(Header);