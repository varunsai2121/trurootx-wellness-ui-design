
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter signup
    console.log('Email submitted:', email);
    setEmail('');
    // Add toast notification here
  };
  
  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">TruRootX Nutrition</h3>
            <p className="text-sm text-gray-300">
              Plant-powered supplements backed by science for your wellness journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Oral Strips</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Gummies</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Bundles</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Subscribe & Save</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Our Science</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Get 15% Off</h4>
            <p className="text-sm text-gray-300">
              Sign up for our newsletter and receive 15% off your first order.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <button type="submit" className="w-full pill-button-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} TruRootX Nutrition. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
