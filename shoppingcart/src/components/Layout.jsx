import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import "../styles/layout.css";
function Layout() {
    
  
    return (
      <>
      <header >
        
        <div className="head_cls sticky top-0 flex items-center justify-between px-4 py-3 md:px-6 md:py-4">

        <span className="ml-2 font-medium">FakeStore</span>
        
        <nav className="space-x-4 md:flex">
        <Link to="shop/all" className='linkStyle' >
            Shop
          </Link>
          <Link to="cart" className='linkStyle'>
            Cart
          </Link>
        </nav>
        </div>
        
      </header>
      <main className="main">
        <Outlet/>
      </main>
      </>
    )
  }
  
  export default Layout