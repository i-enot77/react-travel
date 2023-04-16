import CardsHeader from "./CardsHeader"
import Video from "./Video";
import '../assets/style/GetReady.css';
import { header } from "../assets/data/sectionHeader";

const GetReady = () => {
    return (
        <div className="getReady_container">
            {header.map((item) => 
            <CardsHeader content={item}>
                <p className="getReady_content">A cabin getaway can be a wonderful way to escape the hustle and bustle of daily life and reconnect with nature.</p>
            </CardsHeader>
            )}
            <>
                <Video/>
            </>
        </div>
    )
}

export default GetReady;