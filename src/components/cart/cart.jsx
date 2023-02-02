
import { useCartContext } from '../../context/CartContext';
import { Form } from '../Formulario/Form';

export const Cart = () => {
  const { cartList, emptyCart, totalPrice, itemDelet } = useCartContext();

  return (
    <div className='objet-items'>
    
    <>

        { cartList.map(prod => <div key={prod.id}>
                              <div className='item-shopping'>
                             <img src={prod.foto} alt="" className='mt-2'/>

                             </div >
                             Nombre: {prod.name} - Categoria: {prod.categoria} - Precio: $ {prod.precio} - Cantidad: {prod.cant}
                             <button onClick={ () => itemDelet(prod.id) }>Eliminar Juguete</button>
                              </div>                             
                              )
}
                            <h4 className='mb-3'>Total a Pagar : $ { totalPrice() }</h4>

                            <Form />

                            <button className="empty-cart btn btn-danger mt-5 ml-5" onClick={ emptyCart}>Vaciar Carrito</button>    
       </>                    

    </div>
   )
}