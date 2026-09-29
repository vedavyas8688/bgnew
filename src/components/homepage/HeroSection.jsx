import { useEffect, useState } from 'react';
import { AppLink, Icon } from '@/components/ui';

export default function HeroSection({ data }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive(i => (i + 1) % data.slides.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, data.slides.length]);
  const move = delta => setActive(i => (i + delta + data.slides.length) % data.slides.length);
  return <section className="home-hero-section" aria-label="BG Elevators" aria-roledescription="carousel"
    onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false); }}>
    <div className="hero-carousel">
      {data.slides.map((slide, index) => <div className={`hero-slide ${active === index ? 'active' : ''}`} key={slide.image} aria-hidden={active !== index}>
        <div className="container"><div className="w-layout-grid home-hero-grid"><div className="home-hero-grid-left">
          <div className="home-hero-content"><h1 className="h1 primary-700">{slide.title} <span className="white">{slide.highlight}</span></h1><div className="home-hero-desc-wrap"><p className="text-lg hero-desc">{slide.description}</p></div></div>
          <div className="home-hero-btn-group">{slide.links.map((link, i) => <AppLink key={link.href} href={link.href} tabIndex={active === index ? 0 : -1} className={i === 0 ? 'btn-primary m-w-100 w-button' : 'btn-no-bg w-inline-block'}>{link.label}{i !== 0 && <Icon name="ArrowRight" />}</AppLink>)}</div>
        </div><div className="home-hero-grid-right" /></div></div>
        <div className="home-hero-large-image-wrap"><img className="home-hero-large-image" src={slide.image} alt={slide.imageAlt || `${slide.heading || 'Elevator solution'} by BG Elevators`} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} width="575" height="575" /></div>
      </div>)}
    </div>
    <div className="carousel-dots">{data.slides.map((slide, index) => <button type="button" key={slide.image} className={`dot ${active === index ? 'active' : ''}`} aria-label={`Show slide ${index + 1}`} aria-current={active === index} onClick={() => setActive(index)} />)}</div>
    <div className="carousel-arrows"><button type="button" className="left-arrows" aria-label="Previous slide" onClick={() => move(-1)}><Icon name="ChevronLeft" /></button><button type="button" className="right-arrows" aria-label="Next slide" onClick={() => move(1)}><Icon name="ChevronRight" /></button></div>
  </section>;
}
