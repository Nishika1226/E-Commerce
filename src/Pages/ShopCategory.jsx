import React, { useContext } from 'react'

 const ShopCategory=(props)=> {
    
  return (
    <div className="shop-category container mt-5">
        <img src={props.banner} style={{ maxWidth: '100%', height: 'auto' }} alt=""/>
    </div>
  )
}

export default ShopCategory