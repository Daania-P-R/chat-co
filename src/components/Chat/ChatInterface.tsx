
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/components/ui/use-toast";
import { SendIcon, RotateCw } from "lucide-react";

interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      content: "Hi there! I'm your Chat-Co assistant. How can I help you today?",
      role: "assistant",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: uuidv4(),
      content: input,
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate a response after a short delay (front-end only)
    setTimeout(() => {
      const botResponses = [
        "I understand your question about college admissions. The next intake starts in September.",
        "That's a great question! The library is open from 8am to 10pm on weekdays.",
        "The financial aid office can be contacted at financial.aid@college.edu or by visiting room 230 in the admin building.",
        "Our college offers over 50 undergraduate programs across 5 faculties.",
        "The deadline for scholarship applications is March 15th each year."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: ChatMessage = {
        id: uuidv4(),
        content: randomResponse,
        role: "assistant",
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        content: "Hi there! I'm your Chat-Co assistant. How can I help you today?",
        role: "assistant",
        timestamp: new Date()
      }
    ]);
    toast({
      title: "Chat reset",
      description: "Your conversation has been reset.",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-lg shadow-sm border">
      <div className="p-4 border-b flex items-center justify-between bg-gray-50 rounded-t-lg">
        <h2 className="text-lg font-semibold text-black">Chat-Co</h2>
        <Button variant="outline" size="sm" onClick={handleReset} className="flex items-center gap-2 text-black">
          <RotateCw className="h-4 w-4" />
          Reset Chat
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4 chat-container">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`chat-bubble ${message.role === "user" ? "user" : "bot"} animate-fade-in`}
            >
              <div className="flex justify-between items-start">
                <span className="font-medium">
                  {message.role === "user" ? "You" : "Chat-Co"}
                </span>
                <span className="text-xs text-gray-500 ml-2">
                  {formatTime(message.timestamp)}
                </span>
              </div>
              <div className="mt-1">{message.content}</div>
            </div>
          ))}
          
          {isTyping && (
            <div className="chat-bubble bot">
              <div className="flex items-center">
                <span className="font-medium">Chat-Co</span>
                <div className="typing-indicator ml-3">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={endOfMessagesRef} />
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <Input
            placeholder="Ask a question about your college..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            className="flex-1"
          />
          <Button 
            type="submit" 
            disabled={isTyping || !input.trim()} 
            className="bg-black hover:bg-gray-800 text-white"
          >
            <SendIcon className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
        <div className="text-xs text-gray-500 mt-2">
          Try asking about college hours, registration, library, or financial aid.
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
