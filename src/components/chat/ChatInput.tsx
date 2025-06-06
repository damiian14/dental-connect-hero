
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import React from 'react';

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSendMessage: () => void;
  isLoading: boolean;
  handleKeyPress: (e: React.KeyboardEvent) => void;
}

export const ChatInput = ({ 
  inputValue, 
  setInputValue, 
  handleSendMessage, 
  isLoading, 
  handleKeyPress 
}: ChatInputProps) => {
  return (
    <div className="p-4 border-t border-gray-100 flex gap-2">
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Escribe tu pregunta..." 
        className="input-field text-sm flex-1 py-2" 
        disabled={isLoading}
      />
      <Button 
        size="sm" 
        className="py-2"
        onClick={handleSendMessage}
        disabled={isLoading}
      >
        {isLoading ? 
          <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div> :
          <Send size={16} />
        }
      </Button>
    </div>
  );
};
