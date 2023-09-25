import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCartContext } from "../context/CartContext";


const CartItem = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <Container>
            <Row>
        
            <Col >
            <img src={product.image} alt={product.title} />
            </Col>

            <Col>
                <p>Producto: {product.title}</p>
                </Col>

                <Col>
                <p>Cantidad: {product.quantity}</p>

                </Col>

                <Col>
                <p>Precio u.: ${product.price}</p>
                </Col>

                <Col>
                <p>Subtotal: ${product.quantity * product.price}</p>
                </Col>

                <Col>
                <Button variant="primary" onClick={() => removeProduct(product.id)}>Eliminar Producto</Button>
                </Col>
       
        </Row>
        </Container>
    )
}

export default CartItem

