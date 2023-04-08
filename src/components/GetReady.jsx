import CardsHeader from "./CardsHeader"
import Video from "./Video";
import '../assets/style/GetReady.css';

const GetReady = () => {
    return (
        <div className="getReady_container">
            <CardsHeader
                title={"Get ready to unwind"}
                content={"A cabin getaway can be a wonderful way to relax and reconnect with nature. Many cabin rentals are located in beautiful, secluded areas, surrounded by trees and other natural beauty."}
                link={"Learn more"}
                titleName={"getReady_title"}
                wrapper={"getReady_wrapper"}
                contentName={"getReady_content"}
                linkName={"getReady_link"}
            >
                <p className="getReady_content">A cabin getaway can be a wonderful way to escape the hustle and bustle of daily life and reconnect with nature.</p>
            </CardsHeader>
            <>
                <Video/>
            </>
        </div>
    )
}

export default GetReady;