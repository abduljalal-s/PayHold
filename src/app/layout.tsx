import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "PayHold - Payment secured. Goods delivered.",
	description:
		"Nigeria's trusted escrow platform for secure online transactions. Buy and sell with confidence.",
	keywords: [
		"escrow",
		"Nigeria",
		"secure payment",
		"online delivery",
		"buyer protection",
		"seller protection",
	],
	authors: [{ name: "PayHold" }],
	creator: "PayHold",
	publisher: "PayHold",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_NG",
		url: "https://payhold.it.com",
		title: "PayHold - Payment secured. Goods delivered.",
		description: "Nigeria's trusted escrow platform",
		siteName: "PayHold",
	},
	twitter: {
		card: "summary_large_image",
		title: "EscrowNG - Payment secured. Goods delivered.",
		description: "Nigeria's trusted escrow platform",
	},
};

// Separate viewport export (this is the fix!)
export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	themeColor: "#22c55e",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
