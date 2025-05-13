import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, BookOpen, Clock, Award, BarChart3, BookMarked, Settings, Bell, LogOut, Search } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const myCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    instructor: "Sarah Johnson",
    progress: 68,
    lastAccessed: "2 days ago",
    nextLesson: "CSS Flexbox Layout"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    instructor: "Michael Chen",
    progress: 42,
    lastAccessed: "5 days ago",
    nextLesson: "Linear Regression"
  },
  {
    id: 3,
    title: "UX/UI Design Fundamentals",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80",
    instructor: "Alicia Garcia",
    progress: 23,
    lastAccessed: "1 week ago",
    nextLesson: "Wireframing Techniques"
  }
];

const recentActivity = [
  {
    id: 1,
    type: "certificate",
    title: "HTML & CSS Mastery",
    date: "2 days ago",
    icon: Award
  },
  {
    id: 2,
    type: "course",
    title: "Completed JavaScript Basics Module",
    date: "4 days ago",
    icon: BookOpen
  },
  {
    id: 3,
    type: "quiz",
    title: "Scored 92% on CSS Quiz",
    date: "1 week ago",
    icon: BarChart3
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Live Coding Session",
    date: "Tomorrow, 7:00 PM",
    instructor: "John Smith",
    duration: "1 hour"
  },
  {
    id: 2,
    title: "Q&A Session: Data Science",
    date: "Oct 15, 6:00 PM",
    instructor: "Lisa Wang",
    duration: "45 minutes"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
      duration: 3000
    });
    navigate('/');
  };

  const handleNavigation = (tabName: string) => {
    setActiveTab(tabName);
    navigate(`/${tabName.toLowerCase().replace(' ', '-')}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300 fixed h-full z-10`}>
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          {sidebarOpen ? (
            <h2 className="text-xl font-bold gradient-text">EduLearn</h2>
          ) : (
            <div className="w-full flex justify-center">
              <span className="text-xl font-bold gradient-text">E</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-full"
          >
            <ChevronRight className={`h-5 w-5 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`} />
          </Button>
        </div>
        
        <div className="p-4">
          <nav className="space-y-1">
            {[
              { name: 'Dashboard', icon: BookMarked },
              { name: 'My Courses', icon: BookOpen },
              { name: 'Calendar', icon: Clock },
              { name: 'Achievements', icon: Award },
              { name: 'Analytics', icon: BarChart3 },
              { name: 'Settings', icon: Settings }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.name)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium w-full ${
                  activeTab === item.name
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {sidebarOpen && <span>{item.name}</span>}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Header */}
        <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{activeTab}</h1>
            <p className="text-gray-600">Welcome back, Alex!</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search courses..."
                className="pl-10 w-64"
              />
            </div>
            
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex Thompson" />
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Alex Thompson</p>
                    <p className="text-xs text-gray-500">alex@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BookOpen className="mr-2 h-4 w-4" /> My Courses
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        
        {/* Main Dashboard Content */}
        <main className="py-8 px-6">
          {activeTab === 'Dashboard' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Stats Cards */}
                {[
                  { title: "Courses In Progress", value: "3", icon: BookOpen, bgColor: "bg-blue-50", iconColor: "text-blue-500" },
                  { title: "Hours Spent Learning", value: "47", icon: Clock, bgColor: "bg-purple-50", iconColor: "text-purple-500" },
                  { title: "Certificates Earned", value: "5", icon: Award, bgColor: "bg-green-50", iconColor: "text-green-500" }
                ].map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-full ${stat.bgColor} mr-4`}>
                          <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                        </div>
                        <div>
                          <p className="text-gray-600">{stat.title}</p>
                          <h3 className="text-2xl font-bold">{stat.value}</h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Continue Learning Section */}
              <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {myCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="relative h-40">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <p className="text-gray-600 text-sm">Instructor: {course.instructor}</p>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{course.progress}% Complete</span>
                          <span>{course.lastAccessed}</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">Next:</span> {course.nextLesson}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="secondary" className="w-full">Continue Learning</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start">
                          <div className={`p-2 rounded-full ${
                            activity.type === 'certificate' ? 'bg-yellow-100' :
                            activity.type === 'course' ? 'bg-blue-100' : 'bg-green-100'
                          } mr-4`}>
                            <activity.icon className={`h-5 w-5 ${
                              activity.type === 'certificate' ? 'text-yellow-600' :
                              activity.type === 'course' ? 'text-blue-600' : 'text-green-600'
                            }`} />
                          </div>
                          <div>
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">View All Activity</Button>
                  </CardFooter>
                </Card>
                
                {/* Upcoming Events */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold">{event.title}</h4>
                              <div className="text-sm space-y-1 mt-1">
                                <p className="text-gray-600">
                                  <Clock className="inline-block h-4 w-4 mr-1" /> {event.date}
                                </p>
                                <p className="text-gray-600">Instructor: {event.instructor}</p>
                                <p className="text-gray-600">Duration: {event.duration}</p>
                              </div>
                            </div>
                            <Badge>Upcoming</Badge>
                          </div>
                          <div className="mt-4">
                            <Button size="sm">Join Event</Button>
                            <Button variant="outline" size="sm" className="ml-2">Add to Calendar</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">View All Events</Button>
                  </CardFooter>
                </Card>
              </div>
            </>
          )}
          
          {activeTab === 'My Courses' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">My Courses</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {myCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="relative h-40">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4 pb-0">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <p className="text-gray-600 text-sm">Instructor: {course.instructor}</p>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{course.progress}% Complete</span>
                          <span>{course.lastAccessed}</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="secondary" className="w-full">Continue Learning</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'Calendar' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Calendar</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-gray-500">Calendar view will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === 'Achievements' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Card key={item}>
                    <CardHeader>
                      <CardTitle>Certificate {item}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center">
                        <Award className="h-16 w-16 text-yellow-500" />
                      </div>
                      <p className="text-center mt-4">Completed course #{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'Analytics' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Learning Analytics</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-gray-500">Charts and statistics will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === 'Settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Settings</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Account Settings</h3>
                      <Input placeholder="Change email" className="mb-2" />
                      <Input placeholder="Change password" type="password" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Notification Preferences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="email-notifications" />
                          <label htmlFor="email-notifications">Email Notifications</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="push-notifications" />
                          <label htmlFor="push-notifications">Push Notifications</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// This is a helper component for the dropdown menu
const UserIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default Dashboard;