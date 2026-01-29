import {
  User,
  Transaction,
  TimelineEntry,
  UserRole,
  TransactionStatus,
  PaymentStatus,
  DisputeStatus,
  Notification,
} from '@/types';
import { generateTransactionId } from './utils';

// ============================================================================
// MOCK DATA FOR DEVELOPMENT
// Replace with actual API calls in production
// ============================================================================

/**
 * Mock users for different roles
 */
export const MOCK_USERS: User[] = [
  {
    id: 'buyer-001',
    name: 'Chioma Okonkwo',
    email: 'chioma@example.com',
    phone: '08012345678',
    role: UserRole.BUYER,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'seller-001',
    name: 'Emeka Nwosu',
    email: 'emeka@example.com',
    phone: '08098765432',
    role: UserRole.SELLER,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
  },
  {
    id: 'admin-001',
    name: 'Admin User',
    email: 'admin@escrowplatform.ng',
    phone: '08011112222',
    role: UserRole.ADMIN,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
];

/**
 * Mock transactions with various statuses
 */
export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: generateTransactionId(),
    buyerId: 'buyer-001',
    sellerId: 'seller-001',
    itemName: 'iPhone 15 Pro Max 256GB',
    itemDescription: 'Brand new iPhone 15 Pro Max, Natural Titanium color, 256GB storage. Sealed box with full warranty.',
    itemPrice: 1850000,
    deliveryAddress: '15 Admiralty Way, Lekki Phase 1',
    deliveryCity: 'Lagos',
    deliveryState: 'Lagos',
    sellerPhone: '08098765432',
    sellerEmail: 'emeka@example.com',
    escrowFee: 46250,
    deliveryFee: 2000,
    totalAmount: 1898250,
    status: TransactionStatus.PENDING_PAYMENT,
    paymentStatus: PaymentStatus.PENDING,
    goodsPhotos: [],
    goodsVideos: [],
    disputeRaised: false,
    createdAt: new Date('2024-01-20T10:30:00'),
    updatedAt: new Date('2024-01-20T10:30:00'),
  },
  {
    id: generateTransactionId(),
    buyerId: 'buyer-001',
    sellerId: 'seller-001',
    itemName: 'MacBook Pro 14-inch M3',
    itemDescription: 'MacBook Pro 14-inch with M3 chip, 16GB RAM, 512GB SSD. Space Gray. Lightly used for 3 months.',
    itemPrice: 2500000,
    deliveryAddress: '23 Gimbiya Street, Area 11',
    deliveryCity: 'Abuja',
    deliveryState: 'FCT',
    sellerPhone: '08098765432',
    sellerEmail: 'emeka@example.com',
    escrowFee: 62500,
    deliveryFee: 2500,
    totalAmount: 2565000,
    status: TransactionStatus.PAYMENT_CONFIRMED,
    paymentStatus: PaymentStatus.CONFIRMED,
    goodsPhotos: [],
    goodsVideos: [],
    disputeRaised: false,
    createdAt: new Date('2024-01-19T14:20:00'),
    updatedAt: new Date('2024-01-20T09:15:00'),
    paidAt: new Date('2024-01-20T09:15:00'),
  },
  {
    id: generateTransactionId(),
    buyerId: 'buyer-001',
    sellerId: 'seller-001',
    itemName: 'Samsung 65" QLED 4K Smart TV',
    itemDescription: 'Samsung 65-inch QLED 4K Smart TV. Excellent condition, used for 6 months. Includes wall mount and remote.',
    itemPrice: 850000,
    deliveryAddress: '45 Trans Amadi Industrial Layout',
    deliveryCity: 'Port Harcourt',
    deliveryState: 'Rivers',
    sellerPhone: '08098765432',
    sellerEmail: 'emeka@example.com',
    escrowFee: 21250,
    deliveryFee: 2200,
    totalAmount: 873450,
    status: TransactionStatus.GOODS_RECEIVED,
    paymentStatus: PaymentStatus.CONFIRMED,
    goodsPhotos: ['/images/tv-front.jpg', '/images/tv-side.jpg'],
    goodsVideos: ['/videos/tv-demo.mp4'],
    dispatchRiderId: 'rider-001',
    dispatchRiderName: 'Tunde Ibrahim',
    dispatchRiderPhone: '08055556666',
    disputeRaised: false,
    createdAt: new Date('2024-01-18T11:00:00'),
    updatedAt: new Date('2024-01-20T08:30:00'),
    paidAt: new Date('2024-01-18T15:45:00'),
    goodsReceivedAt: new Date('2024-01-19T16:20:00'),
  },
  {
    id: generateTransactionId(),
    buyerId: 'buyer-001',
    sellerId: 'seller-001',
    itemName: 'PlayStation 5 Digital Edition',
    itemDescription: 'PS5 Digital Edition with 2 controllers and 5 games. Very good condition.',
    itemPrice: 650000,
    deliveryAddress: '78 Old Aba Road, Rumuokoro',
    deliveryCity: 'Port Harcourt',
    deliveryState: 'Rivers',
    sellerPhone: '08098765432',
    sellerEmail: 'emeka@example.com',
    escrowFee: 16250,
    deliveryFee: 2200,
    totalAmount: 668450,
    status: TransactionStatus.IN_DISPATCH,
    paymentStatus: PaymentStatus.CONFIRMED,
    goodsPhotos: ['/images/ps5-1.jpg', '/images/ps5-2.jpg'],
    goodsVideos: [],
    dispatchRiderId: 'rider-002',
    dispatchRiderName: 'Fatima Mohammed',
    dispatchRiderPhone: '08077778888',
    estimatedDeliveryDate: new Date('2024-01-21T18:00:00'),
    disputeRaised: false,
    createdAt: new Date('2024-01-17T09:30:00'),
    updatedAt: new Date('2024-01-20T07:00:00'),
    paidAt: new Date('2024-01-17T14:20:00'),
    goodsReceivedAt: new Date('2024-01-18T10:15:00'),
    dispatchedAt: new Date('2024-01-20T07:00:00'),
  },
  {
    id: generateTransactionId(),
    buyerId: 'buyer-001',
    sellerId: 'seller-001',
    itemName: 'Canon EOS R6 Camera Body',
    itemDescription: 'Canon EOS R6 mirrorless camera body only. Low shutter count, excellent condition.',
    itemPrice: 1200000,
    deliveryAddress: '12 Awolowo Road, Ikoyi',
    deliveryCity: 'Lagos',
    deliveryState: 'Lagos',
    sellerPhone: '08098765432',
    sellerEmail: 'emeka@example.com',
    escrowFee: 30000,
    deliveryFee: 2000,
    totalAmount: 1232000,
    status: TransactionStatus.DELIVERED,
    paymentStatus: PaymentStatus.CONFIRMED,
    goodsPhotos: ['/images/camera-1.jpg'],
    goodsVideos: [],
    dispatchRiderId: 'rider-001',
    dispatchRiderName: 'Tunde Ibrahim',
    dispatchRiderPhone: '08055556666',
    estimatedDeliveryDate: new Date('2024-01-19T16:00:00'),
    actualDeliveryDate: new Date('2024-01-19T15:30:00'),
    deliveryProof: '/images/delivery-proof.jpg',
    disputeRaised: false,
    createdAt: new Date('2024-01-16T13:00:00'),
    updatedAt: new Date('2024-01-19T15:30:00'),
    paidAt: new Date('2024-01-16T16:30:00'),
    goodsReceivedAt: new Date('2024-01-17T11:00:00'),
    dispatchedAt: new Date('2024-01-19T09:00:00'),
    deliveredAt: new Date('2024-01-19T15:30:00'),
  },
  {
    id: generateTransactionId(),
    buyerId: 'buyer-001',
    sellerId: 'seller-001',
    itemName: 'Dell XPS 15 Laptop',
    itemDescription: 'Dell XPS 15, Intel i7, 32GB RAM, 1TB SSD. Perfect condition.',
    itemPrice: 1500000,
    deliveryAddress: '34 Adeola Odeku Street, Victoria Island',
    deliveryCity: 'Lagos',
    deliveryState: 'Lagos',
    sellerPhone: '08098765432',
    sellerEmail: 'emeka@example.com',
    escrowFee: 37500,
    deliveryFee: 2000,
    totalAmount: 1539500,
    status: TransactionStatus.COMPLETED,
    paymentStatus: PaymentStatus.CONFIRMED,
    goodsPhotos: ['/images/laptop-1.jpg'],
    goodsVideos: [],
    dispatchRiderId: 'rider-002',
    dispatchRiderName: 'Fatima Mohammed',
    dispatchRiderPhone: '08077778888',
    estimatedDeliveryDate: new Date('2024-01-18T17:00:00'),
    actualDeliveryDate: new Date('2024-01-18T16:45:00'),
    deliveryProof: '/images/delivery-proof-2.jpg',
    disputeRaised: false,
    createdAt: new Date('2024-01-15T10:00:00'),
    updatedAt: new Date('2024-01-19T10:00:00'),
    paidAt: new Date('2024-01-15T12:30:00'),
    goodsReceivedAt: new Date('2024-01-16T14:00:00'),
    dispatchedAt: new Date('2024-01-18T08:00:00'),
    deliveredAt: new Date('2024-01-18T16:45:00'),
    completedAt: new Date('2024-01-19T10:00:00'),
  },
];

/**
 * Mock timeline entries for transaction audit trail
 */
export const MOCK_TIMELINE: Record<string, TimelineEntry[]> = {
  [MOCK_TRANSACTIONS[2].id]: [
    {
      id: 'timeline-001',
      transactionId: MOCK_TRANSACTIONS[2].id,
      timestamp: new Date('2024-01-18T11:00:00'),
      status: TransactionStatus.PENDING_PAYMENT,
      actor: UserRole.BUYER,
      actorId: 'buyer-001',
      actorName: 'Chioma Okonkwo',
      description: 'Transaction created',
    },
    {
      id: 'timeline-002',
      transactionId: MOCK_TRANSACTIONS[2].id,
      timestamp: new Date('2024-01-18T15:45:00'),
      status: TransactionStatus.PAYMENT_CONFIRMED,
      actor: UserRole.ADMIN,
      actorId: 'admin-001',
      actorName: 'Admin User',
      description: 'Payment confirmed',
      metadata: { amount: 873450 },
    },
    {
      id: 'timeline-003',
      transactionId: MOCK_TRANSACTIONS[2].id,
      timestamp: new Date('2024-01-19T16:20:00'),
      status: TransactionStatus.GOODS_RECEIVED,
      actor: UserRole.ADMIN,
      actorId: 'admin-001',
      actorName: 'Admin User',
      description: 'Goods received and verified',
      metadata: { photos: 2, videos: 1 },
    },
  ],
};

/**
 * Mock notifications
 */
export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-001',
    userId: 'buyer-001',
    transactionId: MOCK_TRANSACTIONS[0].id,
    title: 'Transaction Created',
    message: 'Your transaction for iPhone 15 Pro Max has been created. Please complete payment.',
    read: false,
    createdAt: new Date('2024-01-20T10:30:00'),
  },
  {
    id: 'notif-002',
    userId: 'buyer-001',
    transactionId: MOCK_TRANSACTIONS[1].id,
    title: 'Payment Confirmed',
    message: 'Your payment for MacBook Pro has been confirmed. Waiting for seller to drop off goods.',
    read: false,
    createdAt: new Date('2024-01-20T09:15:00'),
  },
  {
    id: 'notif-003',
    userId: 'buyer-001',
    transactionId: MOCK_TRANSACTIONS[3].id,
    title: 'Item Dispatched',
    message: 'Your PlayStation 5 is on the way! Estimated delivery: Jan 21, 6:00 PM',
    read: true,
    createdAt: new Date('2024-01-20T07:00:00'),
  },
];

/**
 * Helper function to get mock user by role (for demo login)
 */
export function getMockUserByRole(role: UserRole): User | undefined {
  return MOCK_USERS.find((user) => user.role === role);
}

/**
 * Helper function to filter transactions by user and role
 */
export function getTransactionsForUser(userId: string, role: UserRole): Transaction[] {
  if (role === UserRole.ADMIN) {
    return MOCK_TRANSACTIONS;
  }
  
  if (role === UserRole.BUYER) {
    return MOCK_TRANSACTIONS.filter((t) => t.buyerId === userId);
  }
  
  if (role === UserRole.SELLER) {
    return MOCK_TRANSACTIONS.filter((t) => t.sellerId === userId);
  }
  
  return [];
}
