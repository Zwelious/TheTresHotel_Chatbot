import { HotelHero } from '@/components/HotelHero';
import { HotelSections } from '@/components/HotelSections';
import { ChatWidget } from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="relative">
      <HotelHero />
      <HotelSections />
      
      {/* Chat Widget - Replace webhookUrl with your actual endpoint */}
      <ChatWidget webhookUrl="https://ahanswitono.app.n8n.cloud/webhook-test/3f197b8c-c4dd-4610-ab2c-d4c2f80125e5" />
    </div>
  );
};

export default Index;
