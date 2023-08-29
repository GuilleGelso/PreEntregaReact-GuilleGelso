/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img from '../../assets/placeholder.jpg'

export default function ItemDetail({ detail }) {
  return (
    <div>
     
      <Container fluid className='mt-4'>
        <Row>
        <Col  lg={4} className='mb-4'>
          <Card>
            <Card.Img variant='top' src={img} />
            <Card.Body>
              <Card.Title>{detail.name}</Card.Title>
              <Card.Text>{detail.description}</Card.Text>
              <Card.Text> $ {detail.price}</Card.Text>
              <Button as={Link} to={`/item/${detail.id}`} activeClassName="current">Comprar</Button>

            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}