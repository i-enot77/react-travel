import { Link } from 'react-router-dom';

const SearchItem = ({src, content, name, children}) => {
    return(
        <Link className={name} to={src}>{children} {content} </Link>
    )
}
export default SearchItem;