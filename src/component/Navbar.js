import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import useGlobalContext from "../Context";
import { useState } from "react";

export default function Navbar() {
    const [navTheme, setNavtheme] = useState(false);

    const Theme = navTheme ? {
        backgroundColor: 'rgb(9, 132, 255,0.6)', color: '#f4f4f4'
    } : {
        backgroundColor: 'white', color: 'rgb(31, 31, 31)'
    };
    const cartTheme = !navTheme ? {
        backgroundColor: 'rgb(61, 61, 61)', color: '#f4f4f4'
    } : {
        backgroundColor: 'white', color: 'rgb(31, 31, 31)'
    };


    window.addEventListener('scroll', (e) => {
        const checkDistance = e.srcElement.children[0].children[1].children[1].children[0].children[1].children[0].getBoundingClientRect().top < -200;

        setNavtheme(checkDistance)
    })

    const { newItems, ttamount } = useGlobalContext();

    return <nav className="navigation" style={Theme}>
        <div className="navbar-brand">
            <img src="https://pro1globalhomecenter.com/wp-content/uploads/2020/04/cropped-PRO-1-Global-Logo-512x172-RGB.png" alt="" />

            <h4>Navbar</h4>
        </div>

        <ul>
            <Link to='/' className="nav-item" style={{ color: `${Theme.color}` }}>Items</Link>
            <Link to='/about' className="nav-item" style={{ color: `${Theme.color}` }}>About</Link>
            <Link to='/contact' className="nav-item" style={{ color: `${Theme.color}` }}>Contact</Link>
        </ul>

        <Link to='/cart' className="cart">
            <p style={cartTheme}>
                <span>{ttamount > 0 ? ttamount : newItems.length}</span>
            </p>
            <Icon icon="emojione:shopping-cart" className="cart-icon" />
        </Link>
    </nav>
}