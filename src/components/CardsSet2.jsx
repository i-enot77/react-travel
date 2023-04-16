import '../assets/style/CardsSet.css';
import '../assets/style/CardsSetMargin.css';
import Card from './Card';
import CardsHeader from './CardsHeader';
import { cardSet2, cardHeader2} from "../assets/data/cardSet2";

const CardsSet2 = () => {
    return (
        <div className='cards_wrapper'>
            {cardHeader2.map((content) => <CardsHeader content={content}/>)}

            <div className="cards_items">
                {cardSet2.map((card) => 
                   <Card content={card}/>
                   )}
            </div>     
        </div>
    )
}
export default CardsSet2;