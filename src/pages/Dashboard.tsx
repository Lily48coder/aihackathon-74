import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard.</p>
      </Card>
    </div>
  );
};

export default Dashboard;