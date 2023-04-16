import Button from "./Button";
import Question from "./Question";
import '../assets/style/About.css';
import { questions } from "../assets/data/question";

const About = () => {
    return (
        <div className="about_content">
            <p className="about_title">Frequently asked questions</p>

            {questions.map((question) => <div className="about_item">
            <Question question={question}/>
            <Button btnName={"about_btn"} content={"About our cabins"}/>
            </div>)}

            <p className="about_question">Still have a question?</p>
            <p className="about_text">If you still have questions contact a member of the team on live chat and we’d be more than happy to help</p>
        </div>
    )
}
export default About;