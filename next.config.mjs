// @ts-check

const SUBDOMAIN_LOCAL = ''
const SUBDOMAIN_TEST = '/fast-forward'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Append the default value with md extensions
  basePath: process.env.NODE_ENV === 'development' ? SUBDOMAIN_LOCAL : SUBDOMAIN_TEST,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
