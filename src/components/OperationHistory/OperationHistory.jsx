import Title from "../Title/Title.jsx";
import {observer} from "mobx-react-lite";
import './OperationHistory.scss';
import RightArrow from "../../assets/icons/Base/RightArrow.jsx";
import {useEffect} from "react";
import AccountStore from "../../store/AccountStore..js";

const OperationHistory = (type) => {
    // useEffect(() => {
    //     async function fetch() {
    //         await AccountStore.getAllOperations();
    //     }
    //
    //     fetch();
    // }, [])

    return (
        <section className={'operationHistory'}>
                {AccountStore.transactions.map((item) => {
                    return (
                        <>Хуй</>
                    )
                })}
        </section>
    )
}

export default observer(OperationHistory);