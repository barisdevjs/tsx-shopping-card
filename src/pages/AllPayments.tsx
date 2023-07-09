import React, { useEffect, useState } from 'react';
import { IPaymentIntentsAll } from './Success';
import Table from 'react-bootstrap/Table';
import { formatCurrency, formatDate, hideSecretStart } from '../utilities/formatCurrency';
import styles from '../styles.module.css';
import { Spinner } from 'react-bootstrap';

const BASE = 'https://shopping-server-v8yl.onrender.com';

function AllPayments() {
  const [paymentIntents, setPaymentIntents] = useState<IPaymentIntentsAll[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllPayments = async () => {
    try {
      const response = await fetch(BASE+'/paymentIntentsAll?limit=10');
      const data = await response.json();
      const filteredData = data?.data.map((paymentIntent: IPaymentIntentsAll) => ({
        status: paymentIntent.status,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        payment_method_types: paymentIntent.payment_method_types,
        id: paymentIntent.id,
        confirmation_method: paymentIntent.confirmation_method,
        request_three_d_secure: paymentIntent.payment_method_options.card.request_three_d_secure,
      }));
      setPaymentIntents(filteredData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPayments();
  }, []);

  return (
    <Table responsive striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>NO #</th>
          <th>Id</th>
          <th>Payment Method</th>
          <th>Created</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Confirmation Method</th>
          <th>3d Secure</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td><Spinner animation="border" role="status" variant="primary"/></td>
            <td><Spinner animation="border" role="status" variant="secondary"/></td>
            <td><Spinner animation="border" role="status" variant="success"/></td>
            <td><Spinner animation="border" role="status" variant="danger"/></td>
            <td><Spinner animation="border" role="status" variant="warning"/></td>
            <td><Spinner animation="border" role="status" variant="info"/></td>
            <td><Spinner animation="border" role="status" variant="light"/></td> 
            <td><Spinner animation="border" role="status" variant="secondary"/></td>
          </tr>
        ) : (
          paymentIntents.map((paymentIntent, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{hideSecretStart(paymentIntent.id)}</td>
              <td className={styles.textCenter}>{paymentIntent.payment_method_types[0]}</td>
              <td>{formatDate(paymentIntent.created)}</td>
              <td>{formatCurrency(paymentIntent.amount / 100)}</td>
              <td>{paymentIntent.status}</td>
              <td className={styles.textCenter}>{paymentIntent.confirmation_method}</td>
              <td>{paymentIntent.request_three_d_secure}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default AllPayments;
