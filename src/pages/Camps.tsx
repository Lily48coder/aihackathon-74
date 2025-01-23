import { Card } from "@/components/ui/card";

const Camps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Medical Camps</h1>
        <p>Available medical camps will be listed here.</p>
      </Card>
    </div>
  );
};

export default Camps;