import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
	const { cart, totalPrice, clearCart } = useCartContext();
    

	const order = {
		buyer: {
			name: "Guille",
			email: "Guille@gmail.com",
			phone: "995566",
			address: "daslloos",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<>
				<p>No hay elementos en el carrito</p>
				<Link to="/">Volver a Tienda</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<CartItem key={product.id} product={product} />
			))}
			<p>total: {totalPrice()}</p>
            <button onClick={handleClick} >Finalizar Compra</button>
            

            <Link to="/" onClick={clearCart}>Volver a Tienda</Link>
			
		</>
	);
};

export default Cart;



