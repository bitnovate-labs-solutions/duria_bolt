"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PartyPopper } from 'lucide-react';

export default function DurianPartyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Durian party enquiry:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', eventDate: '', guestCount: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
                    <PartyPopper className="w-12 h-12 mx-auto mb-2 text-primary" />
        <CardTitle className="text-2xl">Host an Unforgettable Durian Party!</CardTitle>
        <p className="text-gray-600">
          Let us help you create the ultimate durian tasting experience for your guests
        </p>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="bg-green-50 text-green-800 rounded-lg p-4">
              <p className="font-medium">Party enquiry received!</p>
              <p className="text-sm">Our team will contact you within 24 hours to plan your amazing durian party.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                name="eventDate"
                type="date"
                placeholder="Event Date"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              name="guestCount"
              type="number"
              placeholder="Number of Guests"
              value={formData.guestCount}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Tell us about your event (location, preferences, special requirements)"
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" className="w-full">
              <PartyPopper className="w-4 h-4 mr-2" />
              Plan My Durian Party
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}