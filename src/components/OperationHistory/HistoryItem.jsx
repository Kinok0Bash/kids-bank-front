import Paragraph from "../Paragraph/Paragraph.jsx";
import {amountFormatter} from "../../utils/amountFormatter.js";

const HistoryItem = ({name,category,sum,date}) => {
    console.log(name,category,sum, date)


    return (
        <li className="operationHistory__item operationHistory-item">
            <div className="operationHistory-item__leftPart">
                <Paragraph level={2} type={'default-bold'}>{name}</Paragraph>
                <Paragraph level={3}>{category}</Paragraph>
            </div>
            <div className="operationHistory-item__rightPart">
                <Paragraph level={2} type={category === 'Входящий' ? 'green' : 'default'}>
                    {category === 'Входящий' ? '+' : '-'} {amountFormatter(sum)}
                </Paragraph>
            </div>
        </li>
    )
}

export default HistoryItem;