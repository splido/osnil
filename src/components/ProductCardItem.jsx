import React from 'react'

function ProductCardItem({product}) {
  return (
    <div className="reviews-card">
    <div>
        <img src={product.logo} alt="" style={{height:'30px'}}/>
    </div>
    <div className="details">

        <p style={{fontSize: '15px'}}>{product.name}</p>
        <div className="stars">
            <i className="fas fa-star" style={{color: "yellow"}}></i>
            <i className="fas fa-star" style={{color: "yellow"}}></i>
            <i className="fas fa-star" style={{color: "yellow"}}></i>
            <i className="fas fa-star" style={{color: "yellow"}}></i>
            <i className="fas fa-star"  style={{color: " #D9D9D9"}}></i>
        </div>
        <div className="ratings">
            <p>{product.averageRating} <span>(149 Follows)</span></p>
        </div>
    </div>
    </div>
  )
}

export default ProductCardItem