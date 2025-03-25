import {useEffect, useState} from 'react'
import { useParams } from 'react-router'

const Products = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null)  
  console.log(id);
  
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
        setProduct(res)
    })
  }, [id])
  
  return (
    <div className='header'>
        <h2>Product Details</h2>
        {product ?
        (<div style={{display:"flex"}}>
            <img style={{height: "250px"}}src={product.thumbnail} alt={product.title} />
            
        
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", padding: "0px 0px 0px 30px"}}>
                <h3>{product.title}</h3>
                <div>Price: ${product.price}</div>
                <div>Category: {product.category}</div>
                <p>{product.description}</p>
            </div>
        </div>):(<p>loading...</p>)
        }
    </div>
  )
}

export default Products
