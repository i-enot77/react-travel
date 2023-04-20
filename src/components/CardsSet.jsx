import '../assets/style/CardsSet.css';
import Card from './Card';
import CardsHeader from './CardsHeader';
import Reviews from './Reviews';
import '../assets/style/CardsSetMargin.css';

const CardsSet = ({isSet, cardSet, cardHeader}) => {
        return (
            <div className='cards_wrapper'>
                {cardHeader.map((content) => <CardsHeader content={content}/>)}
                <div className="cards_items">
                {isSet ? cardSet.map((card) => (
                    <div className='card_item__wrapper'>
                        <Card content={card}/>
                        <Reviews reviews={"82 reviews"}/>
                    </div>
                )
                    ) : cardSet.map((card) => <Card content={card}/>)}
                </div> 
            </div>
       )
}
export default CardsSet;