import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";


const Item = ({ info }) => {
	return (
		
		<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={info.image} alt="Productos" />
<Card.Body>
  <Card.Title>{info.title}</Card.Title>
  <Card.Text>
  ${info.price}
  </Card.Text>
  <Button as={Link} to={`/detalle/${info.id}`} variant="primary">Detalle</Button>
</Card.Body>
</Card>
	);
};

export default Item;






