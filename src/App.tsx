
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Layout } from '@/components/layout/Layout';
import CookieConsent from '@/components/ui/CookieConsent';
import { Home, About, Contact, ThemeDemo, NotFound } from '@/pages';
import NoahDummett from '@/pages/NoahDummett';
import Legal from '@/pages/Legal';
import CookiePolicy from '@/pages/CookiePolicy';
import FAQ from '@/pages/FAQ';

function App() {
  return (
    <ThemeProvider>
      <Router>
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
        <CookieConsent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
