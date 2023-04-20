import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SearchItem = ({searchContent:{src, content, searchName, icon}}) => {
    return(
        <Link  className={`${searchName} search_item`} to={src}>
            <FontAwesomeIcon className='search_icon' icon={icon} />
            {content} 
        </Link>
    )
}
export default SearchItem;