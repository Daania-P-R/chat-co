
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/Auth/LoginForm";
import { Button } from "@/components/ui/button";
import { MessageSquareIcon, GraduationCapIcon, BookOpenIcon, AwardIcon } from "lucide-react";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  if (isAuthenticated) {
    // Redirect authenticated users to the chat page
    navigate("/chat");
    return null;
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold text-college-800 mb-4">
              Your College Assistant, <br />Powered by AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Get instant answers to your questions about admissions, courses, campus life, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-college-700 hover:bg-college-800 text-white py-6 px-8 text-lg"
                onClick={() => document.getElementById("login-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                <MessageSquareIcon className="mr-2 h-5 w-5" />
                Start Chatting
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl border p-6">
              <div className="space-y-4">
                <div className="chat-bubble bot">
                  <div className="font-medium">College Bot</div>
                  <div className="mt-1">Hi there! How can I help you with college information today?</div>
                </div>
                <div className="chat-bubble user">
                  <div className="font-medium">You</div>
                  <div className="mt-1">When does the spring semester begin?</div>
                </div>
                <div className="chat-bubble bot">
                  <div className="font-medium">College Bot</div>
                  <div className="mt-1">The Spring semester begins January 15th. Registration opens two weeks prior on January 1st. Make sure to check your eligibility status before registering!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our College Chatbot Helps You</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <GraduationCapIcon className="h-8 w-8 text-college-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Answers</h3>
              <p className="text-gray-600">Get immediate responses to your questions about campus resources, deadlines, and policies.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <BookOpenIcon className="h-8 w-8 text-college-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Information</h3>
              <p className="text-gray-600">Access accurate information sourced directly from official college documents.</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <AwardIcon className="h-8 w-8 text-college-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Available 24/7</h3>
              <p className="text-gray-600">Get help anytime, day or night, without waiting for office hours or email responses.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Login Section */}
      <section id="login-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Login to Get Started</h2>
          <div className="max-w-md mx-auto">
            <LoginForm />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-college-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <BookOpenIcon className="h-6 w-6" />
                <span className="ml-2 text-lg font-bold">College Chatbot</span>
              </div>
              <p className="text-sm text-gray-300 mt-1">© 2025 College Chatbot. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white">About</a>
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
