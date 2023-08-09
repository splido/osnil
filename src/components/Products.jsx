import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import Spinner from './Spinner'
function Products({products}) {
  const [loading, setLoading] = useState(true);
 
  // const [productList, setProductList] = useState(products)
    // const [productList, setProductList] = useState()
    // useEffect(() => {
    //   setProductList(products)
    // }, [products])
    
    useEffect(() => {
      // Simulate an API call or any asynchronous operation that takes time.
      // console.log('useEffect')
      // fetch()
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    //  const fetch = () =>{ 
   
    //     const products_ = Object.entries(products);
    //     const firstFiveElements = products_.slice(0, 5);
    //     const product_list = Object.fromEntries(firstFiveElements)

    //     setProductList 
    // }
    // // setTimeout(fetch, 1000);


  return (
    <div>
       {

        loading ? <Spinner/> :
        products ? (
          products.map((product)=>(
                <ProductItem key={product.id} product = {product}/>
            ))
        ): <>
        <Spinner/> </>
           
        } 
    </div>
  )
}

export default Products