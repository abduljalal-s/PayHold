"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function HowItWorksPage() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Header */}
			<section className='py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 text-center'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl md:text-5xl font-bold text-secondary-900 mb-4'>
						How <span className='text-primary-600'>PayHold</span> Works
					</h1>
					<p className='text-lg text-secondary-600 max-w-3xl mx-auto'>
						A simple, secure escrow process that protects both buyers and
						sellers from fraud.
					</p>
				</div>
			</section>

			{/* Steps */}
			<section className='py-16 md:py-24'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid md:grid-cols-4 gap-8 max-w-6xl mx-auto'>
						{[
							{
								step: "1",
								title: "Buyer Pays PayHold",
								description:
									"Funds are securely held by PayHold and confirmed. The seller does not receive payment yet.",
								icon: "💳",
							},
							{
								step: "2",
								title: "Seller Drops Off Goods",
								description:
									"Seller submits the item. Goods are verified, inspected, and documented.",
								icon: "📦",
							},
							{
								step: "3",
								title: "PayHold Dispatches",
								description:
									"Once verified, PayHold handles secure delivery to the buyer.",
								icon: "🚚",
							},
							{
								step: "4",
								title: "Seller Gets Paid",
								description:
									"Payment is released to the seller after dispatch confirmation.",
								icon: "✅",
							},
						].map((item) => (
							<div
								key={item.step}
								className='bg-white border border-secondary-200 rounded-2xl p-6 text-center'
							>
								<div className='text-4xl mb-4'>{item.icon}</div>

								<div className='text-sm font-semibold text-primary-600 mb-1'>
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

			{/* Trust Note */}
			<section className='py-16 bg-secondary-50'>
				<div className='container mx-auto px-4 text-center max-w-3xl'>
					<h2 className='text-2xl md:text-3xl font-bold text-secondary-900 mb-4'>
						Why This Works
					</h2>
					<p className='text-secondary-600'>
						Buyers don’t release money blindly. Sellers don’t ship without
						payment assurance. PayHold acts as the trusted middleman — every
						time.
					</p>
				</div>
			</section>

			{/* CTA */}
			<section className='py-16 md:py-24 bg-primary-600 text-center'>
				<div className='container mx-auto px-4'>
					<h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
						Ready to Trade Safely?
					</h2>
					<p className='text-primary-100 mb-8 max-w-2xl mx-auto'>
						Create a PayHold transaction and avoid scams, stories, and excuses.
					</p>

					<Link href='/create-transaction'>
						<Button
							size='lg'
							className='bg-white text-primary-600 hover:bg-primary-50'
						>
							Create Transaction
						</Button>
					</Link>
				</div>
			</section>
		</div>
	);
}
