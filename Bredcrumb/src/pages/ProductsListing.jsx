import {useEffect, useState} from 'react'
import { Link } from 'react-router';
const ProductsListing = () => {
  
  const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((res) => {
          const data = res.products
          setProducts(data);
        });
    }, []);
  
    
  return (
    <div className='header'>
      <h2>All Products</h2>  
      <div className="product-grid">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <div> Price: ${product.price}</div>
              </Link>
             
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ProductsListing
