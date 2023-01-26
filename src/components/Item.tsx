import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

function Item() {
    const { name } = useParams()
    const { getItem } = useShoppingCart()
    const element = getItem(name as string)
    console.log(element)
    // enlarge the element with data
  return (
    <>
    <div></div>
    </>
  )
}

export default Item