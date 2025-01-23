import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CampSchedules = () => {
  const schedules = [
    {
      department: "Emergency Department (ED)",
      date: "Ongoing (24/7)",
      location: "Uttar Pradesh, Lucknow, Raebareli",
      timing: "24/7 availability"
    },
    {
      department: "Intensive Care Unit (ICU)",
      date: "Ongoing (24/7)",
      location: "Maharashtra, Mumbai, Vasai",
      timing: "24/7 availability"
    },
    // ... other departments will be added here
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Medical Camp Schedules</h1>
      <div className="grid gap-6">
        {schedules.map((schedule, index) => (
          <Card key={index} className="p-6">
            <h2 className="text-xl font-semibold text-[#0077B6] mb-2">
              {schedule.department}
            </h2>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Date:</span> {schedule.date}</p>
              <p><span className="font-medium">Location:</span> {schedule.location}</p>
              <p><span className="font-medium">Timing:</span> {schedule.timing}</p>
            </div>
            <Button 
              className="mt-4 bg-[#0077B6] hover:bg-[#0077B6]/90"
              onClick={() => console.log(`Schedule camp for ${schedule.department}`)}
            >
              Schedule Camp
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CampSchedules;
