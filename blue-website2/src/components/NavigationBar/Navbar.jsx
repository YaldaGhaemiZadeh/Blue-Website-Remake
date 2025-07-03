import Search_bar from './SearchBox/SearchBar';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-700 to-sky-400 text-2xl italic shadow-xl z-40">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-center px-4 py-3 min-w-[320px]">
        
        {/* Logo */}
        <a href="/home" id="logo" className="text-white font-bold text-3xl mb-2 md:mb-0">
          {/* <Logo /> */}
          placeholder
        </a>

        {/* Search Bar */}
        <div className="w-full md:w-1/3 my-2 md:my-0">
          <Search_bar />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 font-semibold text-[#101a59]">
          <a href="/shop">SHOP</a>
          <a href="/about">BLOGS</a>
          <a href="/login">LANGUAGES</a>
        </div>

        {/* Sign Up Button */}
        <a href="/register" className="mt-3 md:mt-0">
          <button className="w-[150px] h-[50px] bg-[#008eff] hover:bg-[#008cffc7] text-white rounded-lg transition-colors duration-200">
            SIGN UP
          </button>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
