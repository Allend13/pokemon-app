/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
            },
        ],
    },
    webpack: (config, context) => {
        if (config.plugins) {
            config.plugins.push(
                new context.webpack.IgnorePlugin({
                    resourceRegExp: /^(lokijs|pino-pretty|encoding)$/,
                }),
            )
        }
        return config
    },
};

export default nextConfig;
