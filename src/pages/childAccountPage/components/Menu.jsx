import {Link} from "react-router-dom";
import Paragraph from "../../../components/Paragraph/Paragraph.jsx";
import './Menu.scss';

const Menu = () => {
    const menuItems = [
        {
            name: "Пополнить счет",
            path: "/childTransfer"
        },
        {
            name: "История операций",
            path: "/history"
        },
        {
            name: "Ограничить категории",
            path: "/categories"
        },
    ]

    return (
        <section className="menu">
            <ul className="menu__list">
                {menuItems.map((item) => (
                    <li className="menu__item">
                        <Link to={item.path}>
                            <Paragraph level={2} type={'default'}>{item.name}</Paragraph>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )

}
export default Menu;
