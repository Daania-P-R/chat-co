
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  HeadphonesIcon, 
  BotIcon, 
  UserIcon, 
  Phone, 
  ShieldIcon,
  MessageSquareIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const navigate = useNavigate();
  const [showPhone, setShowPhone] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const togglePhoneNumber = () => {
    setShowPhone(!showPhone);
  };
  
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a front-end implementation, no actual authentication
    if (username && password) {
      navigate("/admin");
    }
  };

  const goToChat = () => {
    navigate("/chat");
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
              <Button 
                onClick={() => setShowAdminLogin(true)} 
                className="py-6 px-8 text-lg bg-black hover:bg-gray-800 text-white"
              >
                <ShieldIcon className="mr-2 h-5 w-5" />
                Admin Panel
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative cursor-pointer" onClick={goToChat}>
              <img 
                src="/lovable-uploads/5fe04011-cca2-4dac-9956-f12fd85e2bd8.png" 
                alt="Chat-Co Logo" 
                className="w-64 h-64 mb-6 hover:scale-105 transition-transform duration-300" 
                title="Click to start chatting"
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
                <UserIcon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Available 24/7</h3>
              <p className="text-gray-600">Get help anytime, day or night, without waiting for office hours or email responses.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admin Login Dialog */}
      <Dialog open={showAdminLogin} onOpenChange={setShowAdminLogin}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Admin Login</DialogTitle>
            <DialogDescription>
              Enter your credentials to access the admin panel.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAdminLogin} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex justify-end pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowAdminLogin(false)}
                className="mr-2"
              >
                Cancel
              </Button>
              <Button type="submit">Login</Button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              For demo purposes, enter any username and password
            </p>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="hover:opacity-80 transition-opacity">
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
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy</Link>
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
