import '../assets/style/CardsSet.css';
import Card from './Card';
import CardsHeader from './CardsHeader';

import card_01 from '../assets/img/card_01.png';
import card_02 from '../assets/img/card_02.png';
import card_03 from '../assets/img/card_03.png';

const CardsSet1 = () => {
    return (
        <div className='cards_wrapper'>
            <CardsHeader
                title={"Discover our idyllic countryside cabins"}
                content={"Fully equipped kitchen and bathroom with plenty of walking and cycling routes to explore."}
                link={"View all cabins"}
                titleName={"cards_title"}
                wrapper={"cards_content__wrapper"}
                contentName={"cards_content"}
                linkName={"cards_link"}

            />
            <div className="cards_items__wrapper">  
                <Card
                    name={"card_item"}
                    imgSrc={card_01}
                    destination={"Hampshire · England"}
                    title={"Rustic country retreat"}
                    subtitle={"Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat."}
                    content={true}
                    reviews={"82 reviews"}
                >
                    <div className='price'>£210pp</div>
                </Card>

                <Card
                    name={"card_item"}
                    imgSrc={card_02}
                    destination={"Norfolk · England"}
                    title={"Cozy getaway cabin"}
                    subtitle={"Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat."}
                    content={true}
                    reviews={"82 reviews"}
                >
                    <div className='price'>£312pp</div>
                </Card>

                <Card
                    name={"card_item"}
                    imgSrc={card_03}
                    destination={"Hampshire · England"}
                    title={"Rustic country retreat"}
                    subtitle={"Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat."}
                    content={true}
                    reviews={"82 reviews"}
                >
                    <div className='price'>£210pp</div>
                </Card>
            </div>     
        </div>
    )
}
export default CardsSet1;