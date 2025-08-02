import React, { useState, useEffect } from 'react';
import { Website } from './components/Website';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { useAuth } from './hooks/useAuth';
import { defaultSiteContent } from './data/siteContent';
import { SiteContent } from './types';

function App() {
  const { isAuthenticated, isLoading, login, logout } = useAuth();
  const [showAdmin, setShowAdmin] = useState(false);
  const [siteContent, setSiteContent] = useState<SiteContent>(defaultSiteContent);

  // Check if accessing admin route
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin' || path.startsWith('/admin/')) {
      setShowAdmin(true);
    }
  }, []);

  // Handle admin route navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setShowAdmin(path === '/admin' || path.startsWith('/admin/'));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleAdminAccess = () => {
    setShowAdmin(true);
    window.history.pushState({}, '', '/admin');
  };

  const handleBackToSite = () => {
    setShowAdmin(false);
    window.history.pushState({}, '', '/');
  };

  const handleLogin = (password: string): boolean => {
    const success = login(password);
    return success;
  };

  const handleLogout = () => {
    logout();
    handleBackToSite();
  };

  const handleUpdateContent = (newContent: SiteContent) => {
    setSiteContent(newContent);
    // In a real app, this would save to a database
    localStorage.setItem('siteContent', JSON.stringify(newContent));
  };

  // Load saved content from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('siteContent');
    if (saved) {
      try {
        setSiteContent(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  // Show admin login if accessing admin and not authenticated
  if (showAdmin && !isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  // Show admin dashboard if authenticated and in admin mode
  if (showAdmin && isAuthenticated) {
    return (
      <AdminDashboard
        onLogout={handleLogout}
        siteContent={siteContent}
        onUpdateContent={handleUpdateContent}
      />
    );
  }

  // Show main website with admin access button (for demo purposes)
  return (
    <div className="relative">
      <Website siteContent={siteContent} />
      
      {/* Admin Access Button (Demo only - remove in production) */}
      <button
        onClick={handleAdminAccess}
        className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg font-medium transition-colors duration-200 z-50"
      >
        Admin Dashboard
      </button>
    </div>
  );
}

export default App;