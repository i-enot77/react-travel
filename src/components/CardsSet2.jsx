import '../assets/style/CardsSet.css';
import '../assets/style/CardsSetMargin.css';
import Card from './Card';
import CardsHeader from './CardsHeader';

import card_01 from '../assets/img/cardSet_01.png';
import card_02 from '../assets/img/cardSet_02.png';
import card_03 from '../assets/img/cardSet_03.png';

const CardsSet2 = () => {
    return (
        <div className='cards_wrapper'>
            <CardsHeader
                title={"Inspiration for your next getaway"}
                content={"We’ve curated some amazing experiences to help you find your next getaway."}
                link={"View all experiences"}
                titleName={"cards_title"}
                wrapper={"cards_content__wrapper"}
                contentName={"cards_content"}
                linkName={"cards_link"}
            />
            <div className="cards_items__wrapper">  
                <Card
                    name={"card_item light"}
                    imgSrc={card_01}
                    destination={"For those who love"}
                    title={"To Explore nature"}
                    subtitle={"Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands."}
                />

                <Card
                    name={"card_item light"}
                    imgSrc={card_02}
                    destination={"For those who want"}
                    title={"To Relax, rest & re-set"}
                    subtitle={"Experience mind and body connection through breathing exercises and relaxation with our Yoga inspired get away for you and the family. "}
                />

                <Card
                    name={"card_item light"}
                    imgSrc={card_03}
                    destination={"For those who have"}
                    title={"Four-legged friends"}
                    subtitle={"When going on holiday nobody wants to put their dog in a kennel. So, lets keep the family together with our pet friendly cabins."}
                />
            </div>     
        </div>
    )
}
export default CardsSet2;