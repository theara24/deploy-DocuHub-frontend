'use client';

import type { ReactNode } from 'react';
import { useAuth } from '@/components/contexts/auth-context';
import { Sidebar } from './sidebar';
import {
  SidebarProvider,
  useSidebar,
} from '@/components/contexts/sidebar-context';

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: 'admin' | 'mentor' | 'student' | 'public';
  userName?: string;
  userAvatar?: string;
}

function DashboardLayoutContent({
  children,
  userRole,
  userName,
  userAvatar,
}: DashboardLayoutProps) {
  const { user, isLoading } = useAuth();
  const { isOpen } = useSidebar();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        userRole={userRole}
        userName={userName || user.name || 'User'}
        userAvatar={userAvatar || '/placeholder.svg'} // Remove user.avatar reference
      />

      {/* Main content */}
      <div className={isOpen ? 'md:pl-64' : 'md:pl-16'}>
        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          <div className="space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function DashboardLayout({
  children,
  userRole,
  userName,
  userAvatar,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent
        userRole={userRole}
        userName={userName}
        userAvatar={userAvatar}
      >
        {children}
      </DashboardLayoutContent>
    </SidebarProvider>
  );
}

export default DashboardLayout;
