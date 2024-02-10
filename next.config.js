/** @type {import('next').NextConfig} */
 
module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ['resend.dev', '*.resend.dev'],
    },
  },
}
;

module.exports = nextConfig;