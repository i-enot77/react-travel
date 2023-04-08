import React from 'react';
import ListItem from './ListItem';
import '../assets/style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(

        <div className="nav_wrapper">
            <nav>
                <div>
                    <Link className="list_item logo logo_item " to={'/'}><span>unwind</span>cabins</Link>
                </div>
                <ul className="navbar">
                    <ListItem
                        src={'/'}
                        content={"Our cabins"}
                        name={"list_item"}
                    />

                    <ListItem
                        src={'/'}
                        content={"Get inspired"}
                        name={"list_item"}
                    />

                    <ListItem
                        src={'/'}
                        content={"Gift a stay"}
                        name={"list_item"}
                    />

                    <ListItem
                        src={'/'}
                        content={"About us"}
                        name={"list_item"}
                    />

                    <ListItem
                        src={'/'}
                        content={"Sign up"}
                        name={"list_item"}
                    />
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;