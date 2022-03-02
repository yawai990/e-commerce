import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './Sidebar.css';
import useGlobalContext from '../../Context';

export const Sidebar = ({ navbarLink, social, setSidebar }) => {
    const { newItems, ttamount } = useGlobalContext();

    return <div className="sidebar-wrapper" onClick={() => setSidebar(false)}>
        <div className="sidebar">

            <div className="sidebar-header">

                <div className="sidebar-logo">
                    <h4>Shoppy MM</h4>

                </div>

                <button className="btn sidebar-close-btn" onClick={() => setSidebar(false)}>
                    <Icon icon="bi:x-lg" />
                </button>
            </div>


            <ul className="sidebar-links">
                {navbarLink.map((link) => {
                    const { id, icon, text, to } = link
                    return <Link to={to} key={id} className='sidebar-nav-item' onClick={() => setSidebar(false)}>
                        <Icon icon={icon} className='icon' />
                        <span>{text}</span>
                    </Link>
                })}
            </ul>

            <section className="sidebar-social">
                {social.map(so => {
                    const { id, icon, link } = so;
                    return <a href={link} key={id} target={'_blank'}>
                        <Icon icon={icon} />
                    </a>
                })}
            </section>

        </div>
    </div>
}

