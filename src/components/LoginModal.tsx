
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import { trackPageView } from '@snowplow/browser-tracker';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    onClose();
  };

  React.useEffect(() => {
    if (isOpen) {
      trackPageView({
        context: [{
          schema: 'iglu:com.snplow.sales.aws/horse_race_screen/jsonschema/1-2-0',
          data: {
            screen: "LOGIN"
          }
        }]
      });
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login to Gallop & Gamble</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value="johnsmith@gmail.com"
              readOnly
              className="w-full p-2 border rounded bg-gray-50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              value="********"
              readOnly
              className="w-full p-2 border rounded bg-gray-50"
            />
          </div>
          <Button 
            className="w-full bg-racing-green hover:bg-racing-green/90" 
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
