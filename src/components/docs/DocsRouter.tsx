import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DocsLayout } from './DocsLayout';
import { DocsHome } from './DocsHome';
import { EvidenceIndex } from './EvidenceIndex';
import { InvestigationIndex } from './InvestigationIndex';
import { LegalIndex } from './LegalIndex';
import { ProjectIndex } from './ProjectIndex';
import { TechnicalIndex } from './TechnicalIndex';
import { MarkdownViewer } from './MarkdownViewer';

export const DocsRouter: React.FC = () => {
  const [isDocsSubdomain, setIsDocsSubdomain] = useState(false);

  useEffect(() => {
    // Check if we're on docs subdomain
    const hostname = window.location.hostname;
    const isDocsDomain = hostname.startsWith('docs.') || hostname === 'docs.noahdummett.com';
    setIsDocsSubdomain(isDocsDomain);
  }, []);

  if (!isDocsSubdomain) {
    return null;
  }

  return (
    <Routes>
      <Route path="/" element={<DocsLayout />}>
        <Route index element={<DocsHome />} />
        
        {/* Evidence Routes */}
        <Route path="evidence" element={<EvidenceIndex />} />
        <Route path="evidence/:filename" element={<MarkdownViewer basePath="/docs/evidence" />} />
        
        {/* Investigation Routes */}
        <Route path="investigation" element={<InvestigationIndex />} />
        <Route path="investigation/:filename" element={<MarkdownViewer basePath="/docs/investigation" />} />
        
        {/* Legal Routes */}
        <Route path="legal" element={<LegalIndex />} />
        <Route path="legal/:filename" element={<MarkdownViewer basePath="/docs/legal" />} />
        
        {/* Project Routes */}
        <Route path="project" element={<ProjectIndex />} />
        <Route path="project/:filename" element={<MarkdownViewer basePath="/docs/project" />} />
        
        {/* Technical Routes */}
        <Route path="technical" element={<TechnicalIndex />} />
        <Route path="technical/:filename" element={<MarkdownViewer basePath="/docs/technical" />} />
        
        {/* Direct file access */}
        <Route path="*" element={<MarkdownViewer basePath="/docs" />} />
      </Route>
    </Routes>
  );
};

export default DocsRouter;
