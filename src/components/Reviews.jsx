import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/Reviews.css';

const Reviews = ({reviews}) => {
        return (
            <div className='card_reviews__item'>
            <div className="card_reviews">
                <div className="card_reviews__wrapper">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <p>{reviews}</p>
            </div>
            <FontAwesomeIcon className='heart' icon={faHeart} />
            </div>
           
        );
    }
export default Reviews;