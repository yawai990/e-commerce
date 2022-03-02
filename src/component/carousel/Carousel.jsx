import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import './Carousel.css';
import Data from './Data';


export default function Carousel() {
    const [index, setIndex] = useState(0);
    const [theme, setTheme] = useState(false)

    useEffect(() => {
        if (index < 0) {
            setIndex(Data.length - 1)
        }
        if (index > Data.length - 1) {
            setIndex(0)
        }
    }, [index, Data]);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(index + 1)
        }, 3000);

        return () => clearInterval(timer)
    }, [index])

    return <div className="carousel-container"
        onMouseEnter={() => setTheme(true)}
        onMouseLeave={() => setTheme(false)}>

        <article className="carousel-slide-wrapper">
            {Data.map((data, personind) => {
                const { img } = data;

                let position = 'prev-slide';

                if (personind === index) {
                    position = 'active'
                }
                if (personind < index || (index === 0 && personind === Data.length - 1)) {
                    position = 'prev-slide'
                }

                if (personind > index || (index === Data.length - 1 && personind === 0)) {
                    position = 'next-slide'
                }

                return <div className={`carousel-slide ${position}`} key={personind}>
                    <img src={img} alt="" />
                </div>
            })}
        </article>


        <section className="carousel-btn-container">

            <button className="carousel-btn left-btn"
                onClick={() => setIndex(index - 1)}
                style={theme ? { opacity: 1 } : { opacity: 0 }}>
                <Icon icon="bi:arrow-left-circle-fill" className='arrow-icon' />
            </button>

            <button className="carousel-btn right-btn"
                onClick={() => setIndex(index + 1)}
                style={theme ? { opacity: 1 } : { opacity: 0 }}>
                <Icon icon="bi:arrow-right-circle-fill" className='arrow-icon' />
            </button>

            <div className="carousel-navigation" style={theme ? { opacity: 1 } : { opacity: 0 }}>
                {Data.map((data, ind) => {
                    let status;
                    if (ind === index) {
                        status = 'active'
                    }
                    return <div key={ind}
                        className={`carousel-navigation-dot ${status}`}
                        onClick={() => setIndex(ind)}></div>
                })}
            </div>
        </section>
    </div>
}