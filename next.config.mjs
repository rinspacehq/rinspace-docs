import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const config = {
  basePath: '/docs',
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  turbopack: { root: process.cwd() },
};

export default createMDX()(config);
