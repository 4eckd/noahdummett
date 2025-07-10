import { MDXRemote } from 'next-mdx-remote/rsc';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';

interface CodeBlockProps {
  children: string;
  className?: string;
}

function CodeBlock({ children, className }: CodeBlockProps) {
  const language = className?.replace('language-', '') || 'text';
  
  return (
    <SyntaxHighlighter
      style={vscDarkPlus}
      language={language}
      PreTag="div"
      className="rounded-lg my-4"
    >
      {children}
    </SyntaxHighlighter>
  );
}

interface CalloutProps {
  type: 'warning' | 'info' | 'success' | 'error';
  children: React.ReactNode;
}

function Callout({ type, children }: CalloutProps) {
  const configs = {
    warning: {
      icon: AlertTriangle,
      className: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    },
    info: {
      icon: Info,
      className: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    },
    success: {
      icon: CheckCircle,
      className: 'bg-green-500/10 border-green-500/30 text-green-400',
    },
    error: {
      icon: XCircle,
      className: 'bg-red-500/10 border-red-500/30 text-red-400',
    },
  };

  const config = configs[type];
  const Icon = config.icon;

  return (
    <div className={`border rounded-lg p-4 my-4 ${config.className}`}>
      <div className="flex items-start space-x-3">
        <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
        <div>{children}</div>
      </div>
    </div>
  );
}

interface EvidenceBlockProps {
  title: string;
  status: 'verified' | 'pending' | 'disputed';
  children: React.ReactNode;
}

function EvidenceBlock({ title, status, children }: EvidenceBlockProps) {
  const statusConfig = {
    verified: 'bg-green-500/10 border-green-500/30',
    pending: 'bg-yellow-500/10 border-yellow-500/30',
    disputed: 'bg-red-500/10 border-red-500/30',
  };

  return (
    <div className={`border rounded-lg p-6 my-6 ${statusConfig[status]}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
            status === 'verified'
              ? 'bg-green-500/20 text-green-400'
              : status === 'pending'
              ? 'bg-yellow-500/20 text-yellow-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {status}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}

// Custom components for MDX
const components = {
  code: CodeBlock,
  pre: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto">{children}</div>
  ),
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mb-6 text-foreground">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-semibold mb-4 mt-8 text-foreground">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold mb-3 mt-6 text-foreground">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
      {children}
    </ol>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary/30 pl-6 my-6 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 transition-colors underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-border">
        {children}
      </table>
    </div>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border border-border px-4 py-2 bg-muted text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border border-border px-4 py-2 text-muted-foreground">
      {children}
    </td>
  ),
  // Custom components
  Callout,
  EvidenceBlock,
};

interface MDXWrapperProps {
  source: string;
  components?: Record<string, React.ComponentType<Record<string, unknown>>>;
}

export function MDXWrapper({ source, components: customComponents }: MDXWrapperProps) {
  return (
    <MDXRemote
      source={source}
      components={{ ...components, ...customComponents }}
    />
  );
}
