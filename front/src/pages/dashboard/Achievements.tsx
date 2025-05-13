import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Achievements = () => {
  return (
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
  );
};

export default Achievements; 