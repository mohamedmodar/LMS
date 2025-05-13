import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Settings = () => {
  return (
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
  );
};

export default Settings; 