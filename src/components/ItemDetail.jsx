import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";


export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return  (
		<Card style={{ width: '18rem' }}>
		  <Card.Img variant="top" src={data.image} alt="Imagen Producto" />
		  <Card.Body>
			<Card.Title >{data.title}</Card.Title>
			<Card.Title >${data.price}</Card.Title>
			<Card.Text>
			{data.description}
			</Card.Text>
			{goToCart ? (
							<Button as={Link} to='/cart' variant="primary"> Ir al Carrito</Button>
						) : (
							<ItemCount initial={1} stock={data.stock} onAdd={onAdd}  />
						)}
			
		  </Card.Body>
		</Card>
	  );
};

export default ItemDetail;




