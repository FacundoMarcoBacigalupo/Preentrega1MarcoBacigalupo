import { memo } from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import './temlis.css'


const ItemList = memo(({ products }) =>{

    return (
        <div className='posicionAppCard'>
            {
                products ? products.map(data => <Item key={data.id} {...data} />) : <Loading/>
            }
        </div>
    )
},(prevProps, nextProps) => prevProps.products === nextProps.products);


export default ItemList