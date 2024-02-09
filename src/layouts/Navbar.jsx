import { Close, DragHandle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react'

export default function Navbar() {



    // Navbar Javascript

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);



    return (
        <div className='navbar'>

            <a className='logo' href="#home">Welldone</a>


            <div className='navigation'>

                <IconButton onClick={toggleMenu} className='menuBtn'>
                    {!isMenuVisible &&
                        <DragHandle className='menuIcon' />
                    }


                    {isMenuVisible &&
                        <Close className='menuIcon' />
                    }
                </IconButton>


                <ul className={`menu ${isMenuVisible ? 'active' : 'hidden'}`}>
                    <li className='menuItem'><a href="#home">Home</a></li>
                    <li className='menuItem'><a href="#home">Portfolio</a></li>
                    <li className='menuItem'><a href="#home">Services</a></li>
                    <li className='menuItem'><a href="#home">About</a></li>
                    <li className='menuItem'><a href="#home">Pricing</a></li>
                    <li className='menuItem'><a href="#home">Contact</a></li>
                </ul>



            </div>


        </div>
    )
}
