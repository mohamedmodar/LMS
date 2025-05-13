
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-accent to-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/20 mix-blend-multiply blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Learn Without <span className="gradient-text">Limits</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Discover thousands of courses taught by expert instructors. Expand your skills and achieve your personal and professional goals.
            </p>
            
            {/* Search bar */}
            <div className="relative max-w-md mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="What do you want to learn?" 
                className="pl-10 pr-4 py-3 w-full rounded-full border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />
              <Button className="absolute right-1 top-1 rounded-full">
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/courses">
                <Button size="lg" className="px-6">Explore Courses</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="lg" className="px-6">Get Started</Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10">
              <div>
                <p className="text-3xl font-bold gradient-text">500+</p>
                <p className="text-gray-600">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">100k+</p>
                <p className="text-gray-600">Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">90%</p>
                <p className="text-gray-600">Success rate</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
              alt="Students learning" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
