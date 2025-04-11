
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AlignRight, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl text-primary">TruRootX</span>
            <span className="text-sm font-medium text-muted-foreground">Nutrition</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">Products</a>
          <a href="#why-trurootx" className="text-sm font-medium hover:text-primary transition-colors">Why TruRootX</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
          <Button variant="outline" className="rounded-full">Login</Button>
          <Button className="rounded-full">Shop Now</Button>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <AlignRight />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="bg-white px-4 pt-2 pb-4 space-y-4">
            <a href="#products" className="block text-sm font-medium hover:text-primary py-2">Products</a>
            <a href="#why-trurootx" className="block text-sm font-medium hover:text-primary py-2">Why TruRootX</a>
            <a href="#testimonials" className="block text-sm font-medium hover:text-primary py-2">Testimonials</a>
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" className="flex-1 rounded-full">Login</Button>
              <Button className="flex-1 rounded-full">Shop Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
