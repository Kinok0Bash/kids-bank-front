import {observer} from "mobx-react-lite";
import AccountStore from "../../../store/AccountStore..js";
import './Account.scss';
import Title from "../../../components/Title/Title.jsx";
import Paragraph from "../../../components/Paragraph/Paragraph.jsx";

const Account = ({type}) => {
    const balance = type === 'PARENT' ? AccountStore.parentBalance : AccountStore.childBalance;
    return (
        <div className={'account'}>
            <div className="account__header">
                <Paragraph level={5} type={'default'} className={'account__title'}>
                    {type === 'PARENT' ?
                        'Счет Родителя' :
                        'Счет Ребенка'
                    }
                </Paragraph>
                <Paragraph level={5} type={'default'} className={'account__balance'}>
                    {balance}
                </Paragraph>
            </div>
        </div>
    )
}

export default observer(Account);