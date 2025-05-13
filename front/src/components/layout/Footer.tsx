
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">EduLearn</h3>
            <p className="text-gray-600 mb-4">
              Empowering learners worldwide with cutting-edge education and skills for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/signin" className="text-gray-600 hover:text-primary transition-colors">Sign In</Link></li>
              <li><Link to="/signup" className="text-gray-600 hover:text-primary transition-colors">Sign Up</Link></li>
            </ul>
          </div>
          
          {/* Popular Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Data Science</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Machine Learning</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Mobile Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">UX/UI Design</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="rounded-md"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between text-gray-600 text-sm">
            <div>
              <p>&copy; {currentYear} EduLearn. All rights reserved.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 md:space-x-8">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
