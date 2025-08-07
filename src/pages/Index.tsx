import { HotelHero } from '@/components/HotelHero';
import { HotelSections } from '@/components/HotelSections';
import { ChatWidget } from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="relative">
      <HotelHero />
      <HotelSections />
      
      {/* Chat Widget - Replace webhookUrl with your actual endpoint */}
      <ChatWidget webhookUrl="https://your-backend-api.com/chat/webhook" />
    </div>
  );
};

export default Index;
