/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.discordapp.com",
				port: "",
				pathname: "/**",
			},
		],
		unoptimized: true,
	},
	swcMinify: false
};

export default nextConfig;