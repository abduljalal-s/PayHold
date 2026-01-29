// ============================================================================
// CORE TYPES FOR NIGERIAN ESCROW + DISPATCH PLATFORM
// ============================================================================

/**
 * User roles in the platform
 * - BUYER: Creates transactions and pays
 * - SELLER: Receives notifications and drops off goods
 * - ADMIN: Manages entire transaction lifecycle
 */
export enum UserRole {
	BUYER = "BUYER",
	SELLER = "SELLER",
	ADMIN = "ADMIN",
}

/**
 * Transaction status - strictly ordered, no skipping allowed
 * Each status transition is logged for audit trail
 */
export enum TransactionStatus {
	PENDING_PAYMENT = "PENDING_PAYMENT",
	COMPLETED = "COMPLETED",
	DELIVERED = "DELIVERED",
	DISPUTED = "DISPUTED",
	CANCELLED = "CANCELLED",
}
/**
 * Payment status tracking
 */
export enum PaymentStatus {
	PENDING = "PENDING",
	PROCESSING = "PROCESSING",
	CONFIRMED = "CONFIRMED",
	FAILED = "FAILED",
	REFUNDED = "REFUNDED",
}

/**
 * Dispute status
 */
export enum DisputeStatus {
	OPEN = "OPEN",
	UNDER_REVIEW = "UNDER_REVIEW",
	RESOLVED = "RESOLVED",
	ESCALATED = "ESCALATED",
}

/**
 * User interface
 */
export interface User {
	id: string;
	name: string;
	email: string;
	phone: string;
	role: UserRole;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * Transaction interface - core business entity
 */
export interface Transaction {
	id: string;

	// Parties involved
	buyerId: string;
	sellerId: string;

	// Item details
	itemName: string;
	itemDescription: string;
	itemPrice: number; // In Naira

	// Delivery details
	deliveryAddress: string;
	deliveryCity: string;
	deliveryState: string;

	// Contact information
	sellerPhone: string;
	sellerEmail: string;

	// Financial breakdown
	escrowFee: number; // Platform fee
	deliveryFee: number; // Dispatch cost
	totalAmount: number; // itemPrice + escrowFee + deliveryFee

	// Status tracking
	status: TransactionStatus;
	paymentStatus: PaymentStatus;

	// Dispatch information
	dispatchRiderId?: string;
	dispatchRiderName?: string;
	dispatchRiderPhone?: string;
	estimatedDeliveryDate?: Date;
	actualDeliveryDate?: Date;

	// Proof and verification
	goodsPhotos: string[]; // URLs to photos of goods condition
	goodsVideos: string[]; // URLs to videos of goods condition
	deliveryProof?: string; // URL to delivery confirmation photo

	// Dispute handling
	disputeRaised: boolean;
	disputeReason?: string;
	disputeStatus?: DisputeStatus;
	disputeResolution?: string;

	// Timestamps
	createdAt: Date;
	updatedAt: Date;
	paidAt?: Date;
	goodsReceivedAt?: Date;
	dispatchedAt?: Date;
	deliveredAt?: Date;
	completedAt?: Date;
}

/**
 * Transaction timeline entry for audit trail
 */
export interface TimelineEntry {
	id: string;
	transactionId: string;
	timestamp: Date;
	status: TransactionStatus;
	actor: UserRole;
	actorId: string;
	actorName: string;
	description: string;
	metadata?: Record<string, any>;
}

/**
 * Fee structure
 */
export interface FeeStructure {
	escrowFeePercentage: number; // e.g., 2.5%
	minimumEscrowFee: number; // e.g., ₦500
	deliveryFeeByCity: Record<string, number>; // City-specific delivery fees
	defaultDeliveryFee: number; // Fallback delivery fee
}

/**
 * Form inputs for creating a transaction
 */
export interface CreateTransactionInput {
	itemName: string;
	itemDescription: string;
	itemPrice: number;
	sellerPhone: string;
	sellerEmail: string;
	deliveryAddress: string;
	deliveryCity: string;
	deliveryState: string;
}

/**
 * Dispute submission
 */
export interface CreateDisputeInput {
	transactionId: string;
	reason: string;
	evidence?: string[];
}

/**
 * Admin action inputs
 */
export interface AdminActionInput {
	transactionId: string;
	action:
		| "CONFIRM_PAYMENT"
		| "CONFIRM_GOODS_RECEIVED"
		| "ASSIGN_DISPATCH"
		| "MARK_DISPATCHED"
		| "RELEASE_PAYMENT";
	metadata?: Record<string, any>;
}

/**
 * Statistics for dashboards
 */
export interface DashboardStats {
	totalTransactions: number;
	activeTransactions: number;
	completedTransactions: number;
	totalValue: number;
	pendingDisputes: number;
}

/**
 * Notification interface
 */
export interface Notification {
	id: string;
	userId: string;
	transactionId: string;
	title: string;
	message: string;
	read: boolean;
	createdAt: Date;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
	success: boolean;
	data?: T;
	error?: string;
	message?: string;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
	page: number;
	pageSize: number;
	totalPages: number;
	totalItems: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
	items: T[];
	meta: PaginationMeta;
}
