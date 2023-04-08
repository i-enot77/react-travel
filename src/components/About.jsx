import Button from "./Button";
import Question from "./Question";
import '../assets/style/About.css';

const About = () => {
    return (
        <div className="about_content">
            <p className="about_title">Frequently asked questions</p>
            <div className="about_item">
                <Question
                    title={"1. About Unwind Cabins"}
                    item1={"• How long have you been in business?"}
                    item2={"• Why did you start this journey?"}
                />

                <Button
                    btnName={"about_btn btn"}
                    content={'About our cabins'}
                />
            </div>

            <div className="about_item">
                <Question
                    title={"2. Tell me more about the cabin"}
                    item1={"• What do I need to bring?"}
                    item2={"• How do I get to the cabin?"}
                />

                <Button
                    btnName={"about_btn btn"}
                    content={'About our cabins'}
                />
            </div>

            <div className="about_item">
                <Question
                    title={"3. Pets, family & friends"}
                    item1={"• Please tell me I can bring my dog"}
                    item2={"• How many people do you cabins sleep?"}
                />

                <Button
                    btnName={"about_btn btn"}
                    content={'About our cabins'}
                />
            </div>
            <p className="about_question">Still have a question?</p>
            <p className="about_text">If you still have questions contact a member of the team on live chat and we’d be more than happy to help</p>
        </div>
    )
}

export default About;