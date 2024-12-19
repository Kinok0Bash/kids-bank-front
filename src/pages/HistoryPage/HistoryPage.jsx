import Button from "../../components/Button/Button.jsx";
import Paragraph from "../../components/Paragraph/Paragraph.jsx";
import {observer} from "mobx-react-lite";
import './HistoryPage.scss';
import {useNavigate} from "react-router-dom";
import OperationHistory from "../../components/OperationHistory/OperationHistory.jsx";

const HistoryPage = () => {
    const nav = useNavigate();


    return (
        <div className={'HistoryPage'}>
            <Paragraph level={3} type={'default'} className={'HistoryPage__title'}>
               История операций
            </Paragraph>
            <OperationHistory type={'ALL'}/>

            <Button type={'main'} style={'dark'} className={'HistoryPage__accept'} onClick={() => nav('/childAccount')}>
                <Paragraph type={'white'} level={2}>Хорошо</Paragraph>
            </Button>
        </div>
    )
}

export default observer(HistoryPage);