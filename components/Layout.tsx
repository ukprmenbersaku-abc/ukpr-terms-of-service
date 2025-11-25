import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, ChevronLeft } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {!isHome && (
              <Link 
                to="/" 
                className="mr-2 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
                aria-label="ホームに戻る"
              >
                <ChevronLeft size={20} />
              </Link>
            )}
            <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors">
              <ShieldCheck size={28} />
              <h1 className="text-xl font-bold tracking-tight">便利ツール利用規約ポータル</h1>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} UKPR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;