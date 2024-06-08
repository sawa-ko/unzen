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
	},
	experimental: {
		missingSuspenseWithCSRBailout: false, // we testin stuff so dont panik
	},
};

export default nextConfig;
