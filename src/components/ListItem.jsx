import { Link } from 'react-router-dom';
import '../assets/style/ListItem.css';

const ListItem = ({content:{src, content, name}}) => {
    return(
        <li className="item">
            <Link className={name} to={src}> {content} </Link>
        </li>
    )
}
export default ListItem;