import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Header() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
        if (location.pathname !== '/tableperiodic') {
        setIsScrolled(scrollTop > 50);
      } else {
        setIsScrolled(false); 
      }
    };
    const handleResize = ()=>{
      setIsMobileView(window.innerWidth < 768);
    }
      
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [location]);

  return (
    <>
      <header
        className={`bg-green-800 text-white p-6 flex items-center shadow-md transition-all duration-500 ease-in-out fixed top-0 left-0 w-full z-50 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}
      >
        <div className={`flex items-center xs:gap-0 xs:text-sm sm:gap-5 text-lg ${isScrolled ? 'justify-center' : ''}`}>
          <Link to="/" className="transition-transform duration-600 ease-in-out hover:scale-110">
            <img src="/./img/logo.png" alt="Logo Image" className="max-w-[70px] h-auto sm:block xs:hidden" />
          </Link>
          {!isScrolled && <h1 className="m-0 text-2xl hidden md:block">GREEN MAKER LAB</h1>}
          <nav className="flex items-center gap-5 xl:text-lg xs:text-sm ">
            <Link to="/" className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline">
              Home
            </Link>
            <Link to="/publications" className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline">
              Publications
            </Link>
            <Link to="/team" className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline">
              Team
            </Link>
            <Link to="/about-us" className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline">
              About Us
            </Link>
            <Link to="/tableperiodic" className="topics text-white font-bold transition-transform duration-300 ease-in-out hover:scale-105  hover:underline">
            { isMobileView ? "PTSGC": "Periodic Table of Sustainable Green Chemistry"}
            </Link>
          </nav>
        </div>
      </header>
      <div style={{ paddingTop: isScrolled ? '3rem' : '4rem' }} />
      
    </>
  );
}

export default Header;
