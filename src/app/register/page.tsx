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
		<div className='min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4'>
			<div className='w-full max-w-md'>
				{/* Logo */}
				<div className='text-center mb-8'>
					<Link href='/' className='inline-flex items-center gap-2'>
						<div className='h-12 w-12 bg-primary-600 rounded-lg flex items-center justify-center'>
							<svg
								className='w-7 h-7 text-white'
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
						<span className='text-2xl font-bold text-secondary-900'>
							PayHold
						</span>
					</Link>
				</div>

				<Card>
					<CardHeader>
						<CardTitle className='text-center'> Register</CardTitle>
						<p className='text-center text-sm text-secondary-600 mt-2'>
							Select a role to explore the dashboard
						</p>
					</CardHeader>

					<CardContent>
						{/* Demo Login Buttons */}
						<div className='space-y-3'>
							<Button
								fullWidth
								size='lg'
								onClick={() => handleDemoLogin(UserRole.BUYER)}
								isLoading={isLoading}
								className='flex items-center justify-center gap-2'
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
								variant='secondary'
								onClick={() => handleDemoLogin(UserRole.SELLER)}
								isLoading={isLoading}
								className='flex items-center justify-center gap-2'
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
								variant='outline'
								onClick={() => handleDemoLogin(UserRole.ADMIN)}
								isLoading={isLoading}
								className='flex items-center justify-center gap-2'
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
						<div className='relative my-6'>
							<div className='absolute inset-0 flex items-center'>
								<div className='w-full border-t border-secondary-200' />
							</div>
							<div className='relative flex justify-center text-sm'>
								<span className='px-4 bg-white text-secondary-500'>
									Or login with credentials
								</span>
							</div>
						</div>

						{/* Actual Login Form (for production) */}
						<form className='space-y-4'>
							<Input
								label='Email'
								type='email'
								placeholder='your@email.com'
								disabled
							/>

							<Input
								label='Password'
								type='password'
								placeholder='••••••••'
								disabled
							/>

							<Button fullWidth disabled className='opacity-50'>
								Login (Coming Soon)
							</Button>
						</form>

						<p className='text-center text-sm text-secondary-600 mt-6'>
							Don't have an account?{" "}
							<Link
								href='/login'
								className='text-primary-600 hover:text-primary-700 font-medium'
							>
								Login
							</Link>
						</p>
					</CardContent>
				</Card>

				<p className='text-center text-sm text-secondary-600 mt-6'>
					<Link href='/' className='hover:text-primary-600 transition-colors'>
						← Back to Home
					</Link>
				</p>
			</div>
		</div>
	);
}
