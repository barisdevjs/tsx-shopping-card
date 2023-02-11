import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import { Link } from 'react-router-dom'


export type StoreItemsProps = {
    id: number | string 
    name: string
    price: number
    imgUrl: string
    description?:string 
}

export default function StoreItem({ id, name, price, imgUrl }: StoreItemsProps) {
 
    const {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart
    } = useShoppingCart()


    const quantity = getItemQuantity(id)
    return (
        <Card className='h-100' >
            <Link to={`/store/${name}`}   >
            <Card.Img
                variant='top'
                src={imgUrl}
                height='200px'
                style={{ objectFit: 'cover' }}
            />
            </Link>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-4'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100' onClick={() => increaseItemQuantity(id)}>
                            +&nbsp;&nbsp;&nbsp; Add to Cart </Button>
                    ) : (
                        <div className='d-flex align-items-center flex-column'
                            style={{ gap: '.5rem' }}
                        >
                            <div className='d-flex align-items-center justify-content-center'
                                style={{ gap: '.5rem' }}
                            >
                                <Button variant='outline-secondary' onClick={() => decreaseItemQuantity(id)}>-</Button>
                                <div>
                                    <span className='fs-5'>{quantity}</span> in cart
                                </div>
                                <Button variant='outline-secondary' onClick={() => increaseItemQuantity(id)}>+</Button>
                            </div>
                            <Button 
                            onClick={() => removeFromCart(id)}
                            variant='danger' size='sm'>
                                Remove
                            </Button >
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    ) 
}
