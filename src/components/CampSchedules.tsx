import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CAMP_SCHEDULES } from "@/data/medical";
import { useToast } from "@/hooks/use-toast";

const CampSchedules = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const handleSchedule = () => {
    if (date) {
      toast({
        title: "Camp Scheduled",
        description: `Your camp has been scheduled for ${date.toLocaleDateString()}`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Camp Schedules</h1>
        
        <div className="space-y-4">
          {CAMP_SCHEDULES.map((schedule, index) => (
            <Card key={index} className="p-6">
              <h2 className="text-xl font-semibold mb-2">{schedule.department}</h2>
              <div className="space-y-2 text-gray-600">
                <p>Date: {schedule.date}</p>
                <p>Location: {schedule.location}</p>
                <p>Timing: {schedule.timing}</p>
              </div>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4">Schedule Camp</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Schedule New Camp</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                    <Button onClick={handleSchedule}>
                      Confirm Schedule
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampSchedules;