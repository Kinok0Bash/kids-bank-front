import './CategoryLimit.scss';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import Title      from '../../components/Title/Title.jsx';
import Paragraph  from '../../components/Paragraph/Paragraph.jsx';
import LeftArrow  from '../../assets/icons/Base/LeftArrow.jsx';
import Button     from '../../components/Button/Button.jsx';
import Api        from '../../services/axios/api.js';
import {LIMIT} from "../../constants/endpoints/endpointConst.js";           // обёртка над fetch/axios с токеном внутри

const LimitPage = () => {
    const nav = useNavigate();

    const [limits, setLimits]   = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(null);

    // дергаем список ограничений
    useEffect(() => {
        (async () => {
            try {
                const { data } = await Api.get(LIMIT);
                setLimits(data);
            } catch (e) {
                setError(e.message ?? 'Не удалось получить ограничения');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const toggle = id =>
        setLimits(prev => prev.map(l => l.id === id ? { ...l, isLimit: !l.isLimit } : l));

    const save = async () => {
        try {
            await Api.put(LIMIT, limits);
            nav(-1);
        } catch (e) {
            setError(e.message ?? 'Не удалось сохранить ограничения');
        }
    };

    if (loading) return <Paragraph level={3}>Загрузка…</Paragraph>;
    if (error)   return <Paragraph level={3} type="error">{error}</Paragraph>;

    return (
        <div className="LimitPage">
            {/* HEADER */}
            <header className="LimitPage__header">
                <button className="LimitPage__back" onClick={() => nav(-1)}>
                    <LeftArrow />
                </button>
                <Paragraph level={3}>Запрещённые категории</Paragraph>
            </header>

            {/* LIST */}
            <div className="LimitPage__list">
                {limits.map(({ id, name, isLimit }) => (
                    <label key={id} className="LimitPage__item">
                        <input
                            type="checkbox"
                            checked={isLimit}
                            onChange={() => toggle(id)}
                        />
                        <Paragraph level={2}>{name}</Paragraph>
                    </label>
                ))}
            </div>

            {/* SAVE BTN */}
            <Button
                type="main"
                style="dark"
                className="LimitPage__save"
                onClick={save}
            >
                <Paragraph type="white" level={2}>Сохранить</Paragraph>
            </Button>
        </div>
    );
};

export default LimitPage;
