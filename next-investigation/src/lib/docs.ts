import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface DocMetadata {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
}

export interface DocContent extends DocMetadata {
  content: string;
  excerpt: string;
}

const docsDirectory = path.join(process.cwd(), 'src/content/docs');

export function getAllDocs(): DocMetadata[] {
  const docs: DocMetadata[] = [];
  
  function readDocsRecursively(dir: string, basePath: string = '') {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        readDocsRecursively(fullPath, path.join(basePath, item));
      } else if (item.endsWith('.mdx')) {
        const slug = path.join(basePath, item.replace('.mdx', ''));
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        docs.push({
          ...data,
          slug,
        } as DocMetadata);
      }
    }
  }
  
  readDocsRecursively(docsDirectory);
  return docs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getDocBySlug(slug: string): DocContent | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const excerpt = content.substring(0, 200) + '...';
    
    return {
      ...data,
      slug,
      content,
      excerpt,
    } as DocContent;
  } catch {
    return null;
  }
}

export function getDocsByCategory(category: string): DocMetadata[] {
  return getAllDocs().filter(doc => doc.category.toLowerCase() === category.toLowerCase());
}

export function getDocsByTag(tag: string): DocMetadata[] {
  return getAllDocs().filter(doc => 
    doc.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getRecentDocs(limit: number = 5): DocMetadata[] {
  return getAllDocs().slice(0, limit);
}

export function searchDocs(query: string): DocMetadata[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllDocs().filter(doc => 
    doc.title.toLowerCase().includes(lowercaseQuery) ||
    doc.description.toLowerCase().includes(lowercaseQuery) ||
    doc.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Helper function to get navigation data for sidebar
export function getDocsNavigation() {
  const docs = getAllDocs();
  const categories = [...new Set(docs.map(doc => doc.category))];
  
  return categories.map(category => ({
    category,
    docs: docs.filter(doc => doc.category === category)
  }));
}
