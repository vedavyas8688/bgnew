import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppLink, Icon } from '@/components/ui';
import data from '@/data/navigation.json';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const close = e => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);
  const links = data.links.slice(0, -1);
  const cta = data.links.at(-1);
  return <header className="navbar w-nav">
    <div className="container"><div className="navbar-content">
      <AppLink href="/" className="navabr-brand w-nav-brand" aria-label={data.brand}><div className="nav-logo-wrap"><img className="image navlogo" src={data.logo} width="199.5" alt={data.brand} /></div></AppLink>
      <div className="navabr-right">
        <nav id="primary-navigation" className={`nav-menu w-nav-menu ${open ? 'nav-is-open' : ''}`} aria-label="Main navigation">
          <ul className="nav-list w-list-unstyled">
            {links.map(link => <li className="nav-list-item" key={link.href}><AppLink href={link.href} className={`nav-link ${pathname === link.href || pathname === '/' && link.href === '/index' ? 'w--current' : ''}`} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</AppLink></li>)}
            <li className="nav-list-item hidden-in-desktop"><AppLink href={cta.href} className="btn-primary">{cta.label}<Icon name="ArrowUpRight" /></AppLink></li>
          </ul>
        </nav>
        <div className="navbar-right-inner"><div className="nav-cta-wrap"><AppLink href={cta.href} className="btn-primary">{cta.label}<Icon name="ArrowUpRight" /></AppLink></div>
          <button type="button" className="nav-menu-btn w-nav-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'X' : 'Menu'} size={28} /></button>
        </div>
      </div>
    </div></div>
  </header>;
}
