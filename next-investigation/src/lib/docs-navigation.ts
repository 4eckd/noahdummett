import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { globby } from 'globby';

export interface NavItem {
  title: string;
  href: string;
  category: string;
  order?: number;
  isActive?: boolean;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
  order?: number;
}

export interface DocsNavigation {
  sections: NavSection[];
  flatMap: Map<string, NavItem>;
}

const docsDirectory = path.join(process.cwd(), 'src/content/docs');

/**
 * Auto-generate navigation by reading file tree via globby
 * This function runs server-side only and generates the navigation structure
 */
export async function getDocsNavigation(): Promise<DocsNavigation> {
  const sections = new Map<string, NavSection>();
  const flatMap = new Map<string, NavItem>();

  try {
    // Use globby to find all .mdx files in the docs directory
    const files = await globby(['**/*.mdx'], {
      cwd: docsDirectory,
      absolute: true,
    });

    // Sort files for consistent ordering
    files.sort((a, b) => a.localeCompare(b));

    for (const filePath of files) {
      try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data: frontmatter } = matter(fileContents);

        // Extract slug from file path relative to docs directory
        const relativePath = path.relative(docsDirectory, filePath);
        const slug = relativePath.replace(/\.mdx$/, '');
        const href = `/docs/${slug}`;

        // Create navigation item
        const navItem: NavItem = {
          title: frontmatter.title || formatTitle(path.basename(filePath, '.mdx')),
          href,
          category: frontmatter.category || 'Uncategorized',
          order: frontmatter.order || 999,
        };

        // Add to flat map for quick lookups
        flatMap.set(href, navItem);

        // Group by category
        const categoryKey = navItem.category;
        if (!sections.has(categoryKey)) {
          sections.set(categoryKey, {
            title: categoryKey,
            items: [],
            order: getCategoryOrder(categoryKey),
          });
        }

        sections.get(categoryKey)?.items.push(navItem);
      } catch (error) {
        console.warn(`Error processing doc file: ${filePath}`, error);
      }
    }

    // Sort sections and their items
    const sortedSections = Array.from(sections.values())
      .sort((a, b) => (a.order || 999) - (b.order || 999))
      .map(section => ({
        ...section,
        items: section.items.sort((a, b) => (a.order || 999) - (b.order || 999)),
      }));

    return {
      sections: sortedSections,
      flatMap,
    };
  } catch (error) {
    console.error('Error generating docs navigation:', error);
    return {
      sections: [],
      flatMap: new Map(),
    };
  }
}

/**
 * Get category order for consistent navigation structure
 */
function getCategoryOrder(category: string): number {
  const orderMap: Record<string, number> = {
    'Getting Started': 1,
    'Evidence': 2,
    'Legal': 3,
    'Technical': 4,
    'Timeline': 5,
    'Contributing': 6,
    'Reference': 7,
    'Uncategorized': 999,
  };

  return orderMap[category] || 500;
}

/**
 * Format title from filename
 */
function formatTitle(filename: string): string {
  return filename
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get navigation item by href
 */
export async function getNavItemByHref(href: string): Promise<NavItem | null> {
  const navigation = await getDocsNavigation();
  return navigation.flatMap.get(href) || null;
}

/**
 * Get navigation items by category
 */
export async function getNavItemsByCategory(category: string): Promise<NavItem[]> {
  const navigation = await getDocsNavigation();
  const section = navigation.sections.find(s => s.title === category);
  return section?.items || [];
}

/**
 * Get breadcrumb navigation for a given href
 */
export async function getBreadcrumbs(href: string): Promise<NavItem[]> {
  const navigation = await getDocsNavigation();
  const item = navigation.flatMap.get(href);
  
  if (!item) return [];

  const breadcrumbs: NavItem[] = [
    {
      title: 'Documentation',
      href: '/docs',
      category: 'root',
    },
  ];

  // Add category if not root
  if (item.category !== 'root') {
    breadcrumbs.push({
      title: item.category,
      href: `/docs/${item.category.toLowerCase().replace(/\s+/g, '-')}`,
      category: item.category,
    });
  }

  // Add current page
  breadcrumbs.push(item);

  return breadcrumbs;
}

/**
 * Get next/previous navigation items
 */
export async function getAdjacentNavItems(href: string): Promise<{
  prev: NavItem | null;
  next: NavItem | null;
}> {
  const navigation = await getDocsNavigation();
  const allItems = navigation.sections.flatMap(section => section.items);
  const currentIndex = allItems.findIndex(item => item.href === href);

  return {
    prev: currentIndex > 0 ? allItems[currentIndex - 1] : null,
    next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null,
  };
}

/**
 * Search navigation items
 */
export async function searchNavigation(query: string): Promise<NavItem[]> {
  const navigation = await getDocsNavigation();
  const allItems = navigation.sections.flatMap(section => section.items);
  const lowercaseQuery = query.toLowerCase();

  return allItems.filter(item =>
    item.title.toLowerCase().includes(lowercaseQuery) ||
    item.category.toLowerCase().includes(lowercaseQuery)
  );
}
