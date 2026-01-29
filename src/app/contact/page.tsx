"use client";

import Button from "@/components/ui/Button";

export default function ContactPage() {
	const whatsappNumber = "2348000000000"; // replace with real number
	const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20PayHold%20Support,%20I%20need%20assistance`;

	return (
		<div className='min-h-screen bg-white'>
			{/* Header */}
			<section className='py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 text-center'>
				<h1 className='text-4xl md:text-5xl font-bold text-secondary-900 mb-4'>
					Contact <span className='text-primary-600'>PayHold</span>
				</h1>
				<p className='text-lg text-secondary-600 max-w-2xl mx-auto'>
					Fast support, real humans, and secure dispute handling.
				</p>
			</section>

			{/* Content */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl'>
					{/* WhatsApp Primary */}
					<div className='bg-green-50 border border-green-200 rounded-xl p-6 mb-10'>
						<h2 className='text-2xl font-semibold text-secondary-900 mb-2'>
							📲 WhatsApp Support (Fastest)
						</h2>
						<p className='text-secondary-700 mb-4'>
							For transaction issues, delivery confirmation, or disputes, chat
							with our support team directly on WhatsApp.
						</p>

						<a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
							<Button
								size='lg'
								className='w-full bg-green-300 hover:bg-green-700 text-white font-semibold'
							>
								Chat on WhatsApp
							</Button>
						</a>

						<p className='text-sm text-secondary-600 mt-3'>
							Response time: usually within 5–15 minutes (9am–6pm)
						</p>
					</div>

					{/* Email + Form */}
					<div className='grid md:grid-cols-2 gap-8'>
						<div>
							<div className='space-y-4 text-sm'>
								<div className='flex items-start gap-3'>
									<span className='text-xl'>📧</span>
									<div>
										<p className='font-medium text-secondary-900'>Email</p>
										<p className='text-secondary-600'>support@payhold.ng</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<span className='text-xl'>📞</span>
									<div>
										<p className='font-medium text-secondary-900'>Phone</p>
										<p className='text-secondary-600'>+234 800 000 0000</p>
									</div>
								</div>

								<div className='flex items-start gap-3'>
									<span className='text-xl'>⏱️</span>
									<div>
										<p className='font-medium text-secondary-900'>
											Support Hours
										</p>
										<p className='text-secondary-600'>
											Monday – Saturday, 9am – 6pm
										</p>
									</div>
								</div>
							</div>{" "}
							<h3 className='text-xl font-semibold text-secondary-900 mb-3'>
								Email Support
							</h3>
							<p className='text-secondary-600 mb-2'>
								For detailed issues or documents:
							</p>
							<p className='font-medium'>support@payhold.ng</p>
						</div>

						<div className='bg-white border border-secondary-200 rounded-xl p-6'>
							<h3 className='text-xl font-semibold text-secondary-900 mb-4'>
								Send a Message
							</h3>

							<form className='space-y-4'>
								<input
									type='text'
									placeholder='Full Name'
									className='w-full border rounded-lg px-4 py-2'
								/>
								<input
									type='email'
									placeholder='Email Address'
									className='w-full border rounded-lg px-4 py-2'
								/>
								<input
									type='text'
									placeholder='Transaction ID (if any)'
									className='w-full border rounded-lg px-4 py-2'
								/>
								<textarea
									rows={4}
									placeholder='Describe your issue'
									className='w-full border rounded-lg px-4 py-2'
								/>

								<Button className='w-full'>Submit</Button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
