import React, {  FormEvent, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MessageSquare, Send, X, Bot } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 1,
      text: "Halo! Ada yang bisa saya bantu tentang perusahaan kami?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
       const response = await fetch(`${import.meta.env.VITE_API_URL}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.answer,
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Maaf, terjadi kesalahan. Silakan coba lagi nanti.",
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="fixed bottom-10 right-8 z-50 flex flex-col items-end">
      <div
        className={`bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg shadow-lg w-80 md:w-96 flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ height: '70vh', maxHeight: '500px' }}
      >
        {/* Header */}
        <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-slate-800 dark:text-slate-200" />
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">AI Assistant</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleChat}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-50"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-50 px-4 py-2 rounded-lg">
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-slate-300 dark:border-slate-700">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Ketik pertanyaan Anda..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>

      <Button
        className={`rounded-full w-16 h-16 shadow-lg mt-4 flex items-center justify-center transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
        onClick={toggleChat}
      >
        <MessageSquare className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default Chatbot;