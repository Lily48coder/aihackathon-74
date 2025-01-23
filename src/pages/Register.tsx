import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button onClick={() => navigate("/login")}>Register</Button>
    </div>
  );
}