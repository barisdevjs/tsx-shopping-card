import { Row, Col } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json'


export default function Store() {
  return (
    <>
    <h4>Store</h4>
    <Row md={2} xs={1} lg={3} xl={4}>
      {storeItems.map(item => 
      <Col key={item.id} className='g-4'>
        <StoreItem {...item} />
      </Col>)}
    </Row>
    </>
  )
}
