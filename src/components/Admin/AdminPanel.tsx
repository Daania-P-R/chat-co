
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Document } from "@/types";
import { getDocuments, uploadDocument } from "@/services/chatService";
import { FileIcon, UploadIcon, FileTextIcon, Trash2Icon } from "lucide-react";
import { format } from "date-fns";
import { Progress } from "@/components/ui/progress";

const AdminPanel = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();
  
  useEffect(() => {
    fetchDocuments();
  }, []);
  
  const fetchDocuments = async () => {
    setIsLoading(true);
    try {
      const docs = await getDocuments();
      setDocuments(docs);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch documents",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 5;
      });
    }, 200);
    
    try {
      const newDoc = await uploadDocument(file);
      setDocuments(prev => [newDoc, ...prev]);
      toast({
        title: "Upload successful",
        description: `${file.name} has been uploaded and indexed.`,
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your document.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(100);
      clearInterval(progressInterval);
      
      // Reset progress after a short delay
      setTimeout(() => {
        setUploadProgress(0);
      }, 1000);
    }
  };
  
  const handleDeleteDocument = (id: string) => {
    // In a real app, this would call an API to delete the document
    setDocuments(prev => prev.filter(doc => doc.id !== id));
    toast({
      title: "Document deleted",
      description: "The document has been removed from the knowledge base.",
    });
  };
  
  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-college-700">Admin Dashboard</h1>
      </div>
      
      <Tabs defaultValue="documents">
        <TabsList className="mb-6">
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Knowledge Base Documents</h2>
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    onChange={handleFileUpload}
                    disabled={isUploading}
                  />
                  <Button className="bg-college-700 hover:bg-college-800">
                    <UploadIcon className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                </div>
              </div>
              
              {uploadProgress > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Uploading document...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
              
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-college-500 rounded-full" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <p className="mt-2 text-gray-500">Loading documents...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="document-card border rounded-lg p-4 bg-white shadow-sm">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <FileTextIcon className="h-8 w-8 text-college-700" />
                          </div>
                          <div className="ml-3">
                            <h3 className="font-medium">{doc.title}</h3>
                            <p className="text-sm text-gray-500">{doc.description}</p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-gray-500 hover:text-red-500"
                          onClick={() => handleDeleteDocument(doc.id)}
                        >
                          <Trash2Icon className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="mt-4 text-xs text-gray-500 flex justify-between items-center">
                        <div>
                          <FileIcon className="h-3 w-3 inline mr-1" />
                          {doc.fileSize} • {doc.fileType}
                        </div>
                        <div>
                          Updated {format(new Date(doc.updatedAt), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {!isLoading && documents.length === 0 && (
                <div className="text-center py-12">
                  <FileIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No documents</h3>
                  <p className="mt-1 text-gray-500">
                    Upload documents to enhance the chatbot's knowledge base.
                  </p>
                  <div className="mt-6">
                    <label
                      htmlFor="file-upload-empty"
                      className="cursor-pointer rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-college-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <span>Upload a document</span>
                      <input
                        id="file-upload-empty"
                        name="file-upload-empty"
                        type="file"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-medium mb-4">Analytics Dashboard</h2>
              <p className="text-gray-500">Analytics features will be implemented in a future version.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-medium mb-4">Chatbot Settings</h2>
              <p className="text-gray-500">Settings features will be implemented in a future version.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
