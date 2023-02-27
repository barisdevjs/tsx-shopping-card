import { useNavigate, useParams } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


function Item() {
  const { name } = useParams();
  const { getItem } = useShoppingCart();
  const element = getItem(name as string);
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Img variant="top" src={element.imgUrl} style={{ maxHeight: '49vh', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center mb-2">
          <div>{element.name}</div>
          <Button variant="outline-danger" className="btn-out" onClick={() => navigate('/store')} >
            <BsFillArrowLeftSquareFill />Back to Store</Button>
        </Card.Title>
        <Card.Subtitle className='text-muted mb-2'>ID : {element.id}</Card.Subtitle>
        <Card.Subtitle className='text-muted mb-2'>Price : {element.price}</Card.Subtitle>
        <Card.Text>
          {element.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item