import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { Transaction, User, UserRole, Notification } from '@/types';

// ============================================================================
// ZUSTAND STORES FOR STATE MANAGEMENT
// ============================================================================

/**
 * Auth Store
 * Manages user authentication and role-based access
 * In production, this would integrate with your auth provider
 */
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        
        login: (user) =>
          set({ user, isAuthenticated: true }, false, 'auth/login'),
        
        logout: () =>
          set({ user: null, isAuthenticated: false }, false, 'auth/logout'),
        
        updateUser: (updates) =>
          set(
            (state) => ({
              user: state.user ? { ...state.user, ...updates } : null,
            }),
            false,
            'auth/updateUser'
          ),
      }),
      {
        name: 'auth-storage',
      }
    )
  )
);

/**
 * Transaction Store
 * Manages transaction state with optimistic updates
 */
interface TransactionState {
  transactions: Transaction[];
  selectedTransaction: Transaction | null;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Transaction) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
  selectTransaction: (id: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Filtered getters
  getTransactionsByStatus: (status: Transaction['status']) => Transaction[];
  getUserTransactions: (userId: string, role: UserRole) => Transaction[];
}

export const useTransactionStore = create<TransactionState>()(
  devtools((set, get) => ({
    transactions: [],
    selectedTransaction: null,
    isLoading: false,
    error: null,
    
    setTransactions: (transactions) =>
      set({ transactions }, false, 'transaction/setAll'),
    
    addTransaction: (transaction) =>
      set(
        (state) => ({
          transactions: [transaction, ...state.transactions],
        }),
        false,
        'transaction/add'
      ),
    
    updateTransaction: (id, updates) =>
      set(
        (state) => ({
          transactions: state.transactions.map((t) =>
            t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t
          ),
          selectedTransaction:
            state.selectedTransaction?.id === id
              ? { ...state.selectedTransaction, ...updates, updatedAt: new Date() }
              : state.selectedTransaction,
        }),
        false,
        'transaction/update'
      ),
    
    selectTransaction: (id) =>
      set(
        (state) => ({
          selectedTransaction:
            id === null
              ? null
              : state.transactions.find((t) => t.id === id) || null,
        }),
        false,
        'transaction/select'
      ),
    
    setLoading: (loading) => set({ isLoading: loading }),
    
    setError: (error) => set({ error }),
    
    getTransactionsByStatus: (status) => {
      return get().transactions.filter((t) => t.status === status);
    },
    
    getUserTransactions: (userId, role) => {
      const transactions = get().transactions;
      
      switch (role) {
        case 'BUYER':
          return transactions.filter((t) => t.buyerId === userId);
        case 'SELLER':
          return transactions.filter((t) => t.sellerId === userId);
        case 'ADMIN':
          return transactions; // Admins see all
        default:
          return [];
      }
    },
  }))
);

/**
 * Notification Store
 * Manages user notifications
 */
interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationState>()(
  devtools(
    persist(
      (set) => ({
        notifications: [],
        unreadCount: 0,
        
        addNotification: (notification) =>
          set(
            (state) => ({
              notifications: [notification, ...state.notifications],
              unreadCount: state.unreadCount + 1,
            }),
            false,
            'notification/add'
          ),
        
        markAsRead: (id) =>
          set(
            (state) => ({
              notifications: state.notifications.map((n) =>
                n.id === id ? { ...n, read: true } : n
              ),
              unreadCount: Math.max(0, state.unreadCount - 1),
            }),
            false,
            'notification/markRead'
          ),
        
        markAllAsRead: () =>
          set(
            (state) => ({
              notifications: state.notifications.map((n) => ({
                ...n,
                read: true,
              })),
              unreadCount: 0,
            }),
            false,
            'notification/markAllRead'
          ),
        
        clearNotifications: () =>
          set(
            { notifications: [], unreadCount: 0 },
            false,
            'notification/clear'
          ),
      }),
      {
        name: 'notification-storage',
      }
    )
  )
);

/**
 * UI Store
 * Manages UI state (modals, sidebars, etc.)
 */
interface UIState {
  isSidebarOpen: boolean;
  activeModal: string | null;
  modalData: any;
  
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  openModal: (modalName: string, data?: any) => void;
  closeModal: () => void;
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    isSidebarOpen: false,
    activeModal: null,
    modalData: null,
    
    toggleSidebar: () =>
      set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    
    setSidebarOpen: (open) => set({ isSidebarOpen: open }),
    
    openModal: (modalName, data) =>
      set({ activeModal: modalName, modalData: data }),
    
    closeModal: () => set({ activeModal: null, modalData: null }),
  }))
);
