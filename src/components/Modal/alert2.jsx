import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Button } from '../ui/button';

export function Alert2({ title, message, onClose, navi }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    onClose();
    navigate(navi);
  };
  return (
    <Alert className="fixed z-50 top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 w-96 z-50">
      <div className="flex items-center justify-start mb-4">
        <Terminal className="h-6 w-6 mr-2 text-gray-500" />
        <AlertTitle className="text-lg font-bold">{title}</AlertTitle>
      </div>
      <AlertDescription className="text-gray-700">{message}</AlertDescription>
      <div className="mt-6 flex justify-end">
        <Button
          onClick={handleOnClick}
          className="px-4 py-2 bg-primary text-white rounded-md shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark">
          확인
        </Button>
      </div>
    </Alert>
  );
}
