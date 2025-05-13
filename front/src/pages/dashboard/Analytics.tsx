import { Card, CardContent } from "@/components/ui/card";

const Analytics = () => {
  return (
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
  );
};

export default Analytics; 