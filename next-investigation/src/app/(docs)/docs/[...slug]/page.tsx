import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXWrapper } from '@/components/docs/mdx-wrapper';
import { getDocBySlug, getAllDocs } from '@/lib/docs';

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const docs = getAllDocs();
  
  return docs.map((doc) => ({
    slug: doc.slug.split('/').filter(Boolean),
  }));
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || '';
  const doc = getDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Document Not Found',
      description: 'The requested documentation page could not be found.',
    };
  }

  return {
    title: doc.title,
    description: doc.description,
    keywords: doc.tags,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      publishedTime: doc.date,
      tags: doc.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
    },
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug?.join('/') || '';
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Document Header */}
      <header className="mb-8 pb-6 border-b border-border">
        <div className="flex items-center space-x-2 mb-4">
          <span 
            className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
              doc.category === 'Evidence' 
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : doc.category === 'Legal'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : doc.category === 'Technical'
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
            }`}
          >
            {doc.category}
          </span>
          <time className="text-sm text-muted-foreground">
            {new Date(doc.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-foreground">{doc.title}</h1>
        <p className="text-xl text-muted-foreground">{doc.description}</p>
        
        {doc.tags && doc.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {doc.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Document Content */}
      <div className="prose prose-invert max-w-none">
        <MDXWrapper source={doc.content} />
      </div>

      {/* Document Footer */}
      <footer className="mt-12 pt-8 border-t border-border">
        <div className="text-sm text-muted-foreground">
          <p>
            Last updated: {new Date(doc.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <p className="mt-2">
            Category: <span className="text-foreground">{doc.category}</span>
          </p>
          {doc.tags && (
            <p className="mt-1">
              Tags: {doc.tags.map(tag => `#${tag}`).join(', ')}
            </p>
          )}
        </div>
      </footer>
    </article>
  );
}
