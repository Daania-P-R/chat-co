
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center mb-8 text-black hover:underline">
            &larr; Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold mb-8 text-black">College Chatbot Privacy Policy</h1>
          
          <section className="prose prose-black max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Introduction:</h2>
            <p className="mb-6">
              This privacy policy explains how College Chatbot ("Chat-Co") collects, uses, and protects your personal data. 
              By using Chat-Co, you agree to this privacy policy.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">What Information Do We Collect?:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">User Input: We collect information you provide to us through the chatbot, such as your name, email address, and messages.</li>
              <li className="mb-2">Conversation History: We store your conversation history with the chatbot to improve our services.</li>
              <li className="mb-2">Device Information: We collect device information, such as your IP address, browser type, and operating system.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">How Do We Use Your Information?:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Provide Services: We use your information to provide our chatbot services, including responding to your queries and providing support.</li>
              <li className="mb-2">Improve Services: We use your information to improve our chatbot services, including analyzing conversation history and user feedback.</li>
              <li className="mb-2">Communicate with You: We use your information to communicate with you, including sending updates and notifications.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">How Do We Protect Your Information?:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Data Encryption: We encrypt your data to protect it from unauthorized access.</li>
              <li className="mb-2">Secure Storage: We store your data in secure servers that are protected by firewalls and intrusion detection systems.</li>
              <li className="mb-2">Access Control: We limit access to your data to authorized personnel only.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Your Rights:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Access: You have the right to access your personal data.</li>
              <li className="mb-2">Correction: You have the right to correct any inaccuracies in your personal data.</li>
              <li className="mb-2">Deletion: You have the right to delete your personal data.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy:</h2>
            <p className="mb-6">
              We may update this policy from time to time. We will notify you of any changes by posting a new version of this policy on our website.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Contact Us:</h2>
            <p className="mb-6 flex items-center">
              If you have any questions or concerns about this policy, please contact us at 
              <a href="tel:7559999824" className="flex items-center ml-2 text-black hover:underline">
                <Phone className="h-4 w-4 mr-1" />
                +91 75599 99824
              </a>
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Effective Date:</h2>
            <p className="mb-6">
              This policy is effective as of 08-04-2003
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Acceptance:</h2>
            <p className="mb-6">
              By using Chat-Co, you accept the terms of this privacy policy.
            </p>
          </section>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/chat" className="hover:opacity-80 transition-opacity">
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
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
