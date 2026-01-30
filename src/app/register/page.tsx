"use client";

import Button from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		agreeTerms: false
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle registration
		console.log("Registration:", formData);
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4 relative overflow-hidden'>
			{/* Animated Background Elements */}
			<div className='absolute inset-0'>
				<div className='absolute top-20 left-10 w-72 h-72 bg-[#0d4d7d]/5 rounded-full blur-3xl animate-pulse'></div>
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-[#1a7a4a]/5 rounded-full blur-3xl animate-pulse' style={{animationDelay: '1s'}}></div>
			</div>

			<div className='w-full max-w-md relative z-10'>
				{/* Logo */}
				<div className='text-center mb-8'>
					<Link href='/' className='inline-block'>
						<div className='text-4xl font-bold tracking-tight hover:scale-105 transition-transform duration-300'>
							<span className='text-[#0d4d7d]'>Pay</span>
							<span className='text-[#1a7a4a]'>Hold</span>
						</div>
						<p className='text-sm text-gray-600 mt-2'>Secure Local Delivery</p>
					</Link>
				</div>

				<Card className='border-2 border-gray-100 shadow-2xl'>
					<CardHeader className='border-b border-gray-100 pb-6'>
						<CardTitle className='text-center text-2xl font-bold text-gray-900'>
							Create Your Account
						</CardTitle>
						<p className='text-center text-sm text-gray-600 mt-2'>
							Join thousands transacting safely with PayHold
						</p>
					</CardHeader>

					<CardContent className='pt-6'>
						<form onSubmit={handleSubmit} className='space-y-5'>
							<div>
								<Input
									label='Full Name'
									type='text'
									placeholder='John Doe'
									value={formData.fullName}
									onChange={(e) => setFormData({...formData, fullName: e.target.value})}
									required
								/>
							</div>

							<div>
								<Input
									label='Email Address'
									type='email'
									placeholder='john@example.com'
									value={formData.email}
									onChange={(e) => setFormData({...formData, email: e.target.value})}
									required
								/>
							</div>

							<div>
								<Input
									label='Phone Number'
									type='tel'
									placeholder='+234 800 000 0000'
									value={formData.phone}
									onChange={(e) => setFormData({...formData, phone: e.target.value})}
									required
								/>
							</div>

							<div>
								<Input
									label='Password'
									type='password'
									placeholder='••••••••'
									value={formData.password}
									onChange={(e) => setFormData({...formData, password: e.target.value})}
									required
								/>
								<p className='text-xs text-gray-500 mt-1'>
									At least 8 characters with letters and numbers
								</p>
							</div>

							<div>
								<Input
									label='Confirm Password'
									type='password'
									placeholder='••••••••'
									value={formData.confirmPassword}
									onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
									required
								/>
							</div>

							<div className='flex items-start gap-3 p-4 bg-gray-50 rounded-lg'>
								<input
									type='checkbox'
									id='terms'
									checked={formData.agreeTerms}
									onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
									required
									className='w-5 h-5 rounded border-gray-300 mt-0.5'
								/>
								<label htmlFor='terms' className='text-sm text-gray-700'>
									I agree to PayHold's{' '}
									<Link href='/terms' className='text-[#0d4d7d] font-semibold hover:text-[#1a7a4a]'>
										Terms & Conditions
									</Link>{' '}
									and{' '}
									<Link href='/privacy' className='text-[#0d4d7d] font-semibold hover:text-[#1a7a4a]'>
										Privacy Policy
									</Link>
								</label>
							</div>

							<Button 
								type='submit'
								fullWidth
								className='bg-gradient-to-r from-[#0d4d7d] to-[#1a7a4a] hover:shadow-xl hover:scale-105 transition-all duration-300 py-6 text-lg font-bold'
							>
								Create Account
							</Button>
						</form>

						<div className='mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg'>
							<p className='text-sm text-gray-700 text-center'>
								<span className='font-semibold text-[#0d4d7d]'>Note:</span> Registration is temporarily disabled. Use demo login to explore PayHold.
							</p>
						</div>

						<p className='text-center text-sm text-gray-600 mt-6'>
							Already have an account?{' '}
							<Link
								href='/login'
								className='text-[#0d4d7d] hover:text-[#1a7a4a] font-semibold transition-colors'
							>
								Log in
							</Link>
						</p>
					</CardContent>
				</Card>

				<div className='text-center mt-8'>
					<Link 
						href='/' 
						className='inline-flex items-center gap-2 text-gray-600 hover:text-[#0d4d7d] font-medium transition-all hover:gap-3'
					>
						<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
						</svg>
						Back to Home
					</Link>
				</div>

				{/* Trust Badge */}
				<div className='mt-8 flex items-center justify-center gap-6 text-sm text-gray-600'>
					<div className='flex items-center gap-2'>
						<svg className='w-5 h-5 text-[#1a7a4a]' fill='currentColor' viewBox='0 0 20 20'>
							<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
						</svg>
						<span className='font-medium'>Secure</span>
					</div>
					<div className='flex items-center gap-2'>
						<svg className='w-5 h-5 text-[#0d4d7d]' fill='currentColor' viewBox='0 0 20 20'>
							<path fillRule='evenodd' d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
						</svg>
						<span className='font-medium'>Protected</span>
					</div>
					<div className='flex items-center gap-2'>
						<svg className='w-5 h-5 text-[#1a7a4a]' fill='currentColor' viewBox='0 0 20 20'>
							<path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
						</svg>
						<span className='font-medium'>Trusted</span>
					</div>
				</div>

				{/* Alternative Options */}
				<div className='mt-10 text-center space-y-3'>
					<p className='text-sm text-gray-600'>Looking for something else?</p>
					<div className='flex flex-col sm:flex-row gap-3 justify-center'>
						<Link href='/for-dispatchers'>
							<Button 
								variant='outline' 
								size='sm'
								className='border-[#1a7a4a] text-[#1a7a4a] hover:bg-[#1a7a4a] hover:text-white'
							>
								<span className='flex items-center gap-2'>
									<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' />
									</svg>
									Become a Dispatcher
								</span>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
