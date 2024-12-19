import './PayPage.scss';
import Button from "../../components/Button/Button.jsx";
import Paragraph from "../../components/Paragraph/Paragraph.jsx";
import {Html5Qrcode} from "html5-qrcode";
import {observer} from "mobx-react-lite";
import {useEffect, useState} from "react";
import Title from "../../components/Title/Title.jsx";
import AuthStore from "../../store/AuthStore.js";
import RightArrow from "../../assets/icons/Base/RightArrow.jsx";
import {useNavigate} from "react-router-dom";
import LoaderStore from "../../store/LoaderStore.js";
import TransactionStore from "../../store/TransactionStore.js";
const PayPage = () => {
    const nav = useNavigate();
    const [pause,setPause] = useState(false);
    const config = {fps: 30, qrbox: {width: 250,height: 250}};


    useEffect(() => {
        const scanner = new Html5Qrcode('scanner-container');
        const handlerScan = async (decoded) => {
            setPause(true);
            if(!pause) {
                LoaderStore.showLocalLoader();
                await scanner.stop();
                const response = await TransactionStore.pay(JSON.parse(decoded));
                nav('/resultPayment')
                LoaderStore.hideLocalLoader();
            }


        }
        scanner.start(
            {facingMode: 'environment'},
            config ,
            handlerScan)
    }, [])

    return (
        <div className={'PayPage'}>
            <Title level={4} type={'default'}>Наведите камеру на QR-код</Title>
            <div id="scanner-container">

            </div>
            <Button type={'main'} style={'dark'} className={'PayPage__payment'} onClick={() => nav('/')}>
                <Paragraph type={'white'} level={2}>Назад</Paragraph>
            </Button>
        </div>
    )
}

export default observer(PayPage);