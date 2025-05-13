import { Card, CardContent } from "@/components/ui/card";

const Calendar = () => {
  return (
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
  );
};

export default Calendar; 