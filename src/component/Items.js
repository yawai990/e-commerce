import { useState, useRef, useEffect } from 'react';
import useGlobalContext from '../Context';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import './item.css';
import Loading from './Loading';
import Carousel from './carousel/Carousel';

export default function Items({ CatergoryButton }) {
    const { loading, pushItem, items } = useGlobalContext();
    const [filterItem, setfilterItem] = useState(items);
    const [itemLoading, setItemLoading] = useState(false);
    let [index, setIndex] = useState(1)
    const text = useRef(null);
    let search;

    useEffect(() => {
        setfilterItem(items)
    }, [items])


    const filter = (category) => {
        setItemLoading(true)
        setTimeout(() => {

            const fil = items.filter(item => item.category === category)
            if (category === 'all') {
                return setfilterItem(items)
            }
            setfilterItem(fil);
            setItemLoading(false)
        }, 2000)
    }

    const describeItem = filterItem.map(item => {

        const { id, image, price, title } = item;

        return <div className="card" key={id}>

            <div className="image">
                <img src={image} alt="" />
            </div>

            <div className="info">
                <p className='title'>{title}</p>

                <p className='price'>US ${price}</p>

                <button className='add-cart-btn'
                    onClick={() => pushItem(id)}>
                    <span>
                        <Icon icon="bxs:cart" className='cart-icon-btn' />
                        <span>Add to Cart</span>
                    </span>
                </button>

                <button className='details-btn'>
                    <Link to={`/singleitem/${id}`} className='view-detail'>
                        view detail
                    </Link>
                </button>
            </div>
        </div>

    })

    const onhandleSubmit = (e) => {
        e.preventDefault()

        if (search === undefined || search === null) {
            setfilterItem(filterItem);
        } else {
            const searchItem = items.filter(item => {
                const title = item.title.toLowerCase()

                return title.includes(search)
            })
            setfilterItem(searchItem);
        }
    }
    const onhandleClick = () => {

        search = text.current.value;
        text.current.value = ''
    }

    const onCateBtnClick = (id, category) => {
        setIndex(id)
        filter(category)
    }

    return <div className="items-container">

        <Carousel />

        {loading ? <Loading /> : <div className="row items-wrapper">
            <div className="filter">
                <div className="search">

                    <h5>Browse Items</h5>
                    <form onClick={onhandleSubmit}>
                        <div className="form-control">
                            <input type="text" ref={text} />
                            <button className='item-search-btn'
                                onClick={onhandleClick}>
                                <Icon icon="akar-icons:search" className='item-search-icon' />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="category-filter-box">
                    <h5>Category</h5>
                    <ul className="btn-group">
                        {CatergoryButton.map(cater => {
                            const { id, category, text } = cater;
                            return <li key={id}>
                                <button className={index === id ? 'category-btn active' : 'category-btn'}
                                    onClick={() => onCateBtnClick(id, category)}>{text}</button>
                            </li>
                        })}
                    </ul>
                </div>

            </div>

            {!itemLoading ? <div className="items">
                {describeItem}
            </div> : <Loading />}

        </div>}
    </div>
}