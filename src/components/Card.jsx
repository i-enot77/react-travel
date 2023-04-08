import '../assets/style/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Card = ({name,
    imgSrc,
    destination,
    title,
    subtitle,
    content,
    reviews,
    children
}) => {
        const Reviews = () => {
            if (content) {
                return (
                    <>
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
                    </>
                   
                );
            }
        }
        return ( 
            <div className={name}>
                <div className="card_img__wrapper">
                    <img className="card_img" src={imgSrc} alt="sometext" />
                </div>
                <div className="card_content">
                    <p className="card_destination">{destination}</p>
                    <div className="card_title__wrapper">
                        <div className="card_title">{title}</div>
                        {children}
                    </div>
                    <p className="card_text">{subtitle}</p>

                    <>{Reviews()}</>
                </div>
            </div>
        );
}

export default Card;