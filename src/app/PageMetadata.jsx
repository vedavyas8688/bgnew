import { useEffect } from 'react';
export default function PageMetadata({ meta }) {
  useEffect(() => {
    if (!meta) return;
    document.title = meta.title;
    document.querySelectorAll('[data-page-meta]').forEach(element => element.remove());
    for (const data of meta.meta || []) {
      const element = document.createElement('meta');
      for (const [key, value] of Object.entries(data)) element.setAttribute(key, value);
      element.setAttribute('data-page-meta', ''); document.head.append(element);
    }
    if (meta.canonical) {
      const element = document.createElement('link'); element.rel = 'canonical'; element.href = meta.canonical;
      element.setAttribute('data-page-meta', ''); document.head.append(element);
      if (!(meta.meta || []).some(item => item.property === 'og:url')) {
        const openGraphUrl = document.createElement('meta'); openGraphUrl.setAttribute('property', 'og:url'); openGraphUrl.content = meta.canonical;
        openGraphUrl.setAttribute('data-page-meta', ''); document.head.append(openGraphUrl);
      }
    }
    for (const schema of meta.schemas || []) {
      const element = document.createElement('script'); element.type = 'application/ld+json'; element.textContent = JSON.stringify(schema);
      element.setAttribute('data-page-meta', ''); document.head.append(element);
    }
  }, [meta]);
  return null;
}
