/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  