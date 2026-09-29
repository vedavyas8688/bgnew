import { Children, useEffect, useRef, useState } from 'react';
import Icon from './Icon';

/** Native scroll-snap supports touch/trackpad and keyboard, without legacy scripts. */
export default function Carousel({ children, autoPlay = false, interval = 4500, variant = 'default' }) {
  const track = useRef(null);
  const [position, setPosition] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [paused, setPaused] = useState(false);
  const slides = Children.toArray(children).filter(Boolean);

  function metrics() {
    const el = track.current;
    const item = el?.firstElementChild;
    if (!el || !item) return { step: 1, visible: 1, pages: 1 };
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = item.getBoundingClientRect().width + gap;
    const visible = Math.max(1, Math.round((el.clientWidth + gap) / step));
    return { step, visible, pages: Math.max(1, Math.ceil(slides.length / visible)) };
  }

  function goTo(page) {
    const el = track.current;
    if (!el) return;
    const { step, visible, pages } = metrics();
    const nextPage = (page + pages) % pages;
    el.scrollTo({
      left: Math.min(nextPage * visible * step, el.scrollWidth - el.clientWidth),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
    setPosition(nextPage);
  }

  function move(direction) {
    const el = track.current;
    const max = el.scrollWidth - el.clientWidth;
    const next = direction > 0 && el.scrollLeft >= max - 3 ? 0
      : direction < 0 && el.scrollLeft <= 3 ? max
      : el.scrollLeft + direction * (el.firstElementChild?.getBoundingClientRect().width + 24 || el.clientWidth);
    el.scrollTo({ left: next, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  useEffect(() => {
    const update = () => setPageCount(metrics().pages);
    update();
    const observer = new ResizeObserver(update);
    if (track.current) observer.observe(track.current);
    return () => observer.disconnect();
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay || paused || pageCount < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => goTo(position + 1), interval);
    return () => window.clearInterval(timer);
  }, [autoPlay, interval, pageCount, paused, position]);

  return (
    <div className={`react-carousel react-carousel--${variant}`} aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div ref={track} className="react-carousel-track" tabIndex={0} aria-label="Scrollable cards"
        onScroll={() => {
          const { step, visible } = metrics();
          setPosition(Math.round(track.current.scrollLeft / (step * visible)));
        }}>
        {slides.map((slide, index) => <div className="react-carousel-item" key={index}>{slide}</div>)}
      </div>
      {variant === 'testimonials' || variant === 'projects' ? (
        <div className="react-carousel-dots" aria-label={`Choose ${variant} page`}>
          {Array.from({ length: pageCount }, (_, index) => (
            <button type="button" key={index} className={position === index ? 'active' : ''}
              aria-label={`Show ${variant} page ${index + 1}`} aria-current={position === index ? 'true' : undefined}
              onClick={() => goTo(index)} />
          ))}
        </div>
      ) : variant === 'products' ? (
        <div className="react-carousel-side-controls">
          <button type="button" className="carousel-side-control carousel-side-control--previous" aria-label="Previous products" onClick={() => move(-1)}><Icon name="ChevronLeft" /></button>
          <button type="button" className="carousel-side-control carousel-side-control--next" aria-label="Next products" onClick={() => move(1)}><Icon name="ChevronRight" /></button>
        </div>
      ) : (
        <div className="react-carousel-controls">
          <button type="button" className="carousel-control" aria-label="Previous cards" onClick={() => move(-1)}><Icon name="ChevronLeft" /></button>
          <div className="react-carousel-progress" aria-hidden="true"><span style={{ width: `${100 / Math.max(slides.length - 2, 1)}%`, marginLeft: `${Math.min(position / Math.max(slides.length - 2, 1) * 100, 90)}%` }} /></div>
          <button type="button" className="carousel-control" aria-label="Next cards" onClick={() => move(1)}><Icon name="ChevronRight" /></button>
        </div>
      )}
    </div>
  );
}
