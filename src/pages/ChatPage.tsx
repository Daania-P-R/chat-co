
import ChatInterface from "@/components/Chat/ChatInterface";
import { Link } from "react-router-dom";
import { MessageSquareIcon } from "lucide-react";

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center cursor-pointer" title="Back to Home">
            <img src="/lovable-uploads/5fe04011-cca2-4dac-9956-f12fd85e2bd8.png" alt="Chat-Co Logo" className="h-10 w-10" />
            <span className="ml-2 font-bold text-xl text-black">Chat-Co</span>
          </Link>
          <div className="flex items-center gap-2">
            <MessageSquareIcon className="h-5 w-5 text-black" />
            <span className="font-medium text-black">Chat Assistant</span>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatPage;
