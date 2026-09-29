import { AppLink, Icon } from '@/components/ui';

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content-wrap">
          <div className="footer-grid">
            <div className="footer-content-col" id="w-node-e13f295f-e30f-5327-12ae-86719bffba73-9bffba6f">
              <AppLink className="footer-brand w-inline-block" href={data.link}>
                <div className="footer-brand-wrap">
                  <img alt={data.imageAlt} className="image" loading="lazy" src={data.image} width="207.5" />
                </div>
              </AppLink>
              <div className="max-w-18-rem">
                <p className="text-md primary-500">{data.description}</p>
              </div>
              <AppLink className="download-Brochure-btn" href={data.link2}>
                <Icon name="Download" className="download-Brochure-icon" />
                {data.label}
              </AppLink>
            </div>
            <div className="footer-links-col">
              <div className="footer-title">{data.text}</div>
              <div className="footer-links-wrap">
                {data.items.map((item, index) => (
                  <AppLink className="footer-link" href={item.link} key={index}>{item.label}</AppLink>
                ))}
              </div>
            </div>
            <div className="footer-content-link-col" id="w-node-e13f295f-e30f-5327-12ae-86719bffba73-9bffba6f">
              <div className="footer-title">{data.text2}</div>
              <div className="footer-links-wrap">
                {data.items2.map((item, index) => (
                  <AppLink className="footer-link" href={item.link} key={index}>{item.label}</AppLink>
                ))}
              </div>
              <div className="footer-title">{data.text3}</div>
              <div className="footer-links-wrap">
                {data.items3.map((item, index) => (
                  <AppLink className="footer-link" href={item.link} target="_blank" rel="noopener noreferrer" key={index}>{item.label}</AppLink>
                ))}
              </div>
            </div>
            <div className="footer-links-col address">
              <div className="footer-title">{data.text4}</div>
              <div className="footer-address-wrap">
                <Icon name="MapPin" />
                <div className="text-base primary-600">{data.text5}</div>
              </div>
              <div className="footer-address-wrap">
                <Icon name="Mail" />
                <div className="text-base primary-600">{data.text6}</div>
              </div>
              <div className="footer-address-wrap">
                <Icon name="Phone" />
                <div>
                  {data.items4.map((item, index) => (
                    <div className="text-base primary-600" key={index}>{item.text}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-grid">
            {data.items5.map((item, index) => (
              <div className="footer-content-link-col" id="w-node-e13f295f-e30f-5327-12ae-86719bffba73-9bffba6f" key={index}>
                <div className="footer-links-wrap">
                  {item.items.map((item, index) => (
                    <AppLink className="footer-link" href={item.link} key={index}>{item.label}</AppLink>
                  ))}
                </div>
              </div>
            ))}
            <div className="footer-content-link-col" id="w-node-e13f295f-e30f-5327-12ae-86719bffba73-9bffba6f">
              <div className="footer-links-wrap">
                {data.items6.map((item, index) => (
                  <AppLink className="footer-link" href={item.link} key={index}>{item.label}</AppLink>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="text-base medium primary-600 footer-icons-data">
              <AppLink href={data.link3} aria-label={data.socialLabels[0]} target="_blank" rel="noopener noreferrer">
                <Icon name="Linkedin" />
              </AppLink>
              <AppLink href={data.link4} aria-label={data.socialLabels[1]} target="_blank" rel="noopener noreferrer">
                <Icon name="Facebook" />
              </AppLink>
              <AppLink href={data.link5} aria-label={data.socialLabels[2]} target="_blank" rel="noopener noreferrer">
                <Icon name="Instagram" />
              </AppLink>
              <AppLink href={data.link6} aria-label={data.socialLabels[3]} target="_blank" rel="noopener noreferrer">
                <Icon name="Twitter" />
              </AppLink>
              <AppLink href={data.link7} aria-label={data.socialLabels[4]} target="_blank" rel="noopener noreferrer">
                <Icon name="Pin" />
              </AppLink>
              <AppLink href={data.link8} aria-label={data.socialLabels[5]} target="_blank" rel="noopener noreferrer">
                <Icon name="Youtube" />
              </AppLink>
              <span>{data.text7}</span>
            </div>
            <div className="text-lg semi-bold primary-600">
              {data.text8}
              <AppLink className="primary-900" href={data.link9} target="_blank" rel="noopener noreferrer">{data.label2}</AppLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
