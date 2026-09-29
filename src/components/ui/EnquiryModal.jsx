import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { useLocation } from 'react-router-dom';

const EnquiryContext = createContext(null);
export function EnquiryProvider({ children }) {
  const [open, setOpen] = useState(false);
  return <EnquiryContext.Provider value={{ open, setOpen }}>{children}</EnquiryContext.Provider>;
}
export function ContactTrigger({ children, ...props }) {
  const context = useContext(EnquiryContext);
  return <button type="button" {...props} onClick={() => context.setOpen(true)}>{children}</button>;
}
export default function EnquiryModal({ children }) {
  const { open, setOpen } = useContext(EnquiryContext);
  const dialog = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== '/' && pathname !== '/index') return;
    const timer = window.setTimeout(() => setOpen(true), 10000);
    return () => window.clearTimeout(timer);
  }, [pathname, setOpen]);
  useEffect(() => {
    const element = dialog.current;
    if (open) { element.showModal(); document.body.style.overflow = 'hidden'; }
    else if (element.open) element.close();
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return (
    <dialog ref={dialog} className="enquiry-dialog" aria-label="Get in touch" onCancel={() => setOpen(false)} onClose={() => setOpen(false)}
      onClick={e => { if (e.target === dialog.current) setOpen(false); }}>
      <div className="modal-content">
        <button type="button" className="modal-close" aria-label="Close enquiry" onClick={() => setOpen(false)}><Icon name="X" /></button>
        {children}
      </div>
    </dialog>
  );
}
