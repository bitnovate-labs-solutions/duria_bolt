"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Duria</h2>
                  <p className="text-lg mb-8 text-primary-foreground/90">
          Get the latest news about our premium durian products, seasonal availability, and special offers.
        </p>
        
        {isSubmitted ? (
          <div className="bg-white/20 rounded-lg p-4 max-w-md mx-auto">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm text-primary-foreground/90">We'll keep you updated with our latest news.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-gray-900 placeholder-gray-500"
              />
              <Button type="submit" variant="secondary" size="default">
                Subscribe
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}