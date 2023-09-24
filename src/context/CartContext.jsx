import { createContext } from "react";
import { useState, useContext } from "react";
const CartContext = createContext([] )



export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children} ) =>{

    const [cart, setCart] = useState([])






    const addProduct = (item, quantity) => {
        if (isInCart(item.id)){
            setCart (cart.map(product =>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            } ) );
        }else {
            setCart ([...cart,{...item, quantity} ])
        }
    }




    const clearCart = () => setCart([] )




    const isInCart = (id) => {
        return cart.find (product => product.id ===id) ? true : false
    }


    const removeProduct = (id) => setCart (cart.filter (product =>product.id !==id) )


const totalPrice = () => {
    return cart.reduce((prev, act) =>prev + act.quantity * act.price, 0)
}

const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity,0 ) 


    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            addProduct,
            totalPrice,
            totalProducts,
            removeProduct,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}






