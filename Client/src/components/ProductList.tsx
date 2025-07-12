import Grid2 from '@mui/material/GridLegacy';
import { IProduct } from "../Model/IProduct";
import Product from "./Product";


interface Props{
    products:IProduct[];
    // addProduct:()=>void;
}
// ,addProduct
export default function ProductList({products}:Props){
    return(
        <Grid2  container spacing={2}>             
            {products.map((p:IProduct)=>(
                <Grid2 size={{xs:6,md:4,lg:3}}>
                <Product key={p.productId} product={p}/>
                </Grid2>
            ))}
            {/* <button onClick={addProduct}>Add Product</button> */}
                {/* "test" */}
        </Grid2>

    )
}