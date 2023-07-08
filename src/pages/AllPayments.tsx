import React, { useState } from 'react'
import { IPaymentIntent } from './Success';
import { Button } from 'react-bootstrap';

function AllPayments() {

  const [paymentIntents, setPaymentIntents] = useState<IPaymentIntent[]>([]);

    const handleClick = async () => {
        try {
          const response = await fetch('https://shopping-server-v8yl.onrender.com/paymentIntentsAll');
          const data = await response.json();
          console.log(data?.data);
          setPaymentIntents(data?.data);
        } catch (error) {
          console.error(error);
        }
      }
      console.log('Payment Intents:', paymentIntents);

  return (
    <div>
    <Button variant='primary' className='m-auto' onClick={handleClick}>GET ALL</Button>
    </div>
  )
}

export default AllPayments