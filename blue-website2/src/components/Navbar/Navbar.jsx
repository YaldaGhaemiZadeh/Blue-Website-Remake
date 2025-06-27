import './navbar-style.css'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href='/register' id='signinBtn'>Sign in</a>
            
            {/* <Search_bar /> */}
            <div id="search">placeholder</div>
            <div className="navbarLinks">
                <a href="">Shop</a>
                <a href="">Blog</a>
                <button href="">Language</button>
            </div>

            <a href='/home' id="logo">
            {/* <Logo /> */}
            placeholder
            </a>

        </nav>
     );
}
 
export default Navbar;