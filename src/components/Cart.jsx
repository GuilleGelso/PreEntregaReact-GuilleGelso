import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
				<Button as={Link} to="/" variant="primary">Volver a Tienda</Button>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<CartItem key={product.id} product={product} />
			))}

<Container>
<Row>
<Col>
<Button variant="primary" onClick={handleClick} >Finalizar Compra</Button>
            

            <Button as={Link} to="/" variant="primary" onClick={clearCart}>Limpiar Carrito</Button>
			</Col>

			<Col>
            <p>Total: ${totalPrice()}</p>
			</Col>
			</Row>
			</Container>
		</>
	);
};

export default Cart;



