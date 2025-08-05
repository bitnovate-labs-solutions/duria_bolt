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
            <div className="bg-primary text-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated with Duria</h2>
        <p className="text-xl mb-10 text-white/90 leading-relaxed">
          Get the latest news about our premium durian products, seasonal availability, and special offers.
        </p>
        
        {isSubmitted ? (
          <div className="bg-white/20 rounded-lg p-4 max-w-md mx-auto">
            <p className="font-medium text-white">Thank you for subscribing!</p>
            <p className="text-sm text-white/90">We'll keep you updated with our latest news.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-gray-900 placeholder-gray-500 rounded-xl py-3 px-4 text-lg"
              />
              <Button type="submit" size="default" className="bg-black text-white hover:bg-black/90 px-8 py-3 text-lg font-semibold rounded-xl">
                Subscribe
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}