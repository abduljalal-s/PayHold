"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function PrivacyPolicyPage() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='border-b border-gray-200 bg-white sticky top-0 z-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-20'>
						<Link href='/' className='text-3xl font-bold tracking-tight'>
							<span className='text-[#0d4d7d]'>Pay</span>
							<span className='text-[#1a7a4a]'>Hold</span>
						</Link>
						<Link href='/'>
							<Button variant='outline' className='border-[#0d4d7d] text-[#0d4d7d] hover:bg-[#0d4d7d] hover:text-white'>
								Back to Home
							</Button>
						</Link>
					</div>
				</div>
			</nav>

			{/* Header */}
			<section className='py-16 bg-gradient-to-br from-blue-50 to-green-50'>
				<div className='container mx-auto px-4 text-center'>
					<h1 className='text-5xl font-bold text-gray-900 mb-4'>Privacy Policy</h1>
					<p className='text-lg text-gray-600'>Last updated: January 30, 2026</p>
				</div>
			</section>

			{/* Content */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
					<div className='prose prose-lg max-w-none'>
						{/* Introduction */}
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-gray-900 mb-4'>Introduction</h2>
							<p className='text-gray-700 leading-relaxed'>
								At PayHold, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our secure intermediary delivery service. Please read this privacy policy carefully.
							</p>
						</div>

						{/* Information We Collect */}
						<div className='mb-12 bg-gray-50 rounded-xl p-8 border-2 border-gray-200'>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>Information We Collect</h2>
							
							<h3 className='text-2xl font-bold text-gray-900 mb-3'>Personal Information</h3>
							<ul className='list-disc list-inside space-y-2 text-gray-700 mb-6'>
								<li>Name, email address, and phone number</li>
								<li>Delivery addresses (pickup and drop-off locations)</li>
								<li>Payment information (processed securely through our partners)</li>
								<li>Government-issued ID for verification purposes</li>
								<li>Bank account details for fund transfers</li>
							</ul>

							<h3 className='text-2xl font-bold text-gray-900 mb-3'>Transaction Information</h3>
							<ul className='list-disc list-inside space-y-2 text-gray-700 mb-6'>
								<li>Item descriptions and photographs</li>
								<li>Transaction amounts and payment history</li>
								<li>Delivery status and tracking data</li>
								<li>Communication between parties</li>
								<li>Dispute records and resolutions</li>
							</ul>

							<h3 className='text-2xl font-bold text-gray-900 mb-3'>Device Information</h3>
							<ul className='list-disc list-inside space-y-2 text-gray-700'>
								<li>IP address and browser type</li>
								<li>Device identifiers and operating system</li>
								<li>GPS location data (for delivery tracking)</li>
								<li>Usage data and analytics</li>
							</ul>
						</div>

						{/* How We Use Your Information */}
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>How We Use Your Information</h2>
							<div className='grid md:grid-cols-2 gap-6'>
								{[
									{
										title: "Service Delivery",
										items: ["Process transactions", "Verify identities", "Coordinate deliveries", "Handle payments"]
									},
									{
										title: "Communication",
										items: ["Send transaction updates", "Provide customer support", "Send important notices", "Marketing (with consent)"]
									},
									{
										title: "Security & Fraud Prevention",
										items: ["Detect suspicious activity", "Prevent fraud", "Protect user accounts", "Comply with legal obligations"]
									},
									{
										title: "Service Improvement",
										items: ["Analyze usage patterns", "Improve user experience", "Develop new features", "Conduct research"]
									}
								].map((section) => (
									<div key={section.title} className='bg-white border-2 border-gray-200 rounded-xl p-6'>
										<h3 className='text-xl font-bold text-gray-900 mb-3'>{section.title}</h3>
										<ul className='space-y-2'>
											{section.items.map((item) => (
												<li key={item} className='flex items-start gap-2'>
													<svg className='w-5 h-5 text-[#1a7a4a] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
														<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
													</svg>
													<span className='text-gray-700'>{item}</span>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>

						{/* Information Sharing */}
						<div className='mb-12 bg-blue-50 rounded-xl p-8 border-2 border-blue-200'>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>Information Sharing</h2>
							<p className='text-gray-700 leading-relaxed mb-4'>
								We do not sell your personal information. We only share your information in the following circumstances:
							</p>
							<ul className='list-disc list-inside space-y-2 text-gray-700'>
								<li><strong>With Transaction Parties:</strong> Basic contact information shared between buyer and seller</li>
								<li><strong>With Couriers:</strong> Delivery addresses and contact info for package delivery</li>
								<li><strong>With Payment Processors:</strong> Secure financial data for payment processing</li>
								<li><strong>With Law Enforcement:</strong> When required by law or to prevent fraud</li>
								<li><strong>With Service Providers:</strong> Third parties who help us operate our service</li>
								<li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
							</ul>
						</div>

						{/* Data Security */}
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>Data Security</h2>
							<p className='text-gray-700 leading-relaxed mb-4'>
								We implement industry-standard security measures to protect your information:
							</p>
							<div className='grid md:grid-cols-3 gap-4'>
								{[
									{ icon: "🔐", title: "Encryption", desc: "SSL/TLS encryption for data in transit" },
									{ icon: "🔒", title: "Secure Storage", desc: "Encrypted databases and secure servers" },
									{ icon: "👁️", title: "Access Control", desc: "Limited employee access to personal data" },
									{ icon: "🛡️", title: "Regular Audits", desc: "Security reviews and penetration testing" },
									{ icon: "⚠️", title: "Monitoring", desc: "24/7 system monitoring for threats" },
									{ icon: "📱", title: "2FA Available", desc: "Two-factor authentication option" }
								].map((item) => (
									<div key={item.title} className='bg-white border-2 border-gray-200 rounded-lg p-4 text-center'>
										<div className='text-3xl mb-2'>{item.icon}</div>
										<h4 className='font-bold text-gray-900 mb-1'>{item.title}</h4>
										<p className='text-sm text-gray-600'>{item.desc}</p>
									</div>
								))}
							</div>
						</div>

						{/* Your Rights */}
						<div className='mb-12 bg-green-50 rounded-xl p-8 border-2 border-green-200'>
							<h2 className='text-3xl font-bold text-gray-900 mb-6'>Your Rights</h2>
							<p className='text-gray-700 leading-relaxed mb-4'>You have the right to:</p>
							<ul className='list-disc list-inside space-y-2 text-gray-700'>
								<li><strong>Access:</strong> Request a copy of your personal data</li>
								<li><strong>Correction:</strong> Update or correct inaccurate information</li>
								<li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
								<li><strong>Data Portability:</strong> Receive your data in a portable format</li>
								<li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
								<li><strong>Withdraw Consent:</strong> Revoke consent for data processing</li>
							</ul>
							<p className='text-gray-700 leading-relaxed mt-4'>
								To exercise these rights, contact us at <a href='mailto:privacy@payhold.ng' className='text-[#0d4d7d] font-semibold'>privacy@payhold.ng</a>
							</p>
						</div>

						{/* Cookies */}
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-gray-900 mb-4'>Cookies & Tracking</h2>
							<p className='text-gray-700 leading-relaxed mb-4'>
								We use cookies and similar technologies to improve your experience, analyze usage, and personalize content. You can control cookie preferences through your browser settings.
							</p>
						</div>

						{/* Data Retention */}
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-gray-900 mb-4'>Data Retention</h2>
							<p className='text-gray-700 leading-relaxed'>
								We retain your personal information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements. Transaction records are kept for 7 years for accounting and legal purposes.
							</p>
						</div>

						{/* Children's Privacy */}
						<div className='mb-12 bg-gray-50 rounded-xl p-8 border-2 border-gray-200'>
							<h2 className='text-3xl font-bold text-gray-900 mb-4'>Children's Privacy</h2>
							<p className='text-gray-700 leading-relaxed'>
								PayHold is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, please contact us immediately.
							</p>
						</div>

						{/* Changes to Policy */}
						<div className='mb-12'>
							<h2 className='text-3xl font-bold text-gray-900 mb-4'>Changes to This Policy</h2>
							<p className='text-gray-700 leading-relaxed'>
								We may update this Privacy Policy periodically. We will notify you of significant changes via email or through a prominent notice on our platform. Continued use of our services after changes constitutes acceptance of the updated policy.
							</p>
						</div>

						{/* Contact */}
						<div className='bg-gradient-to-br from-[#0d4d7d] to-[#1a7a4a] rounded-2xl p-8 text-white text-center'>
							<h2 className='text-3xl font-bold mb-4'>Questions About Privacy?</h2>
							<p className='text-lg mb-6 text-white/90'>
								If you have questions or concerns about our privacy practices, please contact us:
							</p>
							<div className='space-y-2 text-lg'>
								<p><strong>Email:</strong> privacy@payhold.ng</p>
								<p><strong>Phone:</strong> +234 800 000 0000</p>
								<p><strong>Address:</strong> Lagos, Nigeria</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
