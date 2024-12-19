import './AmountInput.scss';
import AccountStore from "../../../store/AccountStore..js";
const AmountInput = ({amount,setAmount}) => {

    const amountChanger = (value) => {
        console.log(amount)
        if(value === -1) {
            if(amount === 0) return;
            setAmount(amount.slice(0,-1));
        } else {
            if(+(amount + value) > AccountStore.parentBalance) setAmount(String(AccountStore.parentBalance));
            else setAmount(amount + value);
        }
    }

    return (
        <section className="amountInput">
            <button className="amountInput__button" onClick={() => amountChanger(1)}>1</button>
            <button className="amountInput__button" onClick={() => amountChanger(2)}>2</button>
            <button className="amountInput__button" onClick={() => amountChanger(3)}>3</button>
            <button className="amountInput__button" onClick={() => amountChanger(4)}>4</button>
            <button className="amountInput__button" onClick={() => amountChanger(5)}>5</button>
            <button className="amountInput__button" onClick={() => amountChanger(6)}>6</button>
            <button className="amountInput__button" onClick={() => amountChanger(7)}>7</button>
            <button className="amountInput__button" onClick={() => amountChanger(8)}>8</button>
            <button className="amountInput__button" onClick={() => amountChanger(9)}>9</button>
            <button className="amountInput__button" onClick={() => amountChanger(0)}>0</button>
            <button className="amountInput__button" onClick={() => amountChanger(-1)}>{'<'}</button>
        </section>
    )
}

export default AmountInput;