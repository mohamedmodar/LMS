import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Predefined responses for common questions
const FAQ_RESPONSES: { [key: string]: string } = {
  'hello': 'Hello! How can I help you today?',
  'hi': 'Hi there! How can I assist you?',
  'help': 'I can help you with:\n- Course information\n- Technical support\n- Account issues\n- General questions\nWhat would you like to know?',
  'courses': 'We offer various courses in different categories. You can browse them in the "Courses" section. Would you like me to show you some popular courses?',
  'pricing': 'Our pricing varies by course. Most courses range from $29 to $199. Would you like to know about specific course pricing?',
  'contact': 'You can reach our support team at support@lms.com or use the contact form on our website.',
  'payment': 'We accept all major credit cards, PayPal, and bank transfers. Is there a specific payment method you\'d like to know about?',
  'certificate': 'Yes, you\'ll receive a certificate upon successful completion of any course. The certificate is digital and can be downloaded from your dashboard.',
};

// Welcome message when chat is opened
const WELCOME_MESSAGE = "👋 Hi! I'm your learning assistant. How can I help you today? You can ask me about:\n- Course information\n- Technical support\n- Account issues\n- General questions";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Add welcome message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        text: WELCOME_MESSAGE,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Check for exact matches in FAQ
    if (FAQ_RESPONSES[lowerMessage]) {
      return FAQ_RESPONSES[lowerMessage];
    }

    // Check for partial matches
    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Default responses for unrecognized queries
    const defaultResponses = [
      "I'm not sure I understand. Could you please rephrase your question?",
      "I'm still learning about that topic. Could you try asking something else?",
      "That's an interesting question. Let me connect you with our support team for a detailed answer.",
      "I don't have enough information about that. Would you like to know about our courses instead?",
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response with typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        text: getAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="gradient-bg text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-white dark:bg-[hsl(222.2,84%,4.9%)] rounded-lg shadow-xl w-96 h-[500px] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center gradient-bg text-white rounded-t-lg">
            <h3 className="font-semibold text-lg">Learning Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                <div className="flex flex-col max-w-[80%]">
                  <div
                    className={`rounded-lg p-3 ${
                      message.isUser
                        ? 'gradient-bg text-white'
                        : 'bg-[hsl(260,60%,92%)] dark:bg-[hsl(260,60%,30%)] text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                  <span className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${
                    message.isUser ? 'text-right' : 'text-left'
                  }`}>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[hsl(260,60%,92%)] dark:bg-[hsl(260,60%,30%)] rounded-lg p-3 flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 animate-spin text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-[hsl(222.2,84%,4.9%)] text-gray-800 dark:text-gray-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="gradient-bg text-white rounded-lg px-4 py-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 