import { useEffect } from "react";

export const reducer = (state, action) => {

    if (action.type === 'INCREASE') {
        const incre = state.cartItems.map(item => {
            if (item.id === action.increItem) {
                return { ...item, amount: item.amount + 1 }
            }
            return item
        })
        return { ...state, cartItems: incre }
    }

    if (action.type === 'DECREASE') {

        const dec = state.cartItems.map(item => {
            if (item.id === action.decreItem) {
                return { ...item, amount: item.amount == 0 ? 0 : item.amount - 1 }
            }
            return item
        })
        return { ...state, cartItems: dec }
    }
}