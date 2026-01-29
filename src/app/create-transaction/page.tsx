'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import Input, { Textarea, Select } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { createTransactionSchema, type CreateTransactionFormData } from '@/lib/validations';
import { NIGERIAN_STATES, MAJOR_CITIES } from '@/lib/constants';
import { calculateTotalAmount, formatCurrency, generateTransactionId } from '@/lib/utils';
import { useTransactionStore } from '@/store';
import { TransactionStatus, PaymentStatus } from '@/types';

export default function CreateTransactionPage() {
  const router = useRouter();
  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const [step, setStep] = useState<1 | 2>(1);
  const [calculatedFees, setCalculatedFees] = useState<ReturnType<typeof calculateTotalAmount> | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<CreateTransactionFormData>({
    resolver: zodResolver(createTransactionSchema),
    mode: 'onBlur',
  });

  const watchedPrice = watch('itemPrice');
  const watchedCity = watch('deliveryCity');

  // Calculate fees when price or city changes
  const handleCalculateFees = async () => {
    const isValid = await trigger(['itemPrice', 'deliveryCity']);
    
    if (isValid && watchedPrice && watchedCity) {
      const fees = calculateTotalAmount(Number(watchedPrice), watchedCity);
      setCalculatedFees(fees);
      setStep(2);
    }
  };

  const onSubmit = async (data: CreateTransactionFormData) => {
    try {
      // In production, this would call the API
      const newTransaction = {
        id: generateTransactionId(),
        buyerId: 'buyer-001', // Would come from auth
        sellerId: 'pending', // Seller doesn't have account yet
        itemName: data.itemName,
        itemDescription: data.itemDescription,
        itemPrice: data.itemPrice,
        deliveryAddress: data.deliveryAddress,
        deliveryCity: data.deliveryCity,
        deliveryState: data.deliveryState,
        sellerPhone: data.sellerPhone,
        sellerEmail: data.sellerEmail || '',
        escrowFee: calculatedFees!.escrowFee,
        deliveryFee: calculatedFees!.deliveryFee,
        totalAmount: calculatedFees!.totalAmount,
        status: TransactionStatus.PENDING_PAYMENT,
        paymentStatus: PaymentStatus.PENDING,
        goodsPhotos: [],
        goodsVideos: [],
        disputeRaised: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      addTransaction(newTransaction);
      
      // Redirect to buyer dashboard
      router.push(`/buyer/transactions/${newTransaction.id}`);
    } catch (error) {
      console.error('Failed to create transaction:', error);
    }
  };

  return (
    <div className="min-h-screen bg-secondary-50 py-8">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-4">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900">Create Secure Transaction</h1>
        <p className="text-secondary-600 mt-2">Complete the form below to start your secure transaction</p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary-600' : 'text-secondary-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-secondary-200'}`}>
                  1
                </div>
                <span className="hidden sm:inline font-medium">Item Details</span>
              </div>
              
              <div className="h-px bg-secondary-300 w-12 sm:w-24" />
              
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary-600' : 'text-secondary-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-secondary-200'}`}>
                  2
                </div>
                <span className="hidden sm:inline font-medium">Review & Pay</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Item Details */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Transaction Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Item Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Item Information</h3>
                      
                      <div className="space-y-4">
                        <Input
                          label="Item Name"
                          placeholder="e.g., iPhone 15 Pro Max 256GB"
                          {...register('itemName')}
                          error={errors.itemName?.message}
                          required
                        />

                        <Textarea
                          label="Item Description"
                          placeholder="Provide detailed description including condition, accessories, etc."
                          rows={4}
                          {...register('itemDescription')}
                          error={errors.itemDescription?.message}
                          helperText="Be specific to avoid disputes later"
                          required
                        />

                        <Input
                          label="Item Price (₦)"
                          type="number"
                          placeholder="1000000"
                          {...register('itemPrice', { valueAsNumber: true })}
                          error={errors.itemPrice?.message}
                          helperText="Enter the agreed price with seller"
                          required
                        />
                      </div>
                    </div>

                    {/* Seller Information */}
                    <div className="pt-6 border-t border-secondary-200">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Seller Contact</h3>
                      
                      <div className="space-y-4">
                        <Input
                          label="Seller Phone Number"
                          type="tel"
                          placeholder="08012345678"
                          {...register('sellerPhone')}
                          error={errors.sellerPhone?.message}
                          helperText="We'll notify seller to drop off the item"
                          required
                        />

                        <Input
                          label="Seller Email (Optional)"
                          type="email"
                          placeholder="seller@example.com"
                          {...register('sellerEmail')}
                          error={errors.sellerEmail?.message}
                        />
                      </div>
                    </div>

                    {/* Delivery Information */}
                    <div className="pt-6 border-t border-secondary-200">
                      <h3 className="text-lg font-semibold text-secondary-900 mb-4">Delivery Address</h3>
                      
                      <div className="space-y-4">
                        <Textarea
                          label="Full Address"
                          placeholder="15 Admiralty Way, Lekki Phase 1"
                          rows={3}
                          {...register('deliveryAddress')}
                          error={errors.deliveryAddress?.message}
                          helperText="Include building number, street name, and landmarks"
                          required
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Select
                              label="City"
                              {...register('deliveryCity')}
                              error={errors.deliveryCity?.message}
                              required
                              options={[
                                { value: '', label: 'Select city' },
                                ...MAJOR_CITIES.map(city => ({ value: city, label: city })),
                                { value: 'Other', label: 'Other' },
                              ]}
                            />
                          </div>

                          <div>
                            <Select
                              label="State"
                              {...register('deliveryState')}
                              error={errors.deliveryState?.message}
                              required
                              options={[
                                { value: '', label: 'Select state' },
                                ...NIGERIAN_STATES.map(state => ({ value: state, label: state })),
                              ]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                      <Button
                        type="button"
                        onClick={handleCalculateFees}
                        size="lg"
                        disabled={!watchedPrice || !watchedCity}
                      >
                        Continue to Review
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Review & Payment */}
            {step === 2 && calculatedFees && (
              <div className="space-y-6">
                {/* Fee Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle>Fee Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-secondary-700">
                        <span>Item Price</span>
                        <span className="font-medium">{formatCurrency(calculatedFees.itemPrice)}</span>
                      </div>
                      <div className="flex justify-between text-secondary-700">
                        <span>Escrow Fee (2.5%)</span>
                        <span className="font-medium">{formatCurrency(calculatedFees.escrowFee)}</span>
                      </div>
                      <div className="flex justify-between text-secondary-700">
                        <span>Delivery Fee</span>
                        <span className="font-medium">{formatCurrency(calculatedFees.deliveryFee)}</span>
                      </div>
                      <div className="pt-3 border-t border-secondary-200 flex justify-between text-lg font-semibold text-secondary-900">
                        <span>Total Amount</span>
                        <span className="text-primary-600">{formatCurrency(calculatedFees.totalAmount)}</span>
                      </div>
                    </div>

                    {/* Important Notice */}
                    <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                      <h4 className="font-semibold text-primary-900 mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        How Payment Works
                      </h4>
                      <ul className="text-sm text-primary-800 space-y-1 ml-7">
                        <li>• Your payment is held securely by our platform</li>
                        <li>• Seller will NOT receive payment until delivery is confirmed</li>
                        <li>• Goods will be verified before dispatch</li>
                        <li>• You have 48 hours to raise disputes after delivery</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Warning */}
                <div className="bg-warning-light border border-warning-DEFAULT rounded-lg p-4">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-warning-dark flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-warning-dark">Important</h4>
                      <p className="text-sm text-warning-dark mt-1">
                        By creating this transaction, you agree to our{' '}
                        <Link href="/terms" className="underline">Terms & Conditions</Link>.
                        Ensure all details are correct as they cannot be changed after payment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    fullWidth
                    className="sm:w-auto"
                  >
                    Back to Edit
                  </Button>
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    fullWidth
                    size="lg"
                    className="sm:flex-1"
                  >
                    Proceed to Payment
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
