
import { Link } from 'react-router-dom';
import { Star, Clock, Users, ChevronRight, Tag } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    rating: 4.9,
    students: 12453,
    hours: 42,
    level: "Beginner to Advanced",
    price: "$89.99",
    category: "Web Development",
    tag: "Bestseller"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    instructor: "Michael Chen",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    rating: 4.8,
    students: 8763,
    hours: 38,
    level: "Intermediate",
    price: "$94.99",
    category: "Data Science",
    tag: "Hot & New"
  },
  {
    id: 3,
    title: "UX/UI Design Fundamentals",
    instructor: "Alicia Garcia",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80",
    rating: 4.7,
    students: 6892,
    hours: 24,
    level: "All Levels",
    price: "$69.99",
    category: "Design",
    tag: "Popular"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
            <p className="text-gray-600">Explore our most popular and highly-rated courses</p>
          </div>
          <Link to="/courses" className="flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
            View all courses <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id}>
              <Card className="overflow-hidden h-full hover-scale card-shadow">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-48 object-cover"
                  />
                  {course.tag && (
                    <Badge className="absolute top-4 left-4 bg-primary">
                      <Tag className="mr-1 h-3 w-3" /> {course.tag}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{course.category}</Badge>
                  <h3 className="font-semibold text-xl mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">By {course.instructor}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <div className="flex items-center mr-4">
                      <Star className="text-yellow-400 h-4 w-4 mr-1 fill-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.hours}h</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    Level: {course.level}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between bg-gray-50 px-6 py-4">
                  <span className="font-bold text-lg">{course.price}</span>
                  <Button variant="outline" size="sm">Preview</Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
