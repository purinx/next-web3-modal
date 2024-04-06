/** @type {import('next').NextConfig} */
const nextConfig = {
  // c.f https://github.com/WalletConnect/web3modal/issues/1408
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
};

module.exports = nextConfig;
