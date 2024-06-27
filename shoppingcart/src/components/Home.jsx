import { Link } from "react-router-dom";
import "../styles/home.css";
function Home(){
    return(
        <div className=" homediv">
          <h1 className="text-3xl font-bold tracking-tighter text-[#3131F1] sm:text-4xl md:text-5xl text-balance">Welcome to Fakestore</h1>
          <p className="mt-4 md:text-xl text-[#3131F1] text-balance">
            Discover the best products and services for your business.
          </p>
          <Link to="shop/all" className='text-lg btnStyle btn-home btn-shadow' >
            Start Shopping
          </Link>
        </div>
    );
}
export default Home;