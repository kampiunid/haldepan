/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '**' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com', pathname: '**' },
      // Tambahkan pola lain jika diperlukan
    ],
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true, // Mengaktifkan Strict Mode untuk React
  swcMinify: true,       // Mengaktifkan minifier SWC
  // ... tambahkan konfigurasi lain yang Anda butuhkan
}

module.exports = nextConfig
