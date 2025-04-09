
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeIcon, LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  const [userName] = useState("Admin User"); // In a real app, this would come from auth state
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/5fe04011-cca2-4dac-9956-f12fd85e2bd8.png" 
              alt="Chat-Co Logo" 
              className="h-10 w-10" 
            />
            <span className="ml-2 font-bold text-xl">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Welcome, {userName}</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate("/")}
              className="flex items-center"
            >
              <HomeIcon className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate("/")}
              className="flex items-center text-red-500 hover:text-red-600"
            >
              <LogOutIcon className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-2">152</p>
              <p className="text-sm text-gray-500">Total registered users</p>
              <Button className="mt-4 w-full">Manage Users</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
              <CardDescription>View chat history</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-2">1,204</p>
              <p className="text-sm text-gray-500">Total conversations</p>
              <Button className="mt-4 w-full">View Conversations</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Configure system settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">Update chatbot configuration and system settings</p>
              <Button className="w-full">Open Settings</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="outline">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
