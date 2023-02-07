import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import storeItems from '../data/items.json'


type ShopingCartProps = {
    isOpen : boolean
}

export  function ShoppingCart({isOpen} : ShopingCartProps) {

    const { closeCart, cartItems} = useShoppingCart();

    function goToPayment() {

    }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} keyboard={true} placement="end" width={450}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                 Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={2}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <div className='d-flex justify-content-between fw-bold fs-5 '>
                    <span className='fw-bold fs-4 text-muted'>Total{' '}</span>
                    {formatCurrency(
                        cartItems.reduce((total,cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + ( item?.price || 0) * cartItem.quantity
                        }, 0)
                    )}
                </div>
            <Button variant='outline-primary' className="btn-pay" onClick={() => goToPayment()}>Go to payment</Button>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
