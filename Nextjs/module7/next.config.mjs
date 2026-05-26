/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-1554668048-5055c5654bbc**',
      },
      {
        protocol: 'https',
        hostname: 'media.daily.dev',
        port: '',
        pathname: '/image/upload/s--mAplB3Xr--/f_auto/v1755881710/posts/NBiwRP07x?_a=BAMClqZW0',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
