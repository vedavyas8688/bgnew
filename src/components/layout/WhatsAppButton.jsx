import { AppLink, Icon } from '@/components/ui';

export default function WhatsAppButton({ data }) {
  return (
    <section className="whatsapp-fixed-button">
      <div>
        <p className="whatsapp-text">{data.description}</p>
        <AppLink aria-label="Chat with us on WhatsApp" href={data.link} rel="noopener noreferrer" target="_blank">
          <Icon name="MessageCircle" className="whatsapp-ico" />
        </AppLink>
      </div>
    </section>
  );
}
