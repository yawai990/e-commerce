import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import useGlobalContext from "../Context";
import './Single.css';

const SingleItem = () => {
    const { items, pushItem } = useGlobalContext()
    const { id } = useParams();


    const single = items.filter(item => {
        const changeInt = parseInt(id)

        if (item.id === changeInt) {
            return item;
        }
        return item
    })

    return (
        <div className="single-card">
            {single.map(sin => {
                const { id, title, category, price, rating, description, image } = sin;

                return <div className="single-card-detail" key={id}>
                    <div className="image">

                        <img src={image} alt="item-image" />
                    </div>

                    <section className="description">
                        <h5>{title}</h5>

                        <article>
                            <p><strong><span>&#x261B;</span>Price :</strong>{price}$</p>
                            <p><strong><span>&#x261B;</span>Category :</strong>{category}</p>
                            <p><strong><span>&#x261B;</span>Rating :</strong>{rating.rate}</p>
                            <p><strong><span>&#x261B;</span>Description :</strong>{description}</p>
                        </article>

                        <button className='add-cart-btn'
                            onClick={() => pushItem(id)}>
                            <span>
                                <Icon icon="bxs:cart" className='cart-icon-btn' />
                                <span>Add to Cart</span>
                            </span>
                        </button>
                    </section>



                </div>
            })}

        </div>
    )
}

export default SingleItem;