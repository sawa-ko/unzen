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

	// Next.js compiler stuff
	compiler: {
		removeConsole: process.env.NODE_ENV === "production"
	}
};

export default nextConfig;