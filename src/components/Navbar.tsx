import { Container, Nav, Button, Navbar as NavbarBS } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useShoppingCart } from '../context/ShoppingCartContext';
import '../../src/App.css'

export default function Navbar() {

    const { openCart, cartQuantity} = useShoppingCart()

    return (
        <NavbarBS sticky='top'  className="bg-white shadow-lg mb-3 fs-5" 
        style={{height : '7vh'}}
        >
            <Container>
                <Nav className='me-auto' >
                    <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                { cartQuantity > 0 && (
                <Button 
                onClick={openCart}
                style={{ width: '2.5rem', height:'2.5rem', position:'relative' }}
                variant='outline-primary'
                className='rounded-circle d-flex justify-content-center align-items-center align-content-center'
                > 
                    <FontAwesomeIcon icon={faCartShopping} size='1x' />
                    <div className='rounded-circle bg-danger' style={{
                        color:'white',
                        width: '1rem',
                        height: '1rem',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        transform: 'translate(25%, 25%)',
                        fontSize:'x-small'
                    }}>
                        {cartQuantity}
                    </div>
                </Button> )}
            </Container>
        </NavbarBS>
    )
}
