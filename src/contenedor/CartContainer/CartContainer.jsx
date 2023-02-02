import { Link } from 'react-router-dom'
import { Cart } from '../../components/cart/cart'
import { useCartContext } from '../../context/CartContext';
import '../CartContainer/CartContainer.css'

 const CartContainer = () => {
  const { cartList } = useCartContext();

  return (
    <div>
      { cartList.length !== 0 ? 

      <>
        <Cart />
      </>
        :
          <>
            <h2 className='empty-cart-alert'>Carrito Vacio Jugueton</h2>
            <Link to='/category/Juguetes para niño' className='galery-router text-light'>Ver Galerias</Link>
          </>
   
 }
    </div>   
  )
}

export default CartContainer