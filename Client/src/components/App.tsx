import { useEffect, useState } from 'react';
import './App.css'
import ProductList from './ProductList';
import Header from './Header';
import { IProduct } from '../Model/IProduct'; 
import { Container} from '@mui/material';

function App() {
   const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5096/api/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);
  // function addProduct() {
  //   setProducts([
  //     ...products,
  //     {
  //       productId: Date.now(),
  //       name: `product ${Date.now()}`,
  //       price: 2400,
  //       isActive: true,
  //       stock: 10,
  //       imageUrl: "aa",
  //       description:"aadfsdaf"
  //     },
  //   ]);
  // }
   
  return (   
    <>
     {/* <CssBaseline/> */}
    <Header />
    <Container>
    <ProductList products={products} />
    </Container>
    
    {/* addProduct={addProduct} */}
    </>    
  )
}
 
 
export default App
