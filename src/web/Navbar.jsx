import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="container-fluid bg-warning p-1 text-center">
                <p>INTRODUCING OUR DIY MULTILAYER KIT. FREE SHIPPING ON SPECIFIC ORDER ALL OVER INDIA</p>
            </div>
            <div className="container-fluid border-dark border-bottom border-1">
                <div className="row">
                    <div className="col-4 nav-left-icon"><i class="ri-menu-line d-xl-none"></i></div>
                    <div className="col-4 text-center">
                        <img src="mk_wallpaper_185.jpg" alt="dsd" />
                    </div>
                    <div className="col-4 text-right nav-right-icon">
                        <i class="ri-account-pin-circle-line"></i>
                        <i class="ri-search-line"></i>
                        <i class="ri-shopping-bag-line"></i>
                    </div>
                </div>
                <div className="nav-item text-center d-none d-lg-block">
                    <ul>
                        <li><NavLink to='/'>home</NavLink></li>
                        <li> <NavLink to='/Newarrival'>new arrival</NavLink></li>
                        <li ><NavLink to='/Traditionalrangoliart'>traditional rangoli art</NavLink></li>
                        <li><NavLink to='/'>Diy</NavLink></li>
                        <li><NavLink to='/About'>about</NavLink></li>
                        <li>contact</li>

                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar 