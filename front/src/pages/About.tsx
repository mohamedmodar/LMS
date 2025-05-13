
import { Award, Users, BookOpen, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-accent to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About EduLearn</h1>
            <p className="text-lg md:text-xl text-gray-600">
              Empowering individuals worldwide through quality education and accessible learning opportunities
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
                alt="Our mission" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At EduLearn, we're on a mission to transform lives through education. We believe that quality education should be accessible to everyone, regardless of their background or location. Our platform is designed to break down barriers to learning and provide opportunities for personal and professional growth.
              </p>
              <p className="text-gray-600">
                We strive to create an engaging, interactive, and supportive learning environment where students can acquire new skills, expand their knowledge, and achieve their goals. By connecting learners with expert instructors and a global community, we're fostering collaboration and innovation in education.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We're committed to delivering the highest quality content and learning experience."
              },
              {
                icon: Users,
                title: "Inclusivity",
                description: "We welcome learners from all backgrounds and design our platform to be accessible to everyone."
              },
              {
                icon: BookOpen,
                title: "Lifelong Learning",
                description: "We believe learning is a continuous journey that extends beyond formal education."
              },
              {
                icon: Globe,
                title: "Global Community",
                description: "We connect students and instructors worldwide to share knowledge and perspectives."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="mx-auto w-14 h-14 rounded-full gradient-bg flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">2018</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">The Beginning</h3>
                  <p className="text-gray-600">
                    EduLearn was founded by a group of educators and tech enthusiasts who saw the potential of online learning to reach students globally. Starting with just 5 courses and a small team, we embarked on our journey to revolutionize education.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">2020</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Rapid Growth</h3>
                  <p className="text-gray-600">
                    As the demand for online learning surged, we expanded our course offerings and improved our platform. We partnered with industry experts and universities to provide diverse, high-quality educational content.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-xl font-bold gradient-text">2023</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Global Impact</h3>
                  <p className="text-gray-600">
                    Today, EduLearn serves over 100,000 students from 150+ countries. Our platform offers more than 500 courses across various disciplines, from technology and business to arts and personal development. We continue to innovate and expand, guided by our mission to make quality education accessible to all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
            <p className="text-gray-600">The passionate people behind EduLearn</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Co-Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
                bio: "Former professor with a passion for educational innovation."
              },
              {
                name: "Michael Chen",
                role: "Co-Founder & CTO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                bio: "Tech entrepreneur with 15+ years of experience in EdTech."
              },
              {
                name: "Alicia Garcia",
                role: "Chief Learning Officer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
                bio: "Curriculum design expert focused on interactive learning."
              },
              {
                name: "David Williams",
                role: "Head of Instructor Relations",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                bio: "Former educator dedicated to instructor development."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100k+", label: "Students" },
              { value: "500+", label: "Courses" },
              { value: "150+", label: "Countries" },
              { value: "98%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
