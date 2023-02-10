export default function Home() {  
  return (
    <div className="pre mt-5 ">
      <p className="typewriter">Welcome to the Shopping Cart</p>
      <p className="typewriter">In <code><i className="i-default">Store</i></code> tab you can do the shopping.</p>
      <p className="typewriter">In Right Side menu you can increase, decrease and remove the shopping item.</p>
      <p className="typewriter">Go to payment button redirects you to the stripe paying page.</p>
      <p className="typewriter">If the payment is successful, you will be redirected to the <code><i className="i-success">Success</i></code> page.</p>
      <p className="typewriter">In <code><i className="i-success">Success</i></code> Page , you can see the last payment details.</p>
    </div>
  )
}