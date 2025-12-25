/** @type {import('next').NextConfig} */
module.exports = {
    // Use webpack instead of turbopack (required for Velite plugin)
    turbopack: {},
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production' ? true : false,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '5065',
          pathname: '/images/**',
        },
        {
          protocol: 'https',
          hostname: 'acushnet.scene7.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'worldwidegolf.vtexassets.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    webpack: config => {
      config.plugins.push(new VeliteWebpackPlugin())
      return config
    }
  }
  
  class VeliteWebpackPlugin {
    static started = false
    apply(/** @type {import('webpack').Compiler} */ compiler) {
      // executed three times in nextjs
      // twice for the server (nodejs / edge runtime) and once for the client
      compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
        if (VeliteWebpackPlugin.started) return
        VeliteWebpackPlugin.started = true
        const dev = compiler.options.mode === 'development'
        const { build } = await import('velite')
        await build({ watch: dev, clean: !dev })
      })
    }
  }