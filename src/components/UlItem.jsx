import ListItem from "./ListItem";
import { footerItems } from "../assets/data/listItem";

const UlItem = () => {
    return(
        <>
        {footerItems.map(items => 
            <ul className="list_wrapper">
                {items.item.map((list) => <ListItem content={list}/>)}
            </ul>
        )}
        </>
        
    )
}
export default UlItem;