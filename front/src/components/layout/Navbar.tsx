
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn, UserPlus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">EduLearn</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">About Us</Link>
            <div className="relative group">
              <button className="flex items-center font-medium hover:text-primary transition-colors">
                Courses <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-accent">Web Development</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-accent">Data Science</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-accent">UX/UI Design</Link>
                <Link to="#" className="block px-4 py-2 text-sm hover:bg-accent">Mobile Development</Link>
              </div>
            </div>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact Us</Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/signin">
              <Button variant="ghost" size="sm" className="flex items-center">
                <LogIn className="mr-1 h-4 w-4" /> Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm" className="flex items-center">
                <UserPlus className="mr-1 h-4 w-4" /> Sign Up
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 px-4 bg-white rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-primary" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="font-medium hover:text-primary" onClick={toggleMenu}>About Us</Link>
              <Link to="/contact" className="font-medium hover:text-primary" onClick={toggleMenu}>Contact Us</Link>
              <div className="pt-2 border-t border-gray-200">
                <Link to="/signin" onClick={toggleMenu}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <LogIn className="mr-2 h-4 w-4" /> Sign In
                  </Button>
                </Link>
                <Link to="/signup" onClick={toggleMenu}>
                  <Button variant="default" size="sm" className="w-full justify-start mt-2">
                    <UserPlus className="mr-2 h-4 w-4" /> Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
