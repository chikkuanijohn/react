import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import React,{useState,useEffect} from "react";
import axios from 'axios'
import Footer from './Footer';

const Home=()=>{
    const [product,setProduct]=useState([])
    const [add,setAdd]=useState(false)
    const [currentProduct,setCurrentProduct]=useState([null])
    useEffect(()=>{
        axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
            .then(response=>setProduct(response.data))
            .catch(error=> console.log(error))
    },[])


    const view_p=(products)=>{
        setAdd(true);
        setCurrentProduct(products);
        //  console.log(add,currentProduct);
        
    }
    return (
      <>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


{
<div className="carousel-inner">
  <div class="carousel-item active">
    <img src={image1} alt="Los Angeles" class="d-block" style={{width:"100%"}}/>
  </div>
  <div className="carousel-item">
    <img src={image2} alt="Chicago" class="d-block" style={{width:"100%"}}/>
  </div>
  <div className="carousel-item">
    <img src={image3} alt="New York" class="d-block" style={{width:"100%"}}/>
  </div>
</div>}


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>



        <div className="container mt-3">
         {/* {()=> editTask(task)}*/}
      <div className="row" id="a1">
      {product.map(pro=> (
        <div className="col-lg-3 col-md-3 c0l-sm-6" key={pro.id}>
          <div className="card" onClick={()=>view_p(pro)}>
            <img childrenlassNmae="card-img-top img-fluid" src={pro.image} alt="product image" />
            <div className="card-body">
              <h4 className="card-title">{pro.title}</h4>
              <h6 className="card-text">${pro.price}</h6>
            </div>
          </div>
        </div>
        ))}
        
      </div>
      {add ?(
        <ViewProduct
        currentProduct={currentProduct}
        />
      ):console.log('view product    ')}
    </div>

    <Footer/>
    </>
  );
};
const ViewProduct=(currentProducts)=>{
  const [product,setProduct]=useState(currentProducts)
  document.getElementById("a1").style.display="none"
  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6-d-flex justify-content-center">
        <img src={product.currentProduct.image} alt="" className="img-fluid col-lg-12 w-75"/>


        </div>
        <div className="desc col-lg-6">
          <h2>{product.currentProduct.p_name}</h2>
          <p>{product.currentProduct.description}</p>
          {/* console.log(product.currentProduct); */}
          <p>${product.currentProduct.price}</p>
          <div className="row">
            <button className="btn btn-warning col-lg-10">Add to cart</button>
            <button className="btn btn-success col-lg-10 mt-1">Buy now</button>

          </div>

        </div>

      </div>

    </div>
  )
}
export default Home
    
        
     
 