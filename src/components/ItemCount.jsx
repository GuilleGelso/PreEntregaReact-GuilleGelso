import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';


const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
            <span>Stock: {stock}</span>
            <br></br>
			<Button variant="primary" disabled={count <= 1} onClick={decrease}>
				-
			</Button>
			<span>{count}</span>
			<Button  variant="primary" disabled={count >= stock} onClick={increase}>
				+
			</Button>
			
			<div>
				<Button variant="primary" disabled={stock <= 0} onClick={() => onAdd(count)}>
					Agregar al carrito
				</Button>
			</div>
		</div>
	);
};

export default ItemCount;

