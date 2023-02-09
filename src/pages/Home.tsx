
export default function Home() {  
  return (
    <div className="pre mt-5">
      <p>Welcome to the Shopping Cart</p>
      <p>In <code><i className="i-default">Store</i></code> tab you can do the shopping.</p>
      <p>In Right Side menu you can increase, decrease and remove the shopping item.</p>
      <p>Go to payment button redirects you to the stripe paying page.</p>
      <p>If the payment is successful, you will be redirected to the <code><i className="i-success">Success</i></code> page.</p>
      <p>In <code><i className="i-success">Success</i></code> Page , you can see the last payment details.</p>
    </div>
  )
}
