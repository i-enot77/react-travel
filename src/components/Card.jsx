import '../assets/style/Card.css';

const Card = ({content:{name, imgSrc, destination, title, subtitle, children}}) => {
        return ( 
            <div className={name}>
                <div className="card_img__wrapper">
                    <img className="card_img" src={imgSrc} alt="sometext" />
                </div>
                <div className="card_content">
                    <p className="card_destination">{destination}</p>
                    <div className="card_title__wrapper">
                        <div className="card_title">{title}</div>
                        <div className='price'>{children}</div>
                    </div>
                    <p className="card_text">{subtitle}</p>
                </div>
            </div>
        );
}
export default Card;