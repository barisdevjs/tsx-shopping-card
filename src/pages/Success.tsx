import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Stack } from 'react-bootstrap'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function Success() {
  return (
    <Card>
        <Card.Header>
            <Stack direction="horizontal" className="d-flex align-items-center justify-content-center gap-3">
            <FontAwesomeIcon icon={faCheckCircle} className='text-success' size='3x' />
            <p className='text-success fs-3'>Payment Successful</p>
            </Stack>
        </Card.Header>
    </Card>
  )
}

export default Success