import ListItem from "./ListItem";
import '../assets/style/FooterItem.css';
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { footerItem1, footerItem2, footerItem3, footerItem4, footerItem5 } from "../assets/data/listItem";

const FooterItem = () => {
    return(
    <div className="footer_container">
        <div className="footer_wrapper">
            <ul className="list_wrapper">
                {footerItem1.map((item) => <ListItem content={item}/>)}
            </ul>
            <ul className="list_wrapper">
                {footerItem2.map((item) => <ListItem content={item}/>)}
            </ul>
            <ul className="list_wrapper">
                {footerItem3.map((item) => <ListItem content={item}/>)}
            </ul>
            <ul className="list_wrapper">
                {footerItem4.map((item) => <ListItem content={item}/>)}
            </ul> 
            <ul className="list_wrapper">
                {footerItem5.map((item) => <ListItem content={item}/>)}
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