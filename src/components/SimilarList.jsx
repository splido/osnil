import React from 'react'

function SimilarList({similar}) {
  
    const similar_products = similar?.slice(0,4)
    console.log(similar_products)
  return (
    <div className="reviews-section">
    <div className="cards container">
        {
            similar_products?.map((product)=>(
                <div className="reviews-card">
                <div>
                    <img src={product?.logo} alt="" style={{height: '20px'}}/>
                </div>
                <div className="details">
        
                    <p style={{fontSize: '16px'}} >{product?.name}</p>
                    <div className="stars">
                        <i className="fas fa-star" style={{color: "yellow"}}></i>
                        <i className="fas fa-star" style={{color: "yellow"}}></i>
                        <i className="fas fa-star" style={{color: "yellow"}}></i>
                        <i className="fas fa-star" style={{color: "yellow"}}></i>
                        <i className="fas fa-star"  style={{color: "#D9D9D9"}}></i>
                    </div>
                    <div className="ratings">
                        <p>{product?.averageRating}<span>(149 Follows)</span></p>
                    </div>
                </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default SimilarList