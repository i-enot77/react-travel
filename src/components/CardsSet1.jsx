import '../assets/style/CardsSet.css';
import Card from './Card';
import CardsHeader from './CardsHeader';
import { cardHeader1, cardSet1 } from '../assets/data/cardSet1';
import Reviews from './Reviews';

const CardsSet1 = () => {
    return (
        <div className='cards_wrapper'>
             {cardHeader1.map((content) => <CardsHeader content={content}/>)}
            
             <div className="cards_items">  
                {cardSet1.map((card) => 
                <div className='card_item__wrapper'>
                    <Card content={card}/>
                    <Reviews reviews={"82 reviews"}/>
                </div>)}
            </div>
        </div>
    )
}
export default CardsSet1;