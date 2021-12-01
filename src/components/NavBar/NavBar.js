import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo_10.jpg'
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'


export default function NavBar() {

    return(
        
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="Logo ecommerce"/>
                </div> 
                <ul>
                    <li><Button variant="contained">Home</Button></li>    
                    <li><Button variant="contained">Products</Button></li>
                    <li><Button variant="contained">Contact</Button></li>
                    <li><Button variant="contained">About</Button></li>
                </ul>   
                <CartWidget/>
            </nav>
        
    )

}







