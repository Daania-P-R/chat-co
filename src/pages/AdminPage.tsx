
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import AdminPanel from "@/components/Admin/AdminPanel";
import { useToast } from "@/components/ui/use-toast";

const AdminPage = () => {
  const { isAuthenticated, user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/");
      } else if (user?.role !== "admin") {
        toast({
          title: "Access denied",
          description: "You don't have permission to access this page",
          variant: "destructive",
        });
        navigate("/chat");
      }
    }
  }, [isAuthenticated, user, loading, navigate, toast]);
  
  if (loading || !isAuthenticated || user?.role !== "admin") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-college-700"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AdminPanel />
    </div>
  );
};

export default AdminPage;
