import { useParams, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import img from '../../assets/placeholder.jpg'
import { useState, useEffect } from "react"



export default function ItemListContainer() {
    const [items, setItems] = useState([])

    const { id } = useParams()


    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('/data/products.json')
            const products = await response.json()

            const productosFiltrados = products.filter(product => product.category === id)
            if (productosFiltrados.length > 0) return setItems(productosFiltrados)

            setItems(products)
        }


        getProducts()
    }, [id])

    return (
        <Container fluid className='mt-4'>
            <Row>
                {items.map(item => (
                    <Col key={item.id} lg={4} className='mb-4'>
                        <Card>
                            <Card.Img variant='top' src={img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text> $ {item.price}</Card.Text>
                                <Button as={Link} to={`/item/${item.id}`} activeClassName="current">Ver mas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}