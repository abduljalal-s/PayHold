"use client";

import Button from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { getMockUserByRole } from "@/lib/mockData";
import { useAuthStore } from "@/store";
import { UserRole } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
	const router = useRouter();
	const login = useAuthStore((state) => state.login);
	const [isLoading, setIsLoading] = useState(false);

	const handleDemoLogin = async (role: UserRole) => {
		setIsLoading(true);

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 500));

		const user = getMockUserByRole(role);

		if (user) {
			login(user);

			// Redirect based on role
			switch (role) {
				case UserRole.BUYER:
					router.push("/buyer");
					break;
				case UserRole.SELLER:
					router.push("/seller");
					break;
				case UserRole.ADMIN:
					router.push("/admin");
					break;
			}
		}

		setIsLoading(false);
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
							Welcome Back
						</CardTitle>
						<p className='text-center text-sm text-gray-600 mt-2'>
							Select a role to explore the dashboard
						</p>
					</CardHeader>

					<CardContent className='pt-6'>
						{/* Demo Login Buttons */}
						<div className='space-y-3'>
							<Button
								fullWidth
								size='lg'
								onClick={() => handleDemoLogin(UserRole.BUYER)}
								isLoading={isLoading}
								className='bg-gradient-to-r from-[#0d4d7d] to-[#1a7a4a] hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-base font-semibold py-6'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
									/>
								</svg>
								Login as Buyer
							</Button>

							<Button
								fullWidth
								size='lg'
								onClick={() => handleDemoLogin(UserRole.SELLER)}
								isLoading={isLoading}
								className='bg-white border-2 border-[#1a7a4a] text-[#1a7a4a] hover:bg-[#1a7a4a] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-base font-semibold py-6'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								Login as Seller
							</Button>

							<Button
								fullWidth
								size='lg'
								onClick={() => handleDemoLogin(UserRole.ADMIN)}
								isLoading={isLoading}
								className='bg-white border-2 border-[#0d4d7d] text-[#0d4d7d] hover:bg-[#0d4d7d] hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-base font-semibold py-6'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
								Login as Admin
							</Button>
						</div>

						{/* Divider */}
						<div className='relative my-8'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-gray-200' />
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='px-4 bg-white text-gray-500 font-medium'>
									Or login with credentials
								</span>
							</div>
						</div>

						{/* Actual Login Form (for production) */}
						<form className='space-y-4'>
							<div>
								<Input
									label='Email'
									type='email'
									placeholder='your@email.com'
									disabled
									className='bg-gray-50'
								/>
							</div>

							<div>
								<Input
									label='Password'
									type='password'
									placeholder='••••••••'
									disabled
									className='bg-gray-50'
								/>
							</div>

							<div className='flex items-center justify-between text-sm'>
								<label className='flex items-center gap-2 text-gray-600 cursor-not-allowed'>
									<input type='checkbox' disabled className='rounded border-gray-300' />
									<span>Remember me</span>
								</label>
								<Link
									href='/forgot-password'
									className='text-[#0d4d7d] hover:text-[#1a7a4a] font-medium transition-colors'
								>
									Forgot password?
								</Link>
							</div>

							<Button 
								fullWidth 
								disabled 
								className='opacity-50 cursor-not-allowed bg-gray-400 py-6 text-base font-semibold'
							>
								Login (Coming Soon)
							</Button>
						</form>

						<div className='mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg'>
							<p className='text-sm text-gray-700 text-center'>
								<span className='font-semibold text-[#0d4d7d]'>Demo Mode:</span> Use the role buttons above to explore PayHold
							</p>
						</div>

						<p className='text-center text-sm text-gray-600 mt-6'>
							Don't have an account?{" "}
							<Link
								href='/register'
								className='text-[#0d4d7d] hover:text-[#1a7a4a] font-semibold transition-colors'
							>
								Sign up
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
			</div>
		</div>
	);
}
