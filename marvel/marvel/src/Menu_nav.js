import React from 'react';
import './App.css';
import './Charcters.css';
import {Link} from 'react-router-dom';
import logo from "./Images/Marvel_Studios_logo.jpg"


function Menunav() {
    return (
        <nav>

                <ul>
                    <div className="text-left"><img className="logo" src={logo} alt='marvel'/></div>
                    <li  className='vermelho col-5 pt-4'><Link to="/Home">Home</Link></li>
                    <li className=" pt-4"><Link to="/Main">Marvel Memory Game </Link></li>
                    <li className=" pt-4"><Link to="/Characters">Characters </Link></li>
                    <li className=" pt-4"><Link to="/Video_characters">Trailers </Link></li>
                </ul>

        </nav>
    );
}

export default Menunav;