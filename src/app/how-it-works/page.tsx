"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HowItWorksPage() {
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
			<section className='relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden text-center'>
				<div className='absolute inset-0'>
					<div className='absolute top-20 left-10 w-72 h-72 bg-[#0d4d7d]/5 rounded-full blur-3xl animate-pulse'></div>
					<div className='absolute bottom-20 right-10 w-96 h-96 bg-[#1a7a4a]/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
				</div>
				
				<div className='container mx-auto px-4 relative z-10'>
					<h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6'>
						How <span className='text-[#0d4d7d]'>Pay</span><span className='text-[#1a7a4a]'>Hold</span> Works
					</h1>
					<p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
						A simple, secure escrow process that protects both buyers and sellers from fraud. No more "I've sent it" or "I didn't receive it" stories.
					</p>
				</div>
			</section>

			{/* Main Steps */}
			<section className='py-20 md:py-28'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
						{[
							{
								step: "1",
								title: "Buyer Pays PayHold",
								description:
									"Buyer creates a transaction and pays the total amount to our secure escrow platform. Funds are safely held until delivery is confirmed.",
								icon: "💳",
								color: "#0d4d7d"
							},
							{
								step: "2",
								title: "Seller Ships Item",
								description:
									"Seller receives notification and ships the goods to PayHold for thorough verification, inspection, and documentation.",
								icon: "📦",
								color: "#1a7a4a"
							},
							{
								step: "3",
								title: "We Verify & Dispatch",
								description:
									"Our team inspects the item to ensure it matches the description, then our verified couriers deliver it to the buyer.",
								icon: "🚚",
								color: "#0d4d7d"
							},
							{
								step: "4",
								title: "Payment Released",
								description:
									"After buyer confirms receipt and is satisfied, payment is automatically released to the seller. Everyone wins!",
								icon: "✅",
								color: "#1a7a4a"
							},
						].map((item, index) => (
							<div
								key={item.step}
								className='relative bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-[#0d4d7d]/30 hover:shadow-2xl transition-all duration-300 group'
								style={{animationDelay: `${index * 100}ms`}}
							>
								{/* Step Number */}
								<div 
									className='absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg'
									style={{backgroundColor: item.color}}
								>
									{item.step}
								</div>

								<div className='text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>{item.icon}</div>

								<h3 className='text-xl font-bold text-gray-900 mb-4'>
									{item.title}
								</h3>

								<p className='text-gray-600 leading-relaxed'>{item.description}</p>

								{/* Connector Arrow (Desktop Only) */}
								{index < 3 && (
									<div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2'>
										<svg className='w-8 h-8 text-[#0d4d7d]/30' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
										</svg>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Detailed Process */}
			<section className='py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center'>
						The Complete Process
					</h2>

					<div className='space-y-8'>
						{[
							{
								phase: "Setup Phase",
								steps: [
									"Buyer creates transaction with item details and price",
									"Payment link is generated and sent to buyer",
									"Buyer pays total amount (item price + service fee)",
									"Payment confirmation sent to both parties"
								],
								icon: "🎯"
							},
							{
								phase: "Verification Phase",
								steps: [
									"Seller drops off item at PayHold center",
									"Item is photographed and logged into system",
									"Quality check performed against description",
									"Verification report created with photos"
								],
								icon: "🔍"
							},
							{
								phase: "Delivery Phase",
								steps: [
									"Verified courier assigned to delivery",
									"Real-time GPS tracking activated",
									"Buyer receives delivery notifications",
									"Courier delivers and gets signature confirmation"
								],
								icon: "📍"
							},
							{
								phase: "Completion Phase",
								steps: [
									"Buyer has 48 hours to inspect item",
									"If satisfied, buyer confirms delivery",
									"Payment automatically released to seller",
									"Both parties can leave reviews"
								],
								icon: "🎉"
							}
						].map((phase, index) => (
							<div key={phase.phase} className='bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#0d4d7d]/30 hover:shadow-xl transition-all duration-300'>
								<div className='flex items-start gap-6'>
									<div className='text-5xl flex-shrink-0'>{phase.icon}</div>
									<div className='flex-1'>
										<h3 className='text-2xl font-bold text-gray-900 mb-4'>{phase.phase}</h3>
										<ul className='space-y-3'>
											{phase.steps.map((step, idx) => (
												<li key={idx} className='flex items-start gap-3'>
													<svg className='w-6 h-6 text-[#1a7a4a] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
														<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
													</svg>
													<span className='text-gray-700'>{step}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why This Works */}
			<section className='py-20 md:py-28 bg-white'>
				<div className='container mx-auto px-4 text-center max-w-4xl'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
						Why This Works
					</h2>
					<p className='text-xl text-gray-600 mb-12 leading-relaxed'>
						Buyers don't release money blindly. Sellers don't ship without payment assurance. PayHold acts as the trusted middleman — every single time.
					</p>

					<div className='grid md:grid-cols-3 gap-6'>
						{[
							{
								title: "For Buyers",
								benefit: "Money stays safe until you confirm delivery",
								icon: "🛡️"
							},
							{
								title: "For Sellers",
								benefit: "Get paid immediately after verified delivery",
								icon: "💰"
							},
							{
								title: "For Everyone",
								benefit: "No more scams, disputes, or trust issues",
								icon: "🤝"
							}
						].map((item) => (
							<div key={item.title} className='bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#0d4d7d] hover:shadow-lg transition-all duration-300'>
								<div className='text-5xl mb-4'>{item.icon}</div>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>{item.title}</h3>
								<p className='text-gray-600'>{item.benefit}</p>
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
						Ready to Trade Safely?
					</h2>
					<p className='text-xl text-white/90 mb-10 max-w-2xl mx-auto'>
						Create a PayHold transaction and avoid scams, stories, and excuses. Start your secure transaction now.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link href='/create-transaction'>
							<Button
								size='lg'
								className='bg-white text-[#0d4d7d] hover:bg-white/90 hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-bold'
							>
								Create Transaction
							</Button>
						</Link>
						<Link href='/contact'>
							<Button
								size='lg'
								variant='outline'
								className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0d4d7d] px-10 py-6 text-lg font-bold'
							>
								Contact Support
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
