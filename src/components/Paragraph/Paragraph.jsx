import './Paragraph.scss';
const Paragraph = ({level, children, type, className}) => {
    return (
        <p className={`paragraph paragraph_level-${level} paragraph_${type} ${className}`}>
            {children}
        </p>
    )
}

export default Paragraph;