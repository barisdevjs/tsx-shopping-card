import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, Col, Row, Stack } from 'react-bootstrap'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { formatDate, formatFirstLetter } from '../utilities/formatCurrency';

interface IPaymentIntent {
  status: string;
  amount: number;
  created:number;
  payment_method_types:Array<string>;
};


const initialPaymentIntents: IPaymentIntent = {
  status: '',
  amount: 0,
  created: 0,
  payment_method_types: ['']
  };

function Success() {

  const [paymentIntents, setPaymentIntents] = useState<IPaymentIntent >(initialPaymentIntents);
  const [flag,setFlag] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:4000/paymentIntents');
      const data = await response.json();
      setPaymentIntents(data?.data?.[0]);
      setFlag(true);
    } catch (error) {
      console.error(error);
    }
  }
  console.log('Payment Intents:', paymentIntents);


  return (
    <Card className="m-auto w-50 mt-5">
        <Card.Header>
            <Stack direction="horizontal" className="d-flex align-items-center justify-content-center gap-3">
            <FontAwesomeIcon icon={faCheckCircle} className='text-success' size='3x' />
            <p className='text-success fs-3 m-0' >Payment Successful</p>
            </Stack>
        </Card.Header>
        <Card.Body>
          <Stack direction="horizontal"  className="d-flex align-items-center justify-content-center gap-3">
          { !flag ?
          <Button variant='primary' className='m-auto' onClick={handleClick}>
            Get Details
          </Button> :
          <Button variant="outline-primary" className="btn-out" onClick={() => navigate('/store')} >
              <BsFillArrowLeftSquareFill />Back to Store</Button>}
          </Stack>
        </Card.Body>
          { (paymentIntents && flag) ? (
            <>
        <Row className="px-3">
          <Col className="text-center">Amount</Col>
          <Col className="text-center">{paymentIntents.amount} TRY</Col>
        </Row>
        <Row className="px-3">
          <Col className="text-center">Date</Col>
          <Col className="text-center">{formatDate(paymentIntents.created)}</Col>
        </Row>
        <Row className="px-3">
          <Col className="text-center">Payment Method</Col>
          <Col className="text-center">{formatFirstLetter(paymentIntents.payment_method_types[0])}</Col>
        </Row>
        <Row className="px-3">
          <Col className="text-center">Status</Col>
          <Col className="text-center text-success">{formatFirstLetter(paymentIntents.status)}</Col>
        </Row>
        </>
          ) : null }
    </Card>

  )
}

export default Success