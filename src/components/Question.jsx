import '../assets/style/Qestion.css';

const Question = ({title, item1, item2}) => {
    return (
       <div className="question_wrapper">
            <p className="question_title">{title}</p>
            <ul className='question_list'>
                <li>{item1}</li>
                <li>{item2}</li>
            </ul>
       </div> 
    )
}

export default Question;