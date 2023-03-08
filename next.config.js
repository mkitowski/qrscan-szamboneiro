/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/]
})

module.exports = withPWA({
  reactStrictMode: true,
  experimental: {
    reactJss: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.tls = false
      config.resolve.fallback.net = false
      config.resolve.fallback.child_process = false
    }

    return config
  },
  future: {
    webpack5: true
  },
  fallback: {
    fs: false,
    tls: false,
    net: false,
    child_process: false
  }
})
