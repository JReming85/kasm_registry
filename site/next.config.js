/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'JRems Kasm Registry',
    description: 'Repo for my kasm images',
    icon: 'https://jreming85.github.io/kasm_registry/1.0/img/logo.svg',
    listUrl: 'https://jreming85.github.io/kasm_registry/',
    contactUrl: 'https://github.com/JReming85/kasm_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
