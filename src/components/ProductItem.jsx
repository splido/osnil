
import monday from '../assets/img/monday.png'
import { Link } from 'react-router-dom'

function ProductItem({product}) {
  return (
    <>
    <div className="product-card">
            <div className="product-reviews-card">
                <div>
                    <img src={monday}alt=""/>
                </div>
                <div className="details">

                    {/* <p>{
                        product.name
}</p> */}

<Link to={`/product/${product.name}`}> {product.name}</Link>
                    <div className="stars">
                        <i className="fas fa-star"style={{color: "yellow;"}}></i>
                        <i className="fas fa-star"style={{color: "yellow;"}}></i>
                        <i className="fas fa-star"style={{color: "yellow;"}}></i>
                        <i className="fas fa-star"style={{color: "yellow;"}}></i>
                        <i className="fas fa-star" style={{color: " #D9D9D9;"}}></i>
                    </div>
                    <div className="ratings">
                        <p>{product.averageRating}<span>(149 Follows)</span></p>
                    </div>
                </div>
            </div>
            <p style={{ fontSize: "20px;" ,color: "#757575;"}}>
                {
                    product.review
                }
            </p>
        </div>
            <div className="product-bar">
                <p>
                    Do you wish to use Monday.com?
                </p>
                <div className="comment-div">
                <div className="reaction selected">
                    I am using it 👍
                </div>
                <div className="reaction">
                    Yes, I want to 🤩
                </div>
                <div className="reaction">
                   May be 🤔
                </div>
                <div className="reaction">
                  No, I don't 😐
                </div>
            </div>
            </div>
            </>
  )
}

export default ProductItem