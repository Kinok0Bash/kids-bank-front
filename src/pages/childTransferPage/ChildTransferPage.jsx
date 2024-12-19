import './ChildTransferPage.scss';
import LeftArrow from "../../assets/icons/Base/LeftArrow.jsx";
import Paragraph from "../../components/Paragraph/Paragraph.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {amountFormatter} from "../../utils/amountFormatter.js";
import Title from "../../components/Title/Title.jsx";
import AmountInput from "./components/AmountInput.jsx";
import Button from "../../components/Button/Button.jsx";
import LoaderStore from "../../store/LoaderStore.js";
import TransactionStore from "../../store/TransactionStore.js";


const ChildTransferPage = () => {
    const nav = useNavigate();
    const [amount,setAmount] = useState('');

    const handlerTransfer = async () => {
        LoaderStore.showLocalLoader();
        try {
            const res = await TransactionStore.transferToChild(+amount);
            if(res.status === 200) {
                nav('/');
            }
        } finally {
            LoaderStore.hideLocalLoader();
        }

    }

    return (
        <div className={'childTransferPage'}>
            <header className={'header childTransferPage__header'} onClick={() => nav('/childAccount')}>
                <LeftArrow />
                <Paragraph level={2} type={'default'}>Перевод ребенку</Paragraph>
            </header>
            <Title type={'default'} level={1}>{amountFormatter(amount || '0')}</Title>
            <AmountInput amount={amount} setAmount={setAmount}/>
            <Button
                type={'main'} style={'dark'}
                onClick={handlerTransfer}
                className={'childTransferPage__transfer'}
                disabled={!amount}
            >
                <Paragraph level={2} type={'white'}>Перевести</Paragraph>
            </Button>
        </div>
    )
}

export default ChildTransferPage;