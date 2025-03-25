import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=100`)
      .then((res) => res.json())
      .then((res) => {
        const trending = res.products.slice(0, 6);
        setShow(trending);
      });
  }, []);

  return (
    <div className="header">
      <div className="trending">Trending Products 🔥</div>

      <div className="product-grid">
        {show.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <Link to={`products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <div> Price: ${product.price}</div>
              </Link>
             
            </div>
          );
        })}
      </div>
      <button style={{width:"100%", height:"50px", color:"black"}}><Link to={"/products"} style={{textDecoration: "none", color:"black"}}>View all Products</Link></button>
    </div>
  );
};

export default Home;
