import type { MDXComponents } from 'mdx/types'
import { MDXWrapper } from './src/components/docs/mdx-wrapper'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }) => <MDXWrapper source={children as string} />,
  }
}
