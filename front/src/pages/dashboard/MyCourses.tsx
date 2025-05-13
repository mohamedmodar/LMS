import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { myCourses } from '@/data/dashboard';

const MyCourses = () => {
  return (
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
  );
};

export default MyCourses; 