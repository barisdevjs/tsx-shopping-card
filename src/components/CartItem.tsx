import { Button, Stack } from "react-bootstrap"
import { useShoppingCart, CartItemT } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency"


export default function CartItem({ id, quantity }: CartItemT) {
    const { removeFromCart, increaseItemQuantity, decreaseItemQuantity } = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={2}
            className='d-flex align-items-center'
        >
            <img
                src={item.imgUrl}
                style={{ width: '110px', height: '70px', objectFit: 'cover' }}
            />
            <div className='me-auto'>
                <div>
                    {item.name}
                    {quantity > 1 && (
                        <span className='text-muted' style={{ fontSize: '.75rem' }}>
                            &nbsp;x&nbsp;{quantity}</span>
                    )}
                </div>
                <div className='text-muted' style={{ fontSize: '.75rem' }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant='outline-secondary' size='sm' 
                 onClick={() => decreaseItemQuantity(id)}>-</Button>
            <Button variant='outline-secondary' size='sm' 
                 onClick={() => increaseItemQuantity(id)}>+</Button>
            <Button
                variant='danger'
                 size='sm'
                onClick={() => removeFromCart(item.id)}> &times;
            </Button>
        </Stack>
    ) 
} 
