import { BookOpen, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// Import mock data
import { myCourses, recentActivity, upcomingEvents } from '@/data/dashboard';

const DashboardHome = () => {
  return (
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
  );
};

export default DashboardHome; 