import {observer} from "mobx-react-lite";
import AccountStore from "/src/store/AccountStore..js";
import './Account.scss';
import Paragraph from "/src/components/Paragraph/Paragraph.jsx";
import bg from "/src/assets/img/account-bg.png";
import {amountFormatter} from "../../utils/amountFormatter.js";

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
                    {amountFormatter(balance)}
                </Paragraph>
            </div>
            <img className={"account__bg"} src={bg}/>
        </div>
    )
}

export default observer(Account);