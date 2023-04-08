import '../assets/style/Button.css';

const Button = ({btnName, content}) => {
    return (
        <>
            <button className={btnName}>{content}</button>
        </>
    )
}

export default Button;