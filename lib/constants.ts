import { TransactionStatus, PaymentStatus, DisputeStatus } from '@/types';

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

/**
 * Fee structure for the platform
 * These values should be configurable via admin panel in production
 */
export const FEE_STRUCTURE = {
  escrowFeePercentage: 2.5, // 2.5% of item price
  minimumEscrowFee: 500, // Minimum ₦500
  
  // Delivery fees by major Nigerian cities (in Naira)
  deliveryFeeByCity: {
    'Lagos': 2000,
    'Abuja': 2500,
    'Port Harcourt': 2200,
    'Kano': 2300,
    'Ibadan': 1800,
    'Benin City': 2000,
    'Kaduna': 2200,
    'Enugu': 2100,
    'Calabar': 2300,
    'Warri': 2100,
  },
  
  defaultDeliveryFee: 2500, // For cities not listed
} as const;

/**
 * Nigerian states for dropdown
 */
export const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa',
  'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo',
  'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa',
  'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
  'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
  'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
] as const;

/**
 * Major Nigerian cities for delivery fee calculation
 */
export const MAJOR_CITIES = Object.keys(FEE_STRUCTURE.deliveryFeeByCity);

/**
 * Transaction status display configuration
 */
export const STATUS_CONFIG = {
  [TransactionStatus.PENDING_PAYMENT]: {
    label: 'Pending Payment',
    color: 'warning',
    icon: '⏳',
    description: 'Waiting for buyer payment confirmation',
  },
  [TransactionStatus.PAYMENT_CONFIRMED]: {
    label: 'Payment Confirmed',
    color: 'info',
    icon: '✓',
    description: 'Payment received. Waiting for seller to drop off goods',
  },
  [TransactionStatus.GOODS_RECEIVED]: {
    label: 'Goods Received',
    color: 'info',
    icon: '📦',
    description: 'Goods received at platform. Preparing for dispatch',
  },
  [TransactionStatus.IN_DISPATCH]: {
    label: 'In Dispatch',
    color: 'info',
    icon: '🚚',
    description: 'Goods are on the way to buyer',
  },
  [TransactionStatus.DELIVERED]: {
    label: 'Delivered',
    color: 'success',
    icon: '✓',
    description: 'Buyer has confirmed delivery',
  },
  [TransactionStatus.COMPLETED]: {
    label: 'Completed',
    color: 'success',
    icon: '✓',
    description: 'Transaction completed. Payment released to seller',
  },
  [TransactionStatus.DISPUTED]: {
    label: 'Disputed',
    color: 'danger',
    icon: '⚠️',
    description: 'Dispute raised. Under review',
  },
  [TransactionStatus.CANCELLED]: {
    label: 'Cancelled',
    color: 'secondary',
    icon: '✕',
    description: 'Transaction cancelled',
  },
} as const;

/**
 * Payment status configuration
 */
export const PAYMENT_STATUS_CONFIG = {
  [PaymentStatus.PENDING]: {
    label: 'Pending',
    color: 'warning',
  },
  [PaymentStatus.PROCESSING]: {
    label: 'Processing',
    color: 'info',
  },
  [PaymentStatus.CONFIRMED]: {
    label: 'Confirmed',
    color: 'success',
  },
  [PaymentStatus.FAILED]: {
    label: 'Failed',
    color: 'danger',
  },
  [PaymentStatus.REFUNDED]: {
    label: 'Refunded',
    color: 'secondary',
  },
} as const;

/**
 * Allowed status transitions (prevents skipping steps)
 */
export const ALLOWED_TRANSITIONS: Record<TransactionStatus, TransactionStatus[]> = {
  [TransactionStatus.PENDING_PAYMENT]: [
    TransactionStatus.PAYMENT_CONFIRMED,
    TransactionStatus.CANCELLED,
  ],
  [TransactionStatus.PAYMENT_CONFIRMED]: [
    TransactionStatus.GOODS_RECEIVED,
    TransactionStatus.DISPUTED,
    TransactionStatus.CANCELLED,
  ],
  [TransactionStatus.GOODS_RECEIVED]: [
    TransactionStatus.IN_DISPATCH,
    TransactionStatus.DISPUTED,
  ],
  [TransactionStatus.IN_DISPATCH]: [
    TransactionStatus.DELIVERED,
    TransactionStatus.DISPUTED,
  ],
  [TransactionStatus.DELIVERED]: [
    TransactionStatus.COMPLETED,
    TransactionStatus.DISPUTED,
  ],
  [TransactionStatus.COMPLETED]: [],
  [TransactionStatus.DISPUTED]: [
    TransactionStatus.IN_DISPATCH,
    TransactionStatus.CANCELLED,
    TransactionStatus.COMPLETED,
  ],
  [TransactionStatus.CANCELLED]: [],
};

/**
 * Dispute time window (in hours)
 */
export const DISPUTE_TIME_WINDOW = 48; // 48 hours after delivery

/**
 * Payment holding period (in hours)
 */
export const PAYMENT_HOLDING_PERIOD = {
  min: 24,
  max: 72,
};

/**
 * API endpoints (to be replaced with actual backend URLs)
 */
export const API_ENDPOINTS = {
  transactions: '/api/transactions',
  users: '/api/users',
  auth: '/api/auth',
  disputes: '/api/disputes',
  notifications: '/api/notifications',
  admin: '/api/admin',
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  authToken: 'escrow_auth_token',
  user: 'escrow_user',
  transactions: 'escrow_transactions_cache',
} as const;

/**
 * Regex patterns for validation
 */
export const VALIDATION_PATTERNS = {
  // Nigerian phone number (11 digits starting with 0)
  nigerianPhone: /^0[7-9][0-1]\d{8}$/,
  
  // Email
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  // Price (positive numbers, up to 2 decimal places)
  price: /^\d+(\.\d{1,2})?$/,
} as const;

/**
 * Error messages
 */
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PHONE: 'Please enter a valid Nigerian phone number (e.g., 08012345678)',
  INVALID_PRICE: 'Please enter a valid price',
  MIN_PRICE: 'Minimum price is ₦100',
  NETWORK_ERROR: 'Network error. Please check your connection and try again',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  TRANSACTION_NOT_FOUND: 'Transaction not found',
  INVALID_STATUS_TRANSITION: 'Invalid status transition',
} as const;

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  TRANSACTION_CREATED: 'Transaction created successfully',
  PAYMENT_CONFIRMED: 'Payment confirmed',
  GOODS_RECEIVED: 'Goods received and verified',
  DISPATCH_ASSIGNED: 'Dispatch rider assigned',
  DELIVERY_CONFIRMED: 'Delivery confirmed',
  PAYMENT_RELEASED: 'Payment released to seller',
  DISPUTE_SUBMITTED: 'Dispute submitted successfully',
} as const;
