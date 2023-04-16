import React from 'react';
import ListItem from './ListItem';
import '../assets/style/Navbar.css';
import { Link } from 'react-router-dom';
import { navbar } from '../assets/data/listItem';

const Navbar = () => {
    return(
        <div className="nav_wrapper">
            <nav>
                <div>
                    <Link className="list_item logo logo_item " to={'/'}><span>unwind</span>cabins</Link>
                </div>
                <ul className="navbar">
                    {navbar.map((item) => <ListItem content={item}/>)}
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;