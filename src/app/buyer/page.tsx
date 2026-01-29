'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import { useAuthStore, useTransactionStore } from '@/store';
import { formatCurrency, formatRelativeTime } from '@/lib/utils';
import { TransactionStatus } from '@/types';

export default function BuyerDashboard() {
  const user = useAuthStore((state) => state.user);
  const transactions = useTransactionStore((state) => state.transactions);
  const [filter, setFilter] = useState<'all' | TransactionStatus>('all');

  const userTransactions = transactions.filter((t) => t.buyerId === user?.id);

  const filteredTransactions =
    filter === 'all'
      ? userTransactions
      : userTransactions.filter((t) => t.status === filter);

  const stats = {
    total: userTransactions.length,
    active: userTransactions.filter(
      (t) =>
        t.status !== TransactionStatus.COMPLETED &&
        t.status !== TransactionStatus.CANCELLED
    ).length,
    completed: userTransactions.filter((t) => t.status === TransactionStatus.COMPLETED).length,
    totalSpent: userTransactions
      .filter((t) => t.status === TransactionStatus.COMPLETED)
      .reduce((sum, t) => sum + t.totalAmount, 0),
  };

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <div className="bg-white border-b border-secondary-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-secondary-900">
                Buyer Dashboard
              </h1>
              <p className="text-secondary-600 mt-1">
                Welcome back, {user?.name || 'Buyer'}!
              </p>
            </div>
            <Link href="/create-transaction">
              <Button>Create Transaction</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-secondary-900">{stats.total}</div>
              <div className="text-sm text-secondary-600 mt-1">Total Transactions</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-warning-DEFAULT">{stats.active}</div>
              <div className="text-sm text-secondary-600 mt-1">Active</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success-DEFAULT">{stats.completed}</div>
              <div className="text-sm text-secondary-600 mt-1">Completed</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary-600">
                {formatCurrency(stats.totalSpent)}
              </div>
              <div className="text-sm text-secondary-600 mt-1">Total Spent</div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>My Transactions</CardTitle>
              
              {/* Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="px-3 py-2 border border-secondary-300 rounded-lg text-sm"
              >
                <option value="all">All Transactions</option>
                <option value={TransactionStatus.PENDING_PAYMENT}>Pending Payment</option>
                <option value={TransactionStatus.PAYMENT_CONFIRMED}>Payment Confirmed</option>
                <option value={TransactionStatus.IN_DISPATCH}>In Dispatch</option>
                <option value={TransactionStatus.DELIVERED}>Delivered</option>
                <option value={TransactionStatus.COMPLETED}>Completed</option>
              </select>
            </div>
          </CardHeader>

          <CardContent>
            {filteredTransactions.length === 0 ? (
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-secondary-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">No transactions found</h3>
                <p className="text-secondary-600 mb-4">Start your first secure transaction</p>
                <Link href="/create-transaction">
                  <Button>Create Transaction</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredTransactions.map((transaction) => (
                  <Link
                    key={transaction.id}
                    href={`/buyer/transactions/${transaction.id}`}
                    className="block p-4 border border-secondary-200 rounded-lg hover:border-primary-500 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-secondary-900 mb-1">
                          {transaction.itemName}
                        </h3>
                        <p className="text-sm text-secondary-600">
                          ID: {transaction.id}
                        </p>
                      </div>
                      <StatusBadge status={transaction.status} />
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-secondary-200">
                      <div className="text-sm text-secondary-600">
                        {formatRelativeTime(transaction.createdAt)}
                      </div>
                      <div className="text-lg font-semibold text-secondary-900">
                        {formatCurrency(transaction.totalAmount)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
