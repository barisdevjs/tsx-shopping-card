import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Item() {
  const { name } = useParams();
  const { getItem } = useShoppingCart();
  const element = getItem(name as string);

  return (
    <div className="d-grid justify-items-center" style={{height:'85dvh'}} >
      <Card style={{width:'clamp(50%,70%,80%)'}}>
        <Card.Img variant="top" src={element.imgUrl} style={{ height: '40vh', objectFit:'cover' }}/>
        <Card.Body>
          <Card.Title >{element.name}</Card.Title>
          <Card.Subtitle className='text-muted mb-2'>ID : {element.id}</Card.Subtitle>
          <Card.Subtitle className='text-muted mb-2'>Price : {element.price}</Card.Subtitle>
          <Card.Text>
            {element.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item