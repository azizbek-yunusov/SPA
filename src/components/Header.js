import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Header() {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 250 ? setStickyClass('fixed top-0 left-0 z-50 scrollAnimated') : setStickyClass('relative');
    }
  };
  return (
    <nav className={`w-full bg-slate-900 ${stickyClass}`}>
      <div className="container flex items-center justify-between h-16 xl:h-20 sm:h-16 md:16">
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="self-center text-3xl font-semibold text-lime-50 ">SPA</span>
        </Link>
        
        <ul className="flex">
          <li className="mx-5 text-white text-2xl">
            <Link to="/">HOME</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}