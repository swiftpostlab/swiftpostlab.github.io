// @ts-check
import mdx from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @typedef {NonNullable<Parameters<typeof mdx>[0]>} NextMDXOptions */
/** @typedef {NonNullable<NextMDXOptions['options']>['remarkPlugins']} PluggableList */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

/** @type {PluggableList} */
export const remarkPlugins = [
  remarkGfm,
]

/** @type {PluggableList} */
export const rehypePlugins = []
 

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    rehypePlugins,
    // For using `MDXProvider`.
    providerImportSource: "@mdx-js/react",
  },
})

export default withMDX(nextConfig)
