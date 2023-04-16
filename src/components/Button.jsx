import '../assets/style/Button.css';

const Button = ({btnName, content}) => {
    return (
            <button className={`${btnName} btn`}>{content}</button>
    )
}
export default Button;