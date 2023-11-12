import React from "react";
// import logoimg from "../../assets/Logo.png";
import "./style.css";
import {Link} from "react-router-dom" ;

const Header = () => {
    return (
        <div class="lading-page">
        <div class="Header-Navbar">
           <div class="logo">
    
           </div>
           <div class="navigation">
            <Link>
            <p class="our-services">Our Services</p>
            </Link>
            <Link>
            <p class="why-us">Why Us</p>
            </Link>
            <Link>
            <p class="testimonial">Testimonial</p>
            </Link>
            <Link>
            <p class="faq">Faq</p>
            </Link>
           </div>

           
        </div>
        </div>
    );
};
export default Header;