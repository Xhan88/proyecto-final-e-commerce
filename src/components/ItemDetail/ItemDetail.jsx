import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../context/CartContext'
import ItemCount from "../Itemcount/ItemCount"
import '../ItemDetail/ItemDetail.css'


const ItemDetail = ({product}) => {
  const [ inCant, setInCant ] = useState(false)
  
  const { addCart } = useCartContext() 

  const onAdd = (cant) => {
      
      addCart( { ...product, cant } )
      setInCant(true)
  }

  return (
      <div className="container-detail border-3  border-primary rounded">
          <div className="row">
              <div className="col">
                  <img className="w-50" src={product.foto} alt='foto producto' />
                  <h3>nombre: {product.name}</h3>
                  <h3>categoria: {product.categoria}</h3>
                  <h4>precio: {product.precio} </h4>
                  <h4>Stock: {product.stock}</h4>
                  
              </div>
              <div className="col">
                  {inCant ? 
                   <>
                        <Link to='/cart'>
                            <button className='btn btn-outline-primary mt-5'>Ir al carrito</button>
                        </Link>
                           
                        <Link to='/category/Juguetes para niño'>
                           <button className='btn btn-outline-succes mt-5'>Seguir comprando</button>

                        </Link> 
                  </>
                
                :
                <ItemCount 
                      stock={product.stock} 
                      initial={1}  
                      onAdd={onAdd} 
                  />

                }
                  
                </div>
          </div>    
          
      </div>
)
}

export default ItemDetail
