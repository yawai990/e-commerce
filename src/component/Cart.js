import './Cart.css';
import React, { useReducer } from 'react';
import useGlobalContext from '../Context';
import { Icon } from '@iconify/react';
import { reducer } from '../Reducer';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { newItems, itemRemove, onOrderClick } = useGlobalContext();

    let initState = {
        cartItems: newItems,
        Totalqty: 0,
        Totalamount: 0
    }
    let [state, dispatch] = useReducer(reducer, initState);

    const { cartItems } = state;

    const increaseItem = (id) => {
        dispatch({ type: 'INCREASE', increItem: id })
    }

    const decreaseItem = (id) => {
        dispatch({ type: 'DECREASE', decreItem: id })
    }

    const onhandleClick = (id) => {
        itemRemove(id)
        dispatch({ type: 'REMOVE', removeId: id })
    }



    const { tamount, ttotal } = cartItems.reduce((prevval, curval) => {
        const { price, amount } = curval;

        const totalPrice = price * amount;

        prevval.tamount += amount
        prevval.ttotal += totalPrice

        return prevval

    }, {
        tamount: 0,
        ttotal: 0
    })
    console.log(tamount);
    const t = ttotal.toFixed(2);

    // useEffect(() => {
    //     setttamount(tamount)
    // }, [state])

    return (cartItems.length > 0 ? <div className="cart-container">
        <table>
            <thead>
                <tr>
                    <th className='product-thumbnail'></th>
                    <th className='product-name'>Product Name</th>
                    <th className='product-price'>Price</th>
                    <th className='product-qty'>Quantity</th>
                    <th className='product-amount'>Amount</th>
                    <th className='product-delete'></th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(item => {
                    const { id, price, image, amount, title } = item;

                    const singleTotalAmount = (price * amount).toFixed(2);

                    return <tr key={id}>

                        <td className="product-thumbnail">
                            <img src={image} alt="" className="product-thumbnail-image" />
                        </td>
                        <td className="product-name">{title}</td>
                        <td className="product-price">{price}</td>
                        <td className="product-qty">
                            <div className="qty-container">

                                <button className="btn decrease-btn"
                                    onClick={() => decreaseItem(id)}>
                                    <Icon icon="ant-design:minus-square-filled" />
                                </button>

                                <p>{amount}</p>

                                <button className="btn increase-btn"
                                    onClick={() => increaseItem(id)}>
                                    <Icon icon="ant-design:plus-square-filled" />
                                </button>
                            </div>
                        </td>
                        <td className="product-qty">{singleTotalAmount}</td>
                        <td className="product-delete">
                            <button className="single-delete-btn" onClick={() => onhandleClick(id)}>
                                <Icon icon="bi:x-circle-fill" />
                            </button>
                        </td>
                    </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={"4"}>Total Amount</td>
                    <td>{t}</td>
                </tr>
            </tfoot>
        </table>

        <button className="order" onClick={onOrderClick}>
            <Link to='/order' className="order-btn">
                Order Now
            </Link>
        </button>
    </div>
        : <div className="cart-container">
            <div className="remind">
                <Icon icon="codicon:note" className='note-icon' />
                <p className='remind-text'>
                    Your cart is currently empty.</p>
            </div>
        </div>
    )
}
export default Cart;