/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'instagram.fasu11-1.fna.fbcdn.net',
      'www.instagram.com',
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
