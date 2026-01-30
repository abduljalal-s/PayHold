"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ContactPage() {
	const whatsappNumber = "2348000000000";
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20PayHold%20Support,%20I%20need%20assistance`;

	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='border-b border-gray-200 bg-white'>
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
						Get in <span className='text-[#0d4d7d]'>Touch</span>
					</h1>
					<p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto'>
						Fast support, real humans, and secure dispute handling. We're here to help you.
					</p>
				</div>
			</section>

			{/* Content */}
			<section className='py-20 md:py-28'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
					{/* WhatsApp Primary */}
					<div className='bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-10 mb-12 hover:shadow-2xl transition-all duration-300'>
						<div className='flex items-start gap-4 mb-6'>
							<div className='w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0'>
								<svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
									<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
								</svg>
							</div>
							<div className='flex-1'>
								<h2 className='text-3xl font-bold text-gray-900 mb-3'>
									WhatsApp Support (Fastest)
								</h2>
								<p className='text-gray-700 text-lg leading-relaxed'>
									For transaction issues, delivery confirmation, or disputes, chat with our support team directly on WhatsApp. Get instant responses from real people.
								</p>
							</div>
						</div>

						<a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
							<Button
								size='lg'
								className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
							>
								<span className='flex items-center justify-center gap-3'>
									<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
										<path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
									</svg>
									Chat on WhatsApp Now
								</span>
							</Button>
						</a>

						<p className='text-sm text-gray-600 mt-4 text-center font-medium'>
							⏱️ Average response time: <span className='text-green-700 font-bold'>5-15 minutes</span> (9am-6pm WAT)
						</p>
					</div>

					{/* Contact Methods + Form */}
					<div className='grid md:grid-cols-2 gap-8'>
						{/* Contact Info */}
						<div className='space-y-6'>
							<h3 className='text-2xl font-bold text-gray-900 mb-6'>Other Ways to Reach Us</h3>
							
							<div className='space-y-4'>
								<div className='flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-100 hover:border-[#0d4d7d] transition-all duration-300'>
									<div className='w-12 h-12 bg-[#0d4d7d] rounded-lg flex items-center justify-center flex-shrink-0'>
										<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
										</svg>
									</div>
									<div>
										<p className='font-bold text-gray-900 mb-1'>Email Support</p>
										<p className='text-[#0d4d7d] font-semibold'>support@payhold.ng</p>
										<p className='text-sm text-gray-600 mt-1'>Response within 24 hours</p>
									</div>
								</div>

								<div className='flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-100 hover:border-[#1a7a4a] transition-all duration-300'>
									<div className='w-12 h-12 bg-[#1a7a4a] rounded-lg flex items-center justify-center flex-shrink-0'>
										<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
										</svg>
									</div>
									<div>
										<p className='font-bold text-gray-900 mb-1'>Phone Support</p>
										<p className='text-[#1a7a4a] font-semibold'>+234 800 000 0000</p>
										<p className='text-sm text-gray-600 mt-1'>Mon-Sat, 9am-6pm WAT</p>
									</div>
								</div>

								<div className='flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100 hover:border-purple-500 transition-all duration-300'>
									<div className='w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0'>
										<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
										</svg>
									</div>
									<div>
										<p className='font-bold text-gray-900 mb-1'>Office Location</p>
										<p className='text-purple-600 font-semibold'>Lagos, Nigeria</p>
										<p className='text-sm text-gray-600 mt-1'>Visit by appointment only</p>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className='bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#0d4d7d]/30 hover:shadow-2xl transition-all duration-300'>
							<h3 className='text-2xl font-bold text-gray-900 mb-6'>Send Us a Message</h3>

							<form className='space-y-5'>
								<div>
									<label className='block text-sm font-semibold text-gray-700 mb-2'>Full Name</label>
									<input
										type='text'
										placeholder='John Doe'
										className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#0d4d7d] focus:outline-none transition-colors'
									/>
								</div>
								
								<div>
									<label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
									<input
										type='email'
										placeholder='john@example.com'
										className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#0d4d7d] focus:outline-none transition-colors'
									/>
								</div>
								
								<div>
									<label className='block text-sm font-semibold text-gray-700 mb-2'>Transaction ID (Optional)</label>
									<input
										type='text'
										placeholder='TXN-XXXXX'
										className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#0d4d7d] focus:outline-none transition-colors'
									/>
								</div>
								
								<div>
									<label className='block text-sm font-semibold text-gray-700 mb-2'>Message</label>
									<textarea
										rows={5}
										placeholder='Describe your issue or inquiry...'
										className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-[#0d4d7d] focus:outline-none transition-colors resize-none'
									/>
								</div>

								<Button className='w-full bg-gradient-to-r from-[#0d4d7d] to-[#1a7a4a] hover:shadow-xl hover:scale-105 transition-all duration-300 py-6 text-lg font-semibold'>
									Send Message
								</Button>
							</form>
						</div>
					</div>

					{/* FAQ Quick Links */}
					<div className='mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-10 border-2 border-gray-200'>
						<h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>Need Quick Answers?</h3>
						<div className='grid md:grid-cols-3 gap-4'>
							<Link href='/how-it-works' className='p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#0d4d7d] hover:shadow-lg transition-all duration-300 text-center group'>
								<div className='text-4xl mb-3'>📚</div>
								<h4 className='font-bold text-gray-900 group-hover:text-[#0d4d7d] transition-colors'>How It Works</h4>
								<p className='text-sm text-gray-600 mt-2'>Learn about our process</p>
							</Link>
							<Link href='/faq' className='p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#1a7a4a] hover:shadow-lg transition-all duration-300 text-center group'>
								<div className='text-4xl mb-3'>❓</div>
								<h4 className='font-bold text-gray-900 group-hover:text-[#1a7a4a] transition-colors'>FAQ</h4>
								<p className='text-sm text-gray-600 mt-2'>Common questions answered</p>
							</Link>
							<Link href='/dispute-resolution' className='p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#0d4d7d] hover:shadow-lg transition-all duration-300 text-center group'>
								<div className='text-4xl mb-3'>⚖️</div>
								<h4 className='font-bold text-gray-900 group-hover:text-[#0d4d7d] transition-colors'>Dispute Help</h4>
								<p className='text-sm text-gray-600 mt-2'>Resolve issues fairly</p>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
