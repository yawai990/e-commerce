import React, { useState, useContext, useEffect } from 'react';

export const AppContext = React.createContext();

export const MyAppContext = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([])
    const [newItems, setNewItems] = useState([]);
    const [ttamount, setttamount] = useState(0)

    const getItems = async () => {
        setLoading(true)
        try {
            const resp = await fetch('https://fakestoreapi.com/products');
            const data = await resp.json()

            setItems(data);
            setLoading(false)
        } catch (error) {
            setLoading(true);
            console.log(error);
        }

    }
    useEffect(() => {

        setTimeout(() => {
            getItems()
            setLoading(false)
        }, 1000);
    }, [])


    //**new to fix the pushing item that existing or not inside the cartItems when we clicked the add to cart btn the bug come out */
    //adding the items to the cart
    const pushItem = (id) => {
        //check the id is exist or not 
        const addToreducer = !newItems.map(item => item.id === id)[0] ? items.filter(item => item.id === id) : ''
        //this filter the iterable things
        const buyingCartItems = [...newItems, ...addToreducer].map(buyingItem => {
            return { ...buyingItem, amount: 1 };
        })
        setNewItems(buyingCartItems);
    }

    const onOrderClick = () => {
        setNewItems([])
    }

    const itemRemove = (id) => {
        const itemdelete = newItems.filter(item => item.id !== id)
        setNewItems(itemdelete)
    }

    return <AppContext.Provider value={
        {
            loading,
            setLoading,
            items,
            setItems,
            pushItem, newItems,
            ttamount,
            setttamount,
            itemRemove,
            onOrderClick
        }
    }>
        {children}
    </AppContext.Provider >
}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export default useGlobalContext;