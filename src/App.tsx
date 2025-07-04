
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Layout } from '@/components/layout/Layout';
import { GDPRBanner } from '@/components/ui/GDPRBanner';
import { Home, About, Contact, ThemeDemo, NotFound } from '@/pages';
import NoahDummett from '@/pages/NoahDummett';
import Legal from '@/pages/Legal';
import CookiePolicy from '@/pages/CookiePolicy';
import FAQ from '@/pages/FAQ';
import { DocsRouter } from '@/components/docs/DocsRouter';

function App() {
  const [isDocsSubdomain, setIsDocsSubdomain] = useState(false);

  useEffect(() => {
    // Check if we're on docs subdomain
    const hostname = window.location.hostname;
    const isDocsDomain = hostname.startsWith('docs.') || hostname === 'docs.noahdummett.com';
    setIsDocsSubdomain(isDocsDomain);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {isDocsSubdomain ? (
          <DocsRouter />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="noah-dummett" element={<NoahDummett />} />
                <Route path="about" element={<About />} />
                <Route path="legal" element={<Legal />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="cookie-policy" element={<CookiePolicy />} />
                <Route path="themes" element={<ThemeDemo />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            <GDPRBanner />
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
