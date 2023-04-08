import { Link } from "react-router-dom";

const CardsHeader = ({title, content, link, titleName, wrapper, contentName, linkName, children }) => {
    return (
        <div className="wrapper">
            <p className={titleName}>{title}</p>
            <div className={wrapper}>
                <p className={contentName}>{content}</p>
                {children}
                <Link className={linkName} to={'/'}>{link}</Link>
            </div>
        </div>
    );
}

export default CardsHeader;