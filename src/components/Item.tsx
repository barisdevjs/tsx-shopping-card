import { useNavigate, useParams } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


function Item() {
  const { name } = useParams();
  const { getItem } = useShoppingCart();
  const element = getItem(name as string);
  const navigate =useNavigate()

  return (
    <div className="d-grid justify-items-center align-content-center" style={{height:'85dvh', justifyItems:'center'}} >
      <Card style={{width:'clamp(50%,70%,80%)'}}>
        <Card.Img variant="top" src={element.imgUrl} style={{ height: '50vh', objectFit:'cover' }}/>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between mb-0">
            <p>{element.name}</p>
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
    </div>
  )
}

export default Item