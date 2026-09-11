/** @type {import('next').NextConfig} */
const nextConfig = {
  // Preserve old static URLs (e.g. /projects/project-1.html) after the
  // migration to clean Next.js routes.
  async redirects() {
    return [
      {
        source: '/projects/:slug.html',
        destination: '/projects/:slug',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
