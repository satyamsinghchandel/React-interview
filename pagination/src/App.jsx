import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(1)
  const [product, setProduct] = useState([])
  const fetchProduct = async()=>{
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json()
    console.log(data)
    if(data && data.products){
      setProduct(data.products)
    }
    console.log(product.length)
  }
  const handlePage = (pageNo)=>{
    
    if(pageNo>=1 && pageNo<= product.length/10 && pageNo!==page){
      setPage(pageNo)
      console.log(pageNo)
     
    }
    console.log(page)
  }
    
  useEffect(()=>{
    fetchProduct()
  },[])
  return (
    <> 
    {
      product.length > 0 && <div className='products'>
        {
          product.slice(page*10-10, page*10).map((pro)=>{
           return (
            <span className='product_single' key={pro.id}>
              <img src= {pro.thumbnail} alt= {pro.title} />
              <br/>
              <span className='title'>{pro.title}</span>
            </span>
           )
          })
        }
      </div>
      
    }

    {
      
       product.length > 0 && <div className='pagination'>

        
        <span onClick={()=>{handlePage(page-1)} } style={{backgroundColor: "white"}} className={page>1?"":"pagination_disable"}>◀️</span>
        {
          [...Array(product.length/10)].map((_, i)=>{
            return <span  key={i} 
            className={page === i + 1 ? "page_selected" : ""} 
            onClick={() => handlePage(i + 1)}>{i+1}</span>
          })

          
        }
        
        <span onClick={()=>{handlePage(page+1)}}style={{backgroundColor: "white"}} className={page<10?"":"pagination_disable"}>▶️</span>
        
        
      </div>
    }
    </>
  )
}

export default App
