import {  useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const itemToAdd = {
            ...item,
            quantity
        }

        !isInCart(itemToAdd.id) && setCart([...cart, itemToAdd])
    }

    const removeItem = (id) => {
        if(isInCart(id)) {
            const cartWithoutItem = cart.filter(itemInCart => itemInCart.id !== id)
            setCart(cartWithoutItem)
        }
    }

    const isInCart = (id) => {
        return cart.find(itemInCart => itemInCart.id === id)
    }

    const clearCart = (item) => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            clearCart,
            isInCart,
            removeItem
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext