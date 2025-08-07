import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Car, Utensils, Dumbbell, Wine, Shield } from 'lucide-react';

export const HotelSections: React.FC = () => {
  const amenities = [
    { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the hotel' },
    { icon: Car, title: 'Valet Parking', description: 'Complimentary valet parking service' },
    { icon: Utensils, title: 'Fine Dining', description: 'Award-winning restaurants and bars' },
    { icon: Dumbbell, title: 'Fitness Center', description: '24/7 state-of-the-art gym facilities' },
    { icon: Wine, title: 'Rooftop Bar', description: 'Panoramic city views with craft cocktails' },
    { icon: Shield, title: 'Concierge', description: 'Personal concierge service' },
  ];

  const rooms = [
    {
      title: 'Deluxe Room',
      price: '$299',
      features: ['City View', 'King Bed', 'Marble Bathroom', 'Minibar']
    },
    {
      title: 'Executive Suite',
      price: '$599',
      features: ['Panoramic View', 'Separate Living Room', 'Butler Service', 'Premium Amenities']
    },
    {
      title: 'Presidential Suite',
      price: '$1,299',
      features: ['Private Terrace', 'Personal Chef', 'Limousine Service', 'Exclusive Access']
    }
  ];

  return (
    <div className="bg-background">
      {/* Amenities Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every detail crafted to provide you with an unforgettable experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <amenity.icon className="w-12 h-12 text-chat-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Luxurious Accommodations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully designed rooms and suites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-hero"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold">{room.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-chat-accent">{room.price}</div>
                      <div className="text-sm text-muted-foreground">per night</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-chat-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-primary hover:bg-chat-primary-hover">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our reservations team or use our live chat for instant assistance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-chat-primary-hover px-8 py-3 text-lg">
              Call (555) 123-4567
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Send Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};