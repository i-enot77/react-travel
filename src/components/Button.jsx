import '../assets/style/Button.css';

const Button = ({btnName, children}) => {
    return (
            <button className={`${btnName} btn`}>{children}</button>
    )
}
export default Button;