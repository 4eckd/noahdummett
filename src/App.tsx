
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Layout } from '@/components/layout/Layout';
import { GDPRBanner } from '@/components/ui/GDPRBanner';
import { Home, About, Contact, ThemeDemo, NotFound } from '@/pages';
import NoahDummett from '@/pages/NoahDummett';
import Legal from '@/pages/Legal';
import CookiePolicy from '@/pages/CookiePolicy';
import FAQ from '@/pages/FAQ';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Cookies from '@/pages/Cookies';
import GDPR from '@/pages/GDPR';
import Blog from '@/pages/Blog';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import API from '@/pages/API';
import EvidenceOverview from '@/pages/EvidenceOverview';
import TrustpilotEvidence from '@/pages/TrustpilotEvidence';
import RedditEvidence from '@/pages/RedditEvidence';
import CasinoGuruEvidence from '@/pages/CasinoGuruEvidence';
import PlatformManipulation from '@/pages/PlatformManipulation';
import DocsRedirect from '@/pages/DocsRedirect';

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
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="gdpr" element={<GDPR />} />
            <Route path="blog" element={<Blog />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="api" element={<API />} />
            <Route path="themes" element={<ThemeDemo />} />

            {/* Evidence Routes */}
            <Route path="evidence" element={<EvidenceOverview />} />
            <Route path="evidence/trustpilot" element={<TrustpilotEvidence />} />
            <Route path="evidence/reddit" element={<RedditEvidence />} />
            <Route path="evidence/casino-guru" element={<CasinoGuruEvidence />} />
            <Route path="platform-manipulation" element={<PlatformManipulation />} />

            {/* Documentation Route */}
            <Route path="docs" element={<DocsRedirect />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <GDPRBanner />
      </Router>
    </ThemeProvider>
  );
}

export default App;
