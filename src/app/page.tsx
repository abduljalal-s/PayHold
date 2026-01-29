"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

// ============================================================================
// LANDING PAGE - Public facing
// ============================================================================

export default function HomePage() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='border-b border-secondary-200 bg-white sticky top-0 z-40 shadow-sm'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						{/* Logo */}
						<div className='flex items-center gap-2'>
							<div className='h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center'>
								<svg
									className='w-6 h-6 text-white'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
									/>
								</svg>
							</div>
							<span className='text-xl font-bold text-secondary-900'>
								PAYHOLD
							</span>
						</div>

						{/* Desktop Nav */}
						<div className='hidden md:flex items-center gap-6'>
							<Link
								href='/how-it-works'
								className='text-secondary-700 hover:text-primary-600 transition-colors'
							>
								How It Works
							</Link>
							<Link href='/create-transaction'>
								<Button variant='outline'>Create Transaction</Button>
							</Link>
							<Link
								href='/contact'
								className='text-secondary-700 hover:text-primary-600 transition-colors'
							>
								Contact
							</Link>
							<Link href='/login'>
								<Button variant='outline' size='sm'>
									Log In
								</Button>
							</Link>
						</div>

						{/* Mobile Hamburger */}
						<button
							onClick={() => setMenuOpen(true)}
							className='md:hidden p-2 border border-secondary-200 rounded-lg'
							aria-label='Open menu'
						>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				{menuOpen && (
					<div
						className='fixed inset-0 bg-black/40 z-40'
						onClick={() => setMenuOpen(false)}
					/>
				)}

				{/* Mobile Menu Panel */}
				<div
					className={`fixed top-0 left-0 right-0 bg-white z-50 transform transition-transform duration-300 ${
						menuOpen ? "translate-y-0" : "-translate-y-full"
					}`}
				>
					<div className='flex items-center justify-between p-4 border-b'>
						<span className='font-bold text-lg'>PAYHOLD</span>
						<button onClick={() => setMenuOpen(false)}>✕</button>
					</div>

					<nav className='p-6 space-y-4'>
						<Link
							href='/how-it-works'
							onClick={() => setMenuOpen(false)}
							className='block text-secondary-800 font-medium'
						>
							How It Works
						</Link>

						<Link
							href='/contact'
							onClick={() => setMenuOpen(false)}
							className='block text-secondary-800 font-medium'
						>
							Contact
						</Link>

						<Link href='/login' onClick={() => setMenuOpen(false)}>
							<Button variant='outline' className='w-full'>
								Log In
							</Button>
						</Link>

						<Link href='/create-transaction' onClick={() => setMenuOpen(false)}>
							<Button className='w-full'>Create Transaction</Button>
						</Link>
					</nav>
				</div>
			</nav>

			{/* Hero Section */}
			<section className='py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto text-center'>
						<div className='inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6'>
							<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
									clipRule='evenodd'
								/>
							</svg>
							Trusted by thousands of Nigerians
						</div>

						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight'>
							Buy & Sell with{" "}
							<span className='text-primary-600'>Complete Security</span>
						</h1>

						<p className='text-lg md:text-xl text-secondary-600 mb-8 max-w-3xl mx-auto'>
							PayHold is a secure exchange platform that protects buyers and
							sellers by holding payment, receiving goods, and dispatching only
							after verification.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link href='/create-transaction'>
								<Button size='lg' className='w-full sm:w-auto'>
									Create Transaction
								</Button>
							</Link>
							<Link href='/how-it-works'>
								<Button
									variant='outline'
									size='lg'
									className='w-full sm:w-auto'
								>
									Learn How It Works
								</Button>
							</Link>
						</div>

						{/* Trust indicators */}
						<div className='mt-12 pt-8 border-t border-secondary-200'>
							<div className='grid grid-cols-3 gap-8 max-w-2xl mx-auto'>
								<div>
									<div className='text-3xl font-bold text-primary-600 mb-1'>
										24-72h
									</div>
									<div className='text-sm text-secondary-600'>
										Secure Holding
									</div>
								</div>
								<div>
									<div className='text-3xl font-bold text-primary-600 mb-1'>
										100%
									</div>
									<div className='text-sm text-secondary-600'>
										Buyer Protection
									</div>
								</div>
								<div>
									<div className='text-3xl font-bold text-primary-600 mb-1'>
										Fast
									</div>
									<div className='text-sm text-secondary-600'>Dispatch</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className='py-16 md:py-24 bg-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-secondary-900 mb-4'>
							How PayHold Works
						</h2>
						<p className='text-lg text-secondary-600 max-w-2xl mx-auto'>
							Simple, secure, and transparent process for both buyers and
							sellers
						</p>
					</div>

					<div className='grid md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
						{[
							{
								step: "1",
								title: "Buyer Pays Platform",
								description:
									"Buyer creates transaction and pays the total amount to our secure platform",
								icon: (
									<svg
										className='w-8 h-8'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
										/>
									</svg>
								),
							},
							{
								step: "2",
								title: "Seller Drops Off",
								description:
									"Seller brings goods to our secure location for verification",
								icon: (
									<svg
										className='w-8 h-8'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
										/>
									</svg>
								),
							},
							{
								step: "3",
								title: "We Dispatch",
								description:
									"We verify goods and dispatch to buyer with tracking",
								icon: (
									<svg
										className='w-8 h-8'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0'
										/>
									</svg>
								),
							},
							{
								step: "4",
								title: "Payment Released",
								description:
									"After buyer confirms delivery, we release payment to seller",
								icon: (
									<svg
										className='w-8 h-8'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								),
							},
						].map((item) => (
							<div key={item.step} className='text-center'>
								<div className='inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-4'>
									{item.icon}
								</div>
								<div className='text-sm font-semibold text-primary-600 mb-2'>
									Step {item.step}
								</div>
								<h3 className='text-lg font-semibold text-secondary-900 mb-2'>
									{item.title}
								</h3>
								<p className='text-sm text-secondary-600'>{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className='py-16 md:py-24 bg-secondary-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-secondary-900 mb-4'>
							Why Choose EscrowNG?
						</h2>
					</div>

					<div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
						{[
							{
								title: "Complete Security",
								description:
									"Your money is safe. Goods are never released without confirmed payment. Payment is never released without confirmed delivery.",
								icon: "🔒",
							},
							{
								title: "Fast & Reliable",
								description:
									"Quick verification and dispatch. Most transactions complete within 24-48 hours.",
								icon: "⚡",
							},
							{
								title: "Dispute Protection",
								description:
									"48-hour dispute window after delivery. Our team reviews every case fairly.",
								icon: "⚖️",
							},
						].map((feature) => (
							<div
								key={feature.title}
								className='bg-white p-6 rounded-xl border border-secondary-200'
							>
								<div className='text-4xl mb-4'>{feature.icon}</div>
								<h3 className='text-xl font-semibold text-secondary-900 mb-2'>
									{feature.title}
								</h3>
								<p className='text-secondary-600'>{feature.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 md:py-24 bg-primary-600'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
						Ready to Transact Safely?
					</h2>
					<p className='text-lg text-primary-100 mb-8 max-w-2xl mx-auto'>
						Join thousands of Nigerians who buy and sell with confidence
					</p>
					<Link
						href='#'
						className='space-x-4 bg-white text-primary-600 hover:bg-primary-300'
					>
						Create Your First Transaction &nbsp;
					</Link>
					<br />
					<Link
						href='#'
						className='space-x-4 bg-white text-primary-600 hover:bg-primary-300'
					>
						Join Dispatchers Program
					</Link>
					<div className='my-8 md:my-12'>
						<hr className='border-primary-200' />
					</div>
					<Link href='#' className='mt-2 text-3xl text-black'>
						DAIL *565#
					</Link>
					<br />{" "}
					<h4 className='mt-2 text-lg text-white'>
						To support last-mile delivery and physical goods exchange, PayHold
						introduces a USSD-based dispatcher activation system.
					</h4>{" "}
					<p className='mt-4 text-1xl text-center'>
						How it works: Dispatch riders (motorcycles) or car dispatchers dial
						a designated USSD code <span className='text-2xl'>*565#</span> from
						their registered phone number. Dialing the code activates the
						dispatcher’s availability status on the PayHold platform. Once
						activated: The dispatcher is automatically detected by PayHold as
						“online/available”. Their phone number, dispatcher type (bike or
						car), and activation timestamp are logged. When a transaction
						requires delivery: PayHold rotates through available dispatchers,
						automatically selecting or calling them in sequence. This prevents
						favoritism, reduces manual coordination, and ensures fair job
						distribution.
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-secondary-900 text-secondary-300 py-12'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid md:grid-cols-4 gap-8 mb-8'>
						<div>
							<div className='flex items-center gap-2 mb-4'>
								<div className='h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center'>
									<svg
										className='w-5 h-5 text-white'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
										/>
									</svg>
								</div>
								<span className='text-lg font-bold text-white'>PayHold</span>
							</div>
							<p className='text-sm'>
								Secure payment and delivery platform for Nigeria
							</p>
						</div>

						<div>
							<h4 className='font-semibold text-white mb-4'>Company</h4>
							<ul className='space-y-2 text-sm'>
								<li>
									<Link
										href='/about'
										className='hover:text-white transition-colors'
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href='/how-it-works'
										className='hover:text-white transition-colors'
									>
										How It Works
									</Link>
								</li>
								<li>
									<Link
										href='/contact'
										className='hover:text-white transition-colors'
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className='font-semibold text-white mb-4'>Legal</h4>
							<ul className='space-y-2 text-sm'>
								<li>
									<Link
										href='/terms'
										className='hover:text-white transition-colors'
									>
										Terms & Conditions
									</Link>
								</li>
								<li>
									<Link
										href='/privacy'
										className='hover:text-white transition-colors'
									>
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className='font-semibold text-white mb-4'>Support</h4>
							<p className='text-sm mb-2'>Email: support@escrowng.com</p>
							<p className='text-sm'>Phone: +234 800 000 0000</p>
						</div>
					</div>

					<div className='pt-8 border-t border-secondary-800 text-sm text-center'>
						<p>&copy; 2026 PayHold. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
