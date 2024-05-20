import { Link } from "react-router-dom";
import "../styles/home.css";
function Home(){
    return(
        <div className=" homediv">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Fakestore</h1>
          <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
            Discover the best products and services for your business.
          </p>
          <Link to="shop/all" className='linkStyle' >
            Start Shopping
          </Link>
        </div>
    );
}
export default Home;