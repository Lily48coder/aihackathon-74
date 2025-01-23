import { Card } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p>Your profile information will appear here.</p>
      </Card>
    </div>
  );
};

export default Profile;