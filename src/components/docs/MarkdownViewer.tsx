import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileText, ExternalLink, Download } from 'lucide-react';

interface MarkdownViewerProps {
  basePath: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ basePath }) => {
  const { filename } = useParams<{ filename: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Construct the file path
        let filePath = basePath;
        if (filename) {
          // Add .md extension if not present
          const fileWithExt = filename.endsWith('.md') ? filename : `${filename}.md`;
          filePath = `${basePath}/${fileWithExt}`;
        } else {
          filePath = `${basePath}/index.md`;
        }

        // Try to fetch the markdown file
        const response = await fetch(filePath);
        if (!response.ok) {
          // Try with .html extension
          const htmlPath = filePath.replace('.md', '.html');
          const htmlResponse = await fetch(htmlPath);
          if (htmlResponse.ok) {
            const htmlContent = await htmlResponse.text();
            setContent(htmlContent);
            setLoading(false);
            return;
          }
          throw new Error(`File not found: ${filePath}`);
        }
        
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [basePath, filename]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-foreground mb-2">Content Not Found</h2>
        <p className="text-muted-foreground mb-4">{error}</p>
        <a 
          href="https://noahdummett.com" 
          className="inline-flex items-center space-x-2 text-primary hover:underline"
        >
          <span>Return to Main Site</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  // Check if content is HTML
  const isHtml = content.includes('<!DOCTYPE html>') || content.includes('<html');

  if (isHtml) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">
            {filename ? filename.replace(/\.(md|html)$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Documentation'}
          </h1>
          <div className="flex items-center space-x-2">
            <a 
              href={`${basePath}/${filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>
        
        <div className="border border-border rounded-lg overflow-hidden">
          <iframe 
            srcDoc={content}
            className="w-full h-screen border-0"
            title={filename || 'Documentation'}
          />
        </div>
      </div>
    );
  }

  // Render markdown content
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          {filename ? filename.replace(/\.(md|html)$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Documentation'}
        </h1>
        <div className="flex items-center space-x-2">
          <a 
            href={`${basePath}/${filename}`}
            download
            className="inline-flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </a>
          <a 
            href={`${basePath}/${filename}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Raw File</span>
          </a>
        </div>
      </div>
      
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <pre className="whitespace-pre-wrap bg-card border border-border rounded-lg p-6 text-sm">
          {content}
        </pre>
      </div>
    </div>
  );
};

export default MarkdownViewer;
