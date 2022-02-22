import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import useGlobalContext from "../Context";

export default function Navbar() {

    const { newItems, ttamount } = useGlobalContext();

    return <nav className="navigation">
        <div className="navbar-brand">
            <img src="https://pro1globalhomecenter.com/wp-content/uploads/2020/04/cropped-PRO-1-Global-Logo-512x172-RGB.png" alt="" />

            <h4>Navbar</h4>
        </div>

        <ul>
            <Link to='/' className="nav-item">Items</Link>
            <Link to='/about' className="nav-item">About</Link>
            <Link to='/contact' className="nav-item">Contact</Link>
        </ul>

        <Link to='/cart' className="cart">
            <p>
                <span>{ttamount > 0 ? ttamount : newItems.length}</span>
            </p>
            <Icon icon="emojione:shopping-cart" className="cart-icon" />
        </Link>
    </nav>
}