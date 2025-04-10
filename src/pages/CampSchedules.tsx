import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CAMP_SCHEDULES } from "@/data/medical";
import { useToast } from "@/components/ui/use-toast";

const CampSchedules = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [date, setDate] = useState<Date>();

  const handleSchedule = () => {
    if (date) {
      toast({
        title: "Camp Scheduled Successfully!",
        description: "A confirmation message has been sent to your registered mobile number.",
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Button 
        variant="ghost" 
        className="mb-4"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Camp Schedules</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CAMP_SCHEDULES.map((schedule, index) => (
          <Card key={index} className="p-4">
            <h3 className="font-semibold mb-2">{schedule.department}</h3>
            <div className="text-sm space-y-1">
              <p><span className="font-medium">Date:</span> {schedule.date}</p>
              <p><span className="font-medium">Location:</span> {schedule.location}</p>
              <p><span className="font-medium">Timing:</span> {schedule.timing}</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="mt-4 w-full"
                  onClick={() => setSelectedDepartment(schedule.department)}
                >
                  Schedule Camp
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule a New Camp for {selectedDepartment}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  defaultMonth={new Date()} // ✅ This line ensures the calendar shows the current month
                  className="rounded-md border"
                  />

                  <Button onClick={handleSchedule} disabled={!date}>
                    Confirm Schedule
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CampSchedules;
