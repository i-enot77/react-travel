import '../assets/style/Qestion.css';
import Button from "./Button";

const Question = ({question: {title, items}}) => {
    return (
        <>
       <div className="question_wrapper">
            <p className="question_title">{title}</p>
            <ul className='question_list'>
                {items.map((item) => <li>{item}</li>)}
            </ul>
       </div> 
       <Button btnName={"about_btn"}>{title}</Button>
       </>
    )
}
export default Question;