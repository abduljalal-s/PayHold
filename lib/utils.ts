import type { TransactionStatus } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { format, formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge";
import { ALLOWED_TRANSITIONS, FEE_STRUCTURE } from "./constants";

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Merge Tailwind classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Format currency in Nigerian Naira
 */
export function formatCurrency(amount: number): string {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(amount);
}

/**
 * Calculate escrow fee based on item price
 */
export function calculateEscrowFee(itemPrice: number): number {
	const calculatedFee = (itemPrice * FEE_STRUCTURE.escrowFeePercentage) / 100;
	return Math.max(calculatedFee, FEE_STRUCTURE.minimumEscrowFee);
}

/**
 * Calculate delivery fee based on city
 */
export function calculateDeliveryFee(city: string): number {
	const normalizedCity = city.trim();
	return (
		FEE_STRUCTURE.deliveryFeeByCity[
			normalizedCity as keyof typeof FEE_STRUCTURE.deliveryFeeByCity
		] || FEE_STRUCTURE.defaultDeliveryFee
	);
}

/**
 * Calculate total transaction amount
 */
export function calculateTotalAmount(
	itemPrice: number,
	city: string,
): {
	itemPrice: number;
	escrowFee: number;
	deliveryFee: number;
	totalAmount: number;
} {
	const escrowFee = calculateEscrowFee(itemPrice);
	const deliveryFee = calculateDeliveryFee(city);
	const totalAmount = itemPrice + escrowFee + deliveryFee;

	return {
		itemPrice,
		escrowFee,
		deliveryFee,
		totalAmount,
	};
}

/**
 * Format date for display
 */
export function formatDate(date: Date | string, formatStr = "PPP"): string {
	const dateObj = typeof date === "string" ? new Date(date) : date;
	return format(dateObj, formatStr);
}

/**
 * Format date as relative time (e.g., "2 hours ago")
 */
export function formatRelativeTime(date: Date | string): string {
	const dateObj = typeof date === "string" ? new Date(date) : date;
	return formatDistanceToNow(dateObj, { addSuffix: true });
}

/**
 * Generate unique transaction ID
 * Format: ESC-YYYYMMDD-XXXXX (e.g., ESC-20240115-A1B2C)
 */
export function generateTransactionId(): string {
	const date = new Date();
	const dateStr = format(date, "yyyyMMdd");
	const random = Math.random().toString(36).substring(2, 7).toUpperCase();
	return `ESC-${dateStr}-${random}`;
}

/**
 * Validate if status transition is allowed
 */
export function isValidStatusTransition(
	currentStatus: TransactionStatus,
	newStatus: TransactionStatus,
): boolean {
	const allowedStatuses = ALLOWED_TRANSITIONS[currentStatus] || [];
	return allowedStatuses.includes(newStatus);
}

/**
 * Get status color for UI
 */
export function getStatusColor(
	status: TransactionStatus,
): "success" | "warning" | "danger" | "info" | "secondary" {
	if (
		status === TransactionStatus.COMPLETED ||
		status === TransactionStatus.DELIVERED
	) {
		return "success";
	}
	if (status === TransactionStatus.PENDING_PAYMENT) {
		return "warning";
	}
	if (
		status === TransactionStatus.DISPUTED ||
		status === TransactionStatus.CANCELLED
	) {
		return "danger";
	}
	if (status === TransactionStatus.CANCELLED) {
		return "secondary";
	}
	return "info";
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;
	return text.substring(0, maxLength - 3) + "...";
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
	// Remove any non-digit characters
	const cleaned = phone.replace(/\D/g, "");

	// Format as: 0801 234 5678
	if (cleaned.length === 11) {
		return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
	}

	return phone;
}

/**
 * Validate Nigerian phone number
 */
export function isValidNigerianPhone(phone: string): boolean {
	const cleaned = phone.replace(/\D/g, "");
	return /^0[7-9][0-1]\d{8}$/.test(cleaned);
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch (error) {
		console.error("Failed to copy to clipboard:", error);
		return false;
	}
}

/**
 * Download file from URL
 */
export function downloadFile(url: string, filename: string): void {
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	wait: number,
): (...args: Parameters<T>) => void {
	let timeout: NodeJS.Timeout;

	return function executedFunction(...args: Parameters<T>) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

/**
 * Check if user can dispute (within time window)
 */
export function canRaiseDispute(deliveredAt: Date | null): boolean {
	if (!deliveredAt) return false;

	const hoursSinceDelivery =
		(Date.now() - new Date(deliveredAt).getTime()) / (1000 * 60 * 60);
	const DISPUTE_WINDOW_HOURS = 48;

	return hoursSinceDelivery <= DISPUTE_WINDOW_HOURS;
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
	const parts = name.trim().split(" ");
	if (parts.length === 1) {
		return parts[0].substring(0, 2).toUpperCase();
	}
	return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Sleep utility for demos
 */
export function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
