import Shop from "../components/Shop";
import Layout from "../components/Layout";
import Cart from "../components/cartComponents/Cart";
import Home from "../components/Home";
import All from "../components/category/All";
import Electronics from "../components/category/Electronics";
import Jewellery from "../components/category/Jewellery";
import MenCloths from "../components/category/MenCloths";
import WomenCloths from "../components/category/WomenCloths";
import { ProductPage } from "../components/productpageComponents/ProductDisp";

// always ensure that children - 'c' is small coz i spen 2 hrs on this error
let routes=[
    {path:"/",
    element:<Layout/>,
    children:[
        { index: true, element: <Home /> },
        {
            path:"shop",
            element:<Shop/>,
            children:[
                {path:"all",element:<All/>},
                {path:"electronics",element:<Electronics/>},
                {path:"jewelery",element:<Jewellery/>},
                {path:"mens-clothing",element:<MenCloths/>},
                {path:"womens-clothing",element:<WomenCloths/>},
                {path:"item/:id",element:<ProductPage/>},
            ]
        },
        {
            path:"cart",
            element:<Cart/>
        },
        
    ]
    },
    
    
];
export default routes;