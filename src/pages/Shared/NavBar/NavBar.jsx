
// import PropTypes from 'prop-types';

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const menuItems = <>
        <li><NavLink to='/Home'>Home</NavLink></li>
        <li><NavLink to='/add-product'>Add Product</NavLink></li>
        <li><NavLink to='/my-cart'>My Cart</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl z-10">Car Hut</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end z-10">
                <Link to='/signin'><button className="btn">SignIn</button></Link>
            </div>
        </div>
    );
};

NavBar.propTypes = {

};

export default NavBar;