
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/Auth/LoginForm";
import { Button } from "@/components/ui/button";
import { MessageSquareIcon, HeadphonesIcon, BotIcon, UserIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [showPhone, setShowPhone] = useState(false);
  
  // If user is authenticated and is admin, redirect to admin panel
  if (isAuthenticated && user?.role === "admin") {
    navigate("/admin");
    return null;
  }

  const togglePhoneNumber = () => {
    setShowPhone(!showPhone);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Your AI Assistant, <br />Powered by Chat-Co
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Get instant answers to your questions about admissions, courses, campus life, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admin-login">
                <Button variant="outline" className="py-6 px-8 text-lg">
                  <UserIcon className="mr-2 h-5 w-5" />
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative cursor-pointer" onClick={() => navigate("/chat")}>
              <img 
                src="/lovable-uploads/5fe04011-cca2-4dac-9956-f12fd85e2bd8.png" 
                alt="Chat-Co Logo" 
                className="w-64 h-64 mb-6 hover:scale-105 transition-transform duration-300" 
                title="Click to start chatting with Chat-Co"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Chat-Co Helps You</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <HeadphonesIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Answers</h3>
              <p className="text-gray-600">Get immediate responses to your questions about campus resources, deadlines, and policies.</p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <BotIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Information</h3>
              <p className="text-gray-600">Access accurate information sourced directly from official college documents.</p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MessageSquareIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Available 24/7</h3>
              <p className="text-gray-600">Get help anytime, day or night, without waiting for office hours or email responses.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/chat" className="hover:opacity-80 transition-opacity">
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/5fe04011-cca2-4dac-9956-f12fd85e2bd8.png" 
                    alt="Chat-Co Logo" 
                    className="h-6 w-6" 
                  />
                  <span className="ml-2 text-lg font-bold">Chat-Co</span>
                </div>
              </Link>
              <p className="text-sm text-gray-300 mt-1">© 2025 Chat-Co. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white">About</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
              <button 
                className="text-gray-300 hover:text-white flex items-center"
                onClick={togglePhoneNumber}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </button>
            </div>
          </div>
          {showPhone && (
            <div className="mt-4 text-center md:text-right animate-fade-in">
              <a href="tel:7559999824" className="text-white hover:text-gray-300 transition-colors inline-flex items-center bg-gray-800 px-4 py-2 rounded-md">
                <Phone className="h-4 w-4 mr-2" />
                <span>7559999824</span>
              </a>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Index;
