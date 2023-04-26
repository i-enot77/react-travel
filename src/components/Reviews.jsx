import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/Reviews.css';

const Reviews = ({reviews}) => {
    const icons = [faStar, faStar, faStar, faStar, faStar];
        return (
            <div className='card_reviews__item'>
            <div className="card_reviews">
                <div className="card_reviews__wrapper">
                {icons.map((item) => <FontAwesomeIcon icon={item}/>)}
                </div>
                <p>{reviews}</p>
            </div>
            <FontAwesomeIcon className='heart' icon={faHeart} />
            </div>
           
        );
    }
export default Reviews;