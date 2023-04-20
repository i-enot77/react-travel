import SearchItem from "./SearchItem";
import '../assets/style/Search.css';
import { searchContent } from '../assets/data/search';

const Search = () => {
    return (
        <div className="search_container">
            <div className="search_wrapper">
            {searchContent.map((item) => <SearchItem searchContent={item}/>)}
            </div>
        </div>
    )
}
export default Search;