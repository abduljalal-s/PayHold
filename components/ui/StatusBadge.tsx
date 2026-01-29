import { PAYMENT_STATUS_CONFIG, STATUS_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { PaymentStatus, TransactionStatus } from "@/types";
import React, { JSX } from "react";

// ============================================================================
// STATUS BADGE COMPONENT
// ============================================================================

interface StatusBadgeProps {
	status: TransactionStatus | PaymentStatus;
	type?: "transaction" | "payment";
	showIcon?: boolean;
	size?: "sm" | "md" | "lg";
}

export default function StatusBadge({
	status,
	type = "transaction",
	showIcon = true,
	size = "md",
}: StatusBadgeProps) {
	const config =
		type === "transaction"
			? STATUS_CONFIG[status as TransactionStatus]
			: PAYMENT_STATUS_CONFIG[status as PaymentStatus];

	if (!config) {
		return null;
	}

	const colorClasses = {
		success: "bg-success-light text-success-dark border-success-DEFAULT",
		warning: "bg-warning-light text-warning-dark border-warning-DEFAULT",
		danger: "bg-danger-light text-danger-dark border-danger-DEFAULT",
		info: "bg-info-light text-info-dark border-info-DEFAULT",
		secondary: "bg-secondary-200 text-secondary-700 border-secondary-400",
	};

	const sizeClasses = {
		sm: "px-2 py-0.5 text-xs",
		md: "px-3 py-1 text-sm",
		lg: "px-4 py-1.5 text-base",
	};

	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 font-medium rounded-full border",
				colorClasses[config.color],
				sizeClasses[size],
			)}
		>
			{showIcon && type === "transaction" && (
				<span className='text-base'>{config.icon}</span>
			)}
			{config.label}
		</span>
	);
}
