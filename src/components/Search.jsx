import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCalendarCheck, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import SearchItem from "./SearchItem";
import '../assets/style/Search.css';

const Search = () => {
    return (
        <div className="search_container">
            <div className="search_wrapper">
            <SearchItem
                src={'/'}
                content={"I want to go"}
                name={"search_item long"}
            >
              <FontAwesomeIcon className='search_icon' icon={faCheck} />  
            </SearchItem>

            <SearchItem
                src={'/'}
                content={"Check in"}
                name={"search_item"}
            >
              <FontAwesomeIcon className='search_icon' icon={faCalendarCheck} />  
            </SearchItem>

            <SearchItem
                src={'/'}
                content={"Check out"}
                name={"search_item"}
            >
              <FontAwesomeIcon className='search_icon' icon={faCalendarCheck} />  
            </SearchItem>

            <SearchItem
                src={'/'}
                content={"Travellers"}
                name={"search_item"}
            >
              <FontAwesomeIcon className='search_icon' icon={faUserGroup} />  
            </SearchItem>

            <SearchItem
                src={'/'}
                content={"Find avilable cabins"}
                name={"search_item color_green"}
            />
            </div>
        </div>
    )
}
export default Search;