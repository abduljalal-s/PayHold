import { z } from 'zod';
import { NIGERIAN_STATES, VALIDATION_PATTERNS, ERROR_MESSAGES } from './constants';

// ============================================================================
// ZOD VALIDATION SCHEMAS
// ============================================================================

/**
 * Transaction creation schema
 */
export const createTransactionSchema = z.object({
  itemName: z
    .string()
    .min(3, 'Item name must be at least 3 characters')
    .max(100, 'Item name must not exceed 100 characters'),

  itemDescription: z
    .string()
    .min(10, 'Please provide a detailed description (at least 10 characters)')
    .max(1000, 'Description must not exceed 1000 characters'),

  itemPrice: z
    .number({
      required_error: ERROR_MESSAGES.REQUIRED_FIELD,
      invalid_type_error: ERROR_MESSAGES.INVALID_PRICE,
    })
    .min(100, ERROR_MESSAGES.MIN_PRICE)
    .max(10000000, 'Maximum price is ₦10,000,000'),

  sellerPhone: z
    .string()
    .regex(VALIDATION_PATTERNS.nigerianPhone, ERROR_MESSAGES.INVALID_PHONE),

  sellerEmail: z
    .string()
    .email(ERROR_MESSAGES.INVALID_EMAIL)
    .optional()
    .or(z.literal('')),

  deliveryAddress: z
    .string()
    .min(10, 'Please provide a complete delivery address')
    .max(200, 'Address must not exceed 200 characters'),

  deliveryCity: z
    .string()
    .min(2, 'Please select or enter a city')
    .max(50, 'City name is too long'),

  deliveryState: z.enum(NIGERIAN_STATES as unknown as [string, ...string[]], {
    errorMap: () => ({ message: 'Please select a valid state' }),
  }),
});

export type CreateTransactionFormData = z.infer<typeof createTransactionSchema>;

/**
 * Login schema
 */
export const loginSchema = z.object({
  email: z.string().email(ERROR_MESSAGES.INVALID_EMAIL),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/**
 * Register schema
 */
export const registerSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name is too long'),

  email: z.string().email(ERROR_MESSAGES.INVALID_EMAIL),

  phone: z
    .string()
    .regex(VALIDATION_PATTERNS.nigerianPhone, ERROR_MESSAGES.INVALID_PHONE),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),

  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export type RegisterFormData = z.infer<typeof registerSchema>;

/**
 * Dispute submission schema
 */
export const disputeSchema = z.object({
  transactionId: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),

  reason: z
    .string()
    .min(20, 'Please provide detailed reason (at least 20 characters)')
    .max(1000, 'Reason must not exceed 1000 characters'),

  evidence: z.array(z.string().url()).optional(),
});

export type DisputeFormData = z.infer<typeof disputeSchema>;

/**
 * Admin confirmation schema
 */
export const adminConfirmationSchema = z.object({
  transactionId: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),
  
  notes: z
    .string()
    .max(500, 'Notes must not exceed 500 characters')
    .optional(),
});

export type AdminConfirmationFormData = z.infer<typeof adminConfirmationSchema>;

/**
 * Dispatch assignment schema
 */
export const dispatchAssignmentSchema = z.object({
  transactionId: z.string().min(1, ERROR_MESSAGES.REQUIRED_FIELD),

  riderName: z
    .string()
    .min(3, 'Rider name must be at least 3 characters')
    .max(100, 'Rider name is too long'),

  riderPhone: z
    .string()
    .regex(VALIDATION_PATTERNS.nigerianPhone, ERROR_MESSAGES.INVALID_PHONE),

  estimatedDeliveryDate: z.date({
    required_error: 'Please select estimated delivery date',
  }),
});

export type DispatchAssignmentFormData = z.infer<typeof dispatchAssignmentSchema>;

/**
 * Contact form schema
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(100, 'Name is too long'),

  email: z.string().email(ERROR_MESSAGES.INVALID_EMAIL),

  phone: z
    .string()
    .regex(VALIDATION_PATTERNS.nigerianPhone, ERROR_MESSAGES.INVALID_PHONE)
    .optional()
    .or(z.literal('')),

  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject is too long'),

  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(2000, 'Message must not exceed 2000 characters'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
