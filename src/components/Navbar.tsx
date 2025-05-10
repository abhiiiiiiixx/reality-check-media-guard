
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-deepblue to-teal rounded-lg w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <span className="font-bold text-lg text-deepblue">DeepFake Detector</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-deepblue-700 hover:text-teal-500 transition-colors">
            Home
          </Link>
          <Link to="/how-it-works" className="text-deepblue-700 hover:text-teal-500 transition-colors">
            How It Works
          </Link>
          <Link to="/reviews" className="text-deepblue-700 hover:text-teal-500 transition-colors">
            Reviews
          </Link>
          <div className="flex gap-3">
            <Link to="/login">
              <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-teal-500 hover:bg-teal-600">Sign up</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-3 flex flex-col">
            <Link 
              to="/" 
              className="py-2 text-deepblue-700 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className="py-2 text-deepblue-700 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/reviews" 
              className="py-2 text-deepblue-700 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <div className="flex gap-3 mt-3">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">
                  Log in
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-teal-500 hover:bg-teal-600">Sign up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
