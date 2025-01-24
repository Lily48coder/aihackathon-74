import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0EA5E9] to-[#D3E4FD] flex items-center justify-center p-4 animate-fade-in">
      <img
        src="/lovable-uploads/6d8ad15a-4ccf-4154-8818-4433e4803a93.png"
        alt="SymptoCamp Logo"
        className="w-full max-w-2xl animate-scale-in"
      />
    </div>
  );
};

export default SplashScreen;