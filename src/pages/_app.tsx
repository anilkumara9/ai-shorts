import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@/app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  // Remove Grammarly or other extensions' attributes on mount
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      const attributesToRemove = Array.from(body.attributes)
        .filter(attr => attr.name.startsWith('data-gr-') || attr.name.startsWith('data-new-gr-'));
      
      attributesToRemove.forEach(attr => body.removeAttribute(attr.name));
    }
  }, []);

  return <Component {...pageProps} />;
} 