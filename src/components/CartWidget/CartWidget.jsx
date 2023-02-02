import {BsFillCartCheckFill} from 'react-icons/bs'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

  const { totalQuantity  } = useCartContext()
  return (
    <div>
      {totalQuantity() !== 0 && totalQuantity()  }
      <BsFillCartCheckFill />
    </div>
  )
}

export default CartWidget

