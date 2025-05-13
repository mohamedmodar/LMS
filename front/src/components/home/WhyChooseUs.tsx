
import { Check, Award, Users, BookOpen, Star, LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center shadow-md">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Choose EduLearn</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're dedicated to providing the highest quality online learning experience with features designed to help you succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <Feature 
                icon={Award}
                title="Expert Instructors"
                description="Learn from industry professionals with years of experience and passion for teaching."
              />
              
              <Feature 
                icon={BookOpen}
                title="Comprehensive Curriculum"
                description="Our courses are carefully structured to provide in-depth knowledge and practical skills."
              />
              
              <Feature 
                icon={Users}
                title="Supportive Community"
                description="Join a global community of learners to share knowledge, ask questions, and grow together."
              />
              
              <Feature 
                icon={Star}
                title="Recognized Certifications"
                description="Earn certificates respected by employers worldwide to boost your career prospects."
              />
            </div>
            
            <div className="mt-10 pl-16">
              <h4 className="font-semibold mb-3">Additional benefits include:</h4>
              <ul className="space-y-2">
                {[
                  "Flexible learning schedule",
                  "Hands-on projects and assignments",
                  "Personal feedback and guidance",
                  "Lifetime access to course materials",
                  "Regular content updates"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Students collaborating" 
                className="rounded-lg shadow-xl relative z-10"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i + 20}.jpg`} 
                          alt="Student" 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Join 100,000+ learners</p>
                    <p className="text-gray-500">From 150+ countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
