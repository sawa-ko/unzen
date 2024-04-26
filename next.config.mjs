/** @type {import('next').NextConfig} */
const nextConfig = {
	// Image optimization
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

	// Hotfix
	swcMinify: false,
};

export default nextConfig;