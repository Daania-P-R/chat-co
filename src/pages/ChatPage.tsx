
import Navbar from "@/components/Layout/Navbar";
import ChatInterface from "@/components/Chat/ChatInterface";

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatPage;
