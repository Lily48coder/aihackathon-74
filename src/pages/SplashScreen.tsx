import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.querySelector('.splash-content');
      if (element) {
        element.classList.add('animate-fade-out');
      }
      setTimeout(() => {
        navigate("/");
      }, 300); // Wait for fade out animation to complete
    }, 3700); // Start fade out before the 4 second mark

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="splash-content animate-fade-in transition-opacity duration-300 w-full h-screen flex items-center justify-center">
        <img
          src="/lovable-uploads/6d8ad15a-4ccf-4154-8818-4433e4803a93.png"
          alt="SymptoCamp Logo"
          className="w-full h-full object-contain animate-scale-in"
        />
      </div>
    </div>
  );
};

export default SplashScreen;