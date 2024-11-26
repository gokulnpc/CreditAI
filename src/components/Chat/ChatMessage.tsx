import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.type === 'assistant';
  
  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[80%] ${isAssistant ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 ${isAssistant ? 'mr-3' : 'ml-3'}`}>
          {isAssistant ? (
            <Bot className="h-8 w-8 p-1 bg-blue-100 text-blue-600 rounded-lg" />
          ) : (
            <User className="h-8 w-8 p-1 bg-gray-100 text-gray-600 rounded-lg" />
          )}
        </div>
        <div>
          <div
            className={`rounded-lg px-4 py-2 ${
              isAssistant
                ? 'bg-gray-100 text-gray-900'
                : 'bg-blue-600 text-white'
            }`}
          >
            <p className="text-sm">{message.content}</p>
          </div>
          <span className="text-xs text-gray-500 mt-1 block">
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;