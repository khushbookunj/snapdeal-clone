import { Link } from "react-router-dom"
import { useState } from "react"
import Grabdeal from '../../assets/logo.png'
import trendingIcon from '../../assets/trending.svg'
import searchIcon from '../../assets/searchIcon.png'
import shoppingCartIcon from '../../assets/shop.png'
import userIcon from '../../assets/user.png'
import mobileIcon from '../../assets/mobile.png'
import './navbar.css'
import { Padding } from "@mui/icons-material"

const NavBar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    return (
        <>
          
          <header className="top-nav">
      <div className="top-nav-container">
        <div className="top-nav-title">
          <p>Brand Waali Quality.Bazaar Waali Deal!</p>
        </div>
        <div className="top-nav-navbar">
          <nav>
            <ul className="top-nav-list">
              <li>
                <a href="/#">Impact@Snapdeal</a>
              </li>
              <li>
                <a href="/#">GiftCards</a>
              </li>
              <li>
                <a href="/#">HelpCenter</a>
              </li>
              <li>
                <a href="/#">Sell On Snapdeal</a>
              </li>
              <li>
                <a href="/#">
                  <img
                    src={mobileIcon}
                    alt="mobileIcon"
                    style={{ height: "20px", margin: "0px 3px 2px 0px" }}
                  />
                  
                </a>
              </li>
                <p className="downloadApp">
                Download App
                </p>
            </ul>
          </nav>
        </div>
      </div>
    </header>




    <header className="top-bar">
      <div className="top-bar__container">
        <div className="top-bar__logo">
         <Link to={"/"}><img
            src={Grabdeal}
            alt="snapdeal-logo"
          /></Link> 
        </div>
        <div
          className="top-bar-hamburger"
        //   style={{ display: showHamburger ? "block" : "none" }}
        >
          {/* <GiHamburgerMenu className="GiHamburgerMenu" />
          <div className="hamburger-sidebar">
            <HomeSidebar style={{ borderRadius: "0px" }} />
            <Backdrop hideOnHover />
          </div> */}
        </div>
        <div className="top-bar__side-content">
          <div className="top-bar__searchbar">
            <div className="top-bar__searchbar__container">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products & brands"
               
              />
              {/* <div
                className="search-dropdown"
               
              >
                <ul>
                  <li>
                    <img className="trending" src={trendingIcon} alt="trending" />
                    Tending Searches
                  </li>
                  <li >Shoes for Men</li>
                  <li >Fancy Sarees</li>
                  <li >Phone Mobile</li>
                  <li >Watch Women</li>
                  <li >Timmer</li>
                  <li >Men watch</li>
                  <li >Jewellery Set</li>
                </ul>
                {/* <Backdrop clicked={togglesearch} /> */}
              {/* </div> */} 
              <button className={"searchBtn"} onClick={handleSubmit} >
                {/* <img
                  src={searchIcon}
                  alt="search"
                  style={{
                    height: "16px",
                  }}
                /> */}
                <span>Search</span>
              </button>
            </div>
          </div>
          <div className="top-bar__cart-sign">
            <div className="top-bar__cart">
                <Link to='/cart'>
              <div style={{ display: "flex" }}>
                {/* <p>Cart</p> */}
                {cartItemCount > 0 && (
                                <div style={{color:"white"}} >{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                <img
                  src={shoppingCartIcon}
                  alt="shopping cart"
                  style={{ height: "20px", margin: "3px 0px 0px 6px" }}
                />
                
              </div>
            
              </Link>
              {/* <Cart isOpen={isOpen} onClose={onClose}/> */}
            </div>
            <div className="top-bar__sign-in-wrapper">
              <div  className="top-bar__sign-in">
               
                <img
                  src={userIcon}
                  alt="profile user"
                  style={{ height: "30px", marginLeft: "5px" }}
                />
              </div>
              <div className="sign-in-hover">
                {/* <SideSignin /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  

{/* 

    
  







        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        <Link to="/" className="link">
                            <h1 className="brand">E-commerce</h1>
                        </Link>
                        <div className="formContainer">
                            <form className="search">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                    />
                                </div>
                                <button type="button" className="search-btn" onClick={handleSubmit} >
                                    Search
                                </button>
                            </form>
                        </div>
                        <Link to="/cart" className="link headerCart">
                            <img className="cartImg" src="/cart.svg" alt="cart" />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                        </Link>
                    </div>
                </div>
            </header>
        </div> */}
        </>
    )
}

export { NavBar }