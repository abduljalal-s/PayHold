"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
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
			<section className='relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden'>
				<div className='absolute inset-0'>
					<div className='absolute top-20 left-10 w-72 h-72 bg-[#0d4d7d]/5 rounded-full blur-3xl animate-pulse'></div>
					<div className='absolute bottom-20 right-10 w-96 h-96 bg-[#1a7a4a]/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
				</div>
				
				<div className='container mx-auto px-4 text-center relative z-10'>
					<h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
						About <span className='text-[#0d4d7d]'>Pay</span><span className='text-[#1a7a4a]'>Hold</span>
					</h1>
					<p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						Building trust in every local transaction. Making peer-to-peer commerce safe, secure, and stress-free for everyone.
					</p>
				</div>
			</section>

			{/* Our Story */}
			<section className='py-20 md:py-28'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
					<h2 className='text-4xl font-bold text-gray-900 mb-8 text-center'>Our Story</h2>
					<div className='prose prose-lg max-w-none'>
						<p className='text-xl text-gray-700 leading-relaxed mb-6'>
							PayHold was born from a simple frustration: the constant fear of getting scammed when buying or selling locally. We've all heard the stories — "I sent the money but never got the item" or "They claimed they didn't receive it after I shipped."
						</p>
						<p className='text-xl text-gray-700 leading-relaxed mb-6'>
							In 2024, our founders experienced this firsthand. After several failed transactions and countless hours dealing with disputes, they realized Nigeria needed a solution — a trusted intermediary that would hold payments and verify deliveries.
						</p>
						<p className='text-xl text-gray-700 leading-relaxed'>
							Today, PayHold protects thousands of transactions monthly, ensuring buyers get what they paid for and sellers receive their payments. We're building the infrastructure for trust in local commerce.
						</p>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className='py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
					<div className='grid md:grid-cols-2 gap-12'>
						<div className='bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-[#0d4d7d]/30 hover:shadow-2xl transition-all duration-300'>
							<div className='text-5xl mb-6'>🎯</div>
							<h3 className='text-3xl font-bold text-gray-900 mb-4'>Our Mission</h3>
							<p className='text-lg text-gray-700 leading-relaxed'>
								To eliminate fraud in local peer-to-peer transactions by providing a secure, transparent escrow platform that protects both buyers and sellers, making every transaction worry-free.
							</p>
						</div>

						<div className='bg-white rounded-2xl p-10 border-2 border-gray-200 hover:border-[#1a7a4a]/30 hover:shadow-2xl transition-all duration-300'>
							<div className='text-5xl mb-6'>🚀</div>
							<h3 className='text-3xl font-bold text-gray-900 mb-4'>Our Vision</h3>
							<p className='text-lg text-gray-700 leading-relaxed'>
								To become Nigeria's most trusted platform for local transactions, where anyone can buy or sell with complete confidence, knowing their money and goods are protected.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className='py-20 md:py-28'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
					<h2 className='text-4xl font-bold text-gray-900 mb-12 text-center'>Our Values</h2>
					<div className='grid md:grid-cols-3 gap-8'>
						{[
							{
								value: "Trust First",
								description: "We earn trust through transparency, reliability, and consistent delivery on our promises.",
								icon: "🤝"
							},
							{
								value: "Security Always",
								description: "Every transaction is protected with bank-level security and thorough verification processes.",
								icon: "🔒"
							},
							{
								value: "Fair to All",
								description: "We treat buyers and sellers equally, resolving disputes fairly based on evidence.",
								icon: "⚖️"
							},
							{
								value: "Speed Matters",
								description: "Fast verification, quick delivery, and immediate payment release keep transactions moving.",
								icon: "⚡"
							},
							{
								value: "Customer Care",
								description: "Real human support available when you need it, not automated responses.",
								icon: "💙"
							},
							{
								value: "Local Focus",
								description: "We understand Nigerian commerce and build solutions for our community.",
								icon: "🇳🇬"
							}
						].map((item, index) => (
							<div key={item.value} className='bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-[#0d4d7d]/30 hover:shadow-xl transition-all duration-300 group'>
								<div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>{item.icon}</div>
								<h3 className='text-xl font-bold text-gray-900 mb-3'>{item.value}</h3>
								<p className='text-gray-600 leading-relaxed'>{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How We're Different */}
			<section className='py-20 md:py-28 bg-gradient-to-br from-blue-50 to-green-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl'>
					<h2 className='text-4xl font-bold text-gray-900 mb-12 text-center'>How We're Different</h2>
					<div className='space-y-6'>
						{[
							{
								title: "Physical Verification",
								description: "Unlike online-only platforms, we physically inspect items before delivery to ensure quality matches description."
							},
							{
								title: "Secure Escrow",
								description: "Money is held safely until delivery is confirmed — no premature releases, no chargeback fraud."
							},
							{
								title: "Verified Couriers",
								description: "All our dispatchers are background-checked and rated, ensuring professional, reliable delivery service."
							},
							{
								title: "Fair Dispute Resolution",
								description: "Experienced team reviews evidence from both sides and makes fair, data-driven decisions."
							},
							{
								title: "Local Understanding",
								description: "Built by Nigerians for Nigerians — we understand the unique challenges of local commerce."
							}
						].map((item, index) => (
							<div key={item.title} className='bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#0d4d7d] hover:shadow-lg transition-all duration-300 flex items-start gap-6'>
								<div className='w-12 h-12 bg-gradient-to-br from-[#0d4d7d] to-[#1a7a4a] rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0'>
									{index + 1}
								</div>
								<div>
									<h3 className='text-xl font-bold text-gray-900 mb-2'>{item.title}</h3>
									<p className='text-gray-600 leading-relaxed'>{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Stats */}
			<section className='py-20 md:py-28'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<h2 className='text-4xl font-bold text-gray-900 mb-12 text-center'>PayHold by Numbers</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
						{[
							{ number: "10K+", label: "Transactions" },
							{ number: "98%", label: "Success Rate" },
							{ number: "500+", label: "Verified Couriers" },
							{ number: "24/7", label: "Support" }
						].map((stat) => (
							<div key={stat.label} className='text-center'>
								<div className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#0d4d7d] to-[#1a7a4a] bg-clip-text text-transparent mb-3'>
									{stat.number}
								</div>
								<div className='text-gray-600 font-medium text-lg'>{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className='py-20 md:py-28 bg-gradient-to-r from-[#0d4d7d] to-[#1a7a4a] text-center relative overflow-hidden'>
				<div className='absolute inset-0'>
					<div className='absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl'></div>
					<div className='absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl'></div>
				</div>
				
				<div className='container mx-auto px-4 relative z-10'>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
						Join Thousands of Happy Users
					</h2>
					<p className='text-xl text-white/90 mb-10 max-w-2xl mx-auto'>
						Experience worry-free transactions. Buy and sell with complete confidence.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/create-transaction'>
							<Button
								size='lg'
								className='bg-white text-[#0d4d7d] hover:bg-white/90 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-bold'
							>
								Start Your First Transaction
							</Button>
						</Link>
						<Link href='/contact'>
							<Button
								size='lg'
								variant='outline'
								className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0d4d7d] px-10 py-6 text-lg font-bold'
							>
								Contact Us
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
