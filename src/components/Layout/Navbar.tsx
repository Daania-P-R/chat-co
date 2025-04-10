import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, UserIcon, MessageSquareIcon, FileTextIcon } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-white/70 backdrop-blur-md"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/chat" className="flex items-center cursor-pointer" title="Chat with Chat-Co">
            <img src="/lovable-uploads/5fe04011-cca2-4dac-9956-f12fd85e2bd8.png" alt="Chat-Co Logo" className="h-10 w-10" />
            <span className="ml-2 font-bold text-xl text-cyan-500">Chat-Co</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {!isAuthenticated && (
            <>
              <Link to="/admin-login">
                <Button variant="outline" className="items-center">
                  <UserIcon className="h-4 w-4 mr-2" /> Admin
                </Button>
              </Link>
            </>
          )}
          
          {isAuthenticated && user?.role === "admin" && (
            <>
              <Link to="/chat">
                <Button variant="ghost" className="hidden md:flex items-center">
                  <MessageSquareIcon className="h-4 w-4 mr-2" /> Chat
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="ghost" className="hidden md:flex items-center">
                  <FileTextIcon className="h-4 w-4 mr-2" /> Admin
                </Button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full w-10 h-10 p-0">
                    <span className="sr-only">User menu</span>
                    <UserIcon className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>{user?.username}</span>
                      <span className="text-xs font-normal text-gray-500">{user?.email}</span>
                      <span className="text-xs font-normal text-gray-500 mt-1 capitalize">
                        Admin Account
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/chat")}>
                    <MessageSquareIcon className="h-4 w-4 mr-2" /> Chat
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/admin")}>
                    <FileTextIcon className="h-4 w-4 mr-2" /> Admin Panel
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-500 focus:text-red-500">
                    <LogOutIcon className="h-4 w-4 mr-2" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
