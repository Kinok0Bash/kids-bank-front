import './ProfilePage.scss';
import Title from "../../components/Title/Title.jsx";
import AuthStore from "../../store/AuthStore.js";
import LeftArrow from "../../assets/icons/Base/LeftArrow.jsx";
import Paragraph from "../../components/Paragraph/Paragraph.jsx";
import {useNavigate} from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
const ProfilePage = () => {
    const nav = useNavigate();
    return (
        <div className={'ProfilePage'}>
            <header className={'header ProfilePage__header'} onClick={() => nav('/')}>
                <LeftArrow/>
                <Paragraph level={2} type={'default'}>Личный кабинет</Paragraph>
            </header>
            <div className="ProfilePage__info">
                <Title level={3} type={'default'}>{AuthStore.userData.fullName}</Title>
                <div className="ProfilePage__fields">
                    <Paragraph level={2} type={'default'}>Дата рождения: {AuthStore.userData.birthDate}</Paragraph>
                    <Paragraph level={2} type={'default'}>Возраст: 18</Paragraph>
                    <Paragraph level={2} type={'default'}>Город: {AuthStore.userData.city}</Paragraph>
                </div>
                <div className={'ProfilePage__buttons'}>
                    {!AuthStore.userData.isGetChild && AuthStore.userData.role === 'PARENT' ? <Button type={'main'} style={'dark'} className={'HomePage__button'} onClick={() => nav('/profile/new-child')}>
                        <Paragraph type={'white'} level={2}>Добавить ребенка</Paragraph>
                    </Button> : null}
                    <Button type={'main'} style={'red'} className={'HomePage__button'} onClick={AuthStore.logout}>
                        <Paragraph type={'white'} level={2}>Выйти</Paragraph>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;