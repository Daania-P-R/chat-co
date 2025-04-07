
import { ChatMessage } from "@/types";
import { v4 as uuidv4 } from "uuid";

// This is a mock service for the RAG-based chatbot
// In a real implementation, this would connect to a backend API

// Demo knowledge base (this would be retrieved from vector DB in real implementation)
const knowledgeBase = [
  {
    question: "what are the college hours",
    answer: "The college is open from 8:00 AM to 10:00 PM on weekdays, and 9:00 AM to 5:00 PM on weekends."
  },
  {
    question: "how do I register for classes",
    answer: "To register for classes, log in to the student portal, navigate to 'Course Registration', select your desired courses, and click 'Submit'. Registration deadlines are typically 2 weeks before the semester starts."
  },
  {
    question: "when is the next semester",
    answer: "The Fall semester begins September 1st. The Spring semester begins January 15th. Summer sessions vary, please check the academic calendar for specific dates."
  },
  {
    question: "library",
    answer: "The college library is located in the Thompson Building. It's open daily from 7:00 AM to midnight. You can borrow books for up to 3 weeks with your student ID card."
  },
  {
    question: "financial aid",
    answer: "For financial aid inquiries, please visit the Financial Aid Office in the Administration Building, Room 203. You can also email financial.aid@college.edu or call (555) 123-4567."
  },
  {
    question: "parking",
    answer: "Student parking is available in Lots A, B, and C with a valid parking permit. Permits cost $75 per semester and can be purchased through the campus security office or online through your student portal."
  }
];

export const sendMessage = async (message: string): Promise<ChatMessage> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simple retrieval logic - in a real app, this would use embeddings and a vector database
  const lowerCaseMessage = message.toLowerCase();
  const matchedKnowledge = knowledgeBase.find(item => 
    lowerCaseMessage.includes(item.question) || 
    item.question.split(" ").some(word => lowerCaseMessage.includes(word))
  );

  let response: string;
  
  if (matchedKnowledge) {
    response = matchedKnowledge.answer;
  } else {
    response = "I'm sorry, I don't have information about that yet. Please contact the college office for assistance or try asking another question.";
  }

  return {
    id: uuidv4(),
    content: response,
    role: "assistant",
    timestamp: new Date()
  };
};

// Mock document management functions
export const getDocuments = async (): Promise<any[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return [
    {
      id: "1",
      title: "Student Handbook 2025",
      description: "Complete guide to student policies and procedures",
      createdAt: new Date("2025-01-15"),
      updatedAt: new Date("2025-01-15"),
      fileSize: "2.4 MB",
      fileType: "PDF"
    },
    {
      id: "2",
      title: "Course Catalog Fall 2025",
      description: "List of all courses offered in the Fall 2025 semester",
      createdAt: new Date("2025-03-10"),
      updatedAt: new Date("2025-03-20"),
      fileSize: "5.1 MB",
      fileType: "PDF"
    },
    {
      id: "3",
      title: "Campus Map",
      description: "Interactive map of the college campus",
      createdAt: new Date("2024-12-05"),
      updatedAt: new Date("2025-02-15"),
      fileSize: "1.8 MB",
      fileType: "SVG"
    }
  ];
};

export const uploadDocument = async (file: File): Promise<any> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  // Mock response - in a real app, this would process and store the file
  return {
    id: uuidv4(),
    title: file.name,
    description: "Uploaded document",
    createdAt: new Date(),
    updatedAt: new Date(),
    fileSize: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
    fileType: file.type.split('/')[1].toUpperCase()
  };
};
