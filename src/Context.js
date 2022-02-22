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
        }, 2000);
    }, [])

    //adding the items to the cart
    const pushItem = (id) => {
        const addToreducer = items.filter(item => item.id === id)

        //this filter the iterable things
        const buyingCartItems = [...new Set([...newItems, ...addToreducer])].map(buyingItem => {
            return { ...buyingItem, amount: 1 };
        })
        setNewItems(buyingCartItems);
    }


    return <AppContext.Provider value={
        {
            loading,
            setLoading,
            items,
            setItems,
            pushItem, newItems,
            ttamount,
            setttamount
        }
    }>
        {children}
    </AppContext.Provider >
}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export default useGlobalContext;