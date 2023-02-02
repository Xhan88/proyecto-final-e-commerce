
import Item from '../Item/Item'
const ItemList = ({ products }) => {
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'rows',
            flexWrap: 'wrap'
        }}
             >
          {products.map( product =>   <Item key={product.id} product={product} />  )}
        </div>                    
    )
  }
export default ItemList
