
import { Link } from 'react-router-dom'
import { memo } from 'react'

import './Item.css'

const Item = memo(({ product }) => {
    
    return (      
        <div   
                 
            style={{ marginLeft: 20}}
            className='col col-md-4 '         
        >    
                 
            <div className="card w-100 mt-59" >
                <div className="card-header item-style">
                    {`${product.name} - ${product.categoria}`}
                </div>
                <div className="card-body">
                    <img src={product.foto} alt='' className='w-50' />
                    <p className='precio-item'> $ {product.precio} c/u </p>
                                                                               
                </div>
        
                <div className="card-footer"> 
                
                    <Link to={`/detail/${product.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>
                    </Link >                                                                      
                </div>
            </div>       
        </div> 
    )
  }
)
export default Item
