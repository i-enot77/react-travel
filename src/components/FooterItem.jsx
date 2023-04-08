import ListItem from "./ListItem";
import '../assets/style/FooterItem.css';
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterItem = () => {
    return(
    <div className="footer_container">
        <div className="footer_wrapper">
            <ul className="list_wrapper">
                <ListItem
                    src={'/'}
                    content={'About us'}
                    name={"list_item__gray green"}
                />
                <ListItem
                    src={'/'}
                    content={'Our story'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Why us'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'How it works'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'FAQ'}
                    name={"list_item__gray"}
                />
            </ul>

            <ul className="list_wrapper">
                <ListItem
                    src={'/'}
                    content={'Our cabins'}
                    name={"list_item__gray green"}
                />
                <ListItem
                    src={'/'}
                    content={'Acacia Retreat'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Golden Hideaway'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Oak Treehouse'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Blue Lagoon'}
                    name={"list_item__gray"}
                />
            </ul>

            <ul className="list_wrapper">
                <ListItem
                    src={'/'}
                    content={'Get inspired'}
                    name={"list_item__gray green"}
                />
                <ListItem
                    src={'/'}
                    content={'Explore nature'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Hiking trails'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Swimming'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Fishing'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Relax and re-rest'}
                    name={"list_item__gray"}
                />
            </ul>

            <ul className="list_wrapper">
                <ListItem
                    src={'/'}
                    content={'Great food and drink'}
                    name={"list_item__gray green"}
                />
                <ListItem
                    src={'/'}
                    content={'Pubs'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Resturants'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Food markets'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Picnics'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'For you and yours'}
                    name={"list_item__gray"}
                />
            </ul> 

            <ul className="list_wrapper">
                <ListItem
                    src={'/'}
                    content={'Support'}
                    name={"list_item__gray green"}
                />
                <ListItem
                    src={'/'}
                    content={'Help'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Contact us'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Privacy Policy'}
                    name={"list_item__gray"}
                    
                />
                <ListItem
                    src={'/'}
                    content={'Terms of Service'}
                    name={"list_item__gray"}
                />
                <ListItem
                    src={'/'}
                    content={'Complaints Policy'}
                    name={"list_item__gray"}
                />
            </ul>
        </div>
            <div className="footer_wrapper">
                <div className="footer_sign__content">
                    <p className="footer_sign__title">Sign up to our Newsletter</p>
                    <p className="footer_sign__text">For a weekly curated collection of 3 things you can watch, read or listen to switch off from the busy everyday.</p>
                </div>
                <form>
                    <input type="text" placeholder="james@thegaintpeach.com" />
                    <Button
                        btnName={"footer_btn btn"}
                        content={"Join the mailing list"}
                    />
                </form>
            </div>

            <div className="footer_wrapper">
                <p className="footer_logo">Unwind<span>Cabins</span></p>
                <p className="footer_copywright">© 2023 UnwindCabins</p>
                <div className="footer_media">
                    <FontAwesomeIcon className="media" icon={faTwitter} /> 
                    <FontAwesomeIcon className="media" icon={faFacebookF} />
                    <FontAwesomeIcon className="media" icon={faInstagram} />
                    <FontAwesomeIcon className="media" icon={faTwitter} />
                </div>
            </div>
        
    </div>
    )
}

export default FooterItem;