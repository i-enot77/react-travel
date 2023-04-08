import { Link } from 'react-router-dom';
import '../assets/style/ListItem.css';

const ListItem = ({src, content, name, children}) => {
    return(
        <li className="item">
            {children}
            <Link className={name} to={src}> {content} </Link>
        </li>
    )
}

export default ListItem;