import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import useGlobalContext from "../Context";
import { useState } from "react";
import { images } from '../constants/images';

export default function Navbar({ setSidebar }) {
    const [navTheme, setNavtheme] = useState(false);

    const Theme = navTheme ? {
        backgroundColor: '#474c6d85', color: '#f4f4f4'
    } : {
        backgroundColor: '#313552', color: '#EEE6CE'
    };
    const cartTheme = !navTheme ? {
        backgroundColor: '#f4f4f4', color: '#313552'
    } : {
        backgroundColor: '#313552', color: '#f4f4f4'
    };


    window.addEventListener('scroll', (e) => {
        const checkDistance = e.srcElement.children[0].children[1].children[1].children[0].children[1].children[0].getBoundingClientRect().top < -200;

        setNavtheme(checkDistance)
    })

    const { newItems, ttamount } = useGlobalContext();

    return <nav className="navigation" style={Theme}>
        <div className="navbar-brand">
            <img src={images.logo} alt="" />
        </div>

        <ul className="nav-links">
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

        <button className="btn menu-btn" style={{ color: `${Theme.color}` }}
            onClick={() => setSidebar(true)}>
            <Icon icon="fa6-solid:bars-staggered" />
        </button>
    </nav>
}