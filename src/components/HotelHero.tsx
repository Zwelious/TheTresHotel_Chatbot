import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Phone, Mail } from 'lucide-react';

export const HotelHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="mb-6">
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-chat-accent" />
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Tres Hotel
              <span className="block text-3xl md:text-4xl font-light mt-2 text-chat-accent">
                Sample Website and Chatbot
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Chatbot is pre-trained based on The Tres Hotel's website. Since it's still in early development phase, mistakes may apply.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-chat-accent hover:bg-chat-accent/90 text-primary px-8 py-3 text-lg font-semibold"
            >
              Book Your Stay
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg"
            >
              Explore Amenities
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-chat-accent" />
              <h3 className="font-semibold">Prime Location</h3>
              <p className="text-sm opacity-80">Downtown Financial District</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-chat-accent" />
              <h3 className="font-semibold">24/7 Concierge</h3>
              <p className="text-sm opacity-80">Always at your service</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-chat-accent" />
              <h3 className="font-semibold">Personal Assistant</h3>
              <p className="text-sm opacity-80">Tailored to your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};