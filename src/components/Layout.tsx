import { ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, TrendingUp, Briefcase, History as HistoryIcon, LogOut, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const menuItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/strategies', icon: TrendingUp, label: 'Strategies' },
    { path: '/positions', icon: Briefcase, label: 'Positions' },
    { path: '/history', icon: HistoryIcon, label: 'History' },
    { path: '/strategy-performance', icon: TrendingUp, label: 'Strategy Performance' },
  ];

  return (
    <div className="flex h-screen bg-dark">
      {/* Sidebar */}
      <aside className="w-64 bg-dark-secondary border-r border-gray-800">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h1 className="text-xl font-bold">AutopilotX</h1>
          </div>

          <nav className="space-y-2">
            <div className="mb-6">
              <h3 className="text-xs text-gray-500 uppercase mb-2 px-3">Overview</h3>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-gray-400 hover:bg-dark-tertiary hover:text-white'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-xs text-gray-500 uppercase mb-2 px-3">Join Us</h3>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-dark-tertiary hover:text-white rounded-lg transition-colors">
                <span>YouTube Channel</span>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-dark-tertiary hover:text-white rounded-lg transition-colors">
                <span>Join Telegram</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-dark-tertiary hover:text-white rounded-lg transition-colors">
                <span>Follow on Instagram</span>
              </a>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-dark-tertiary hover:text-white rounded-lg transition-colors w-full"
              >
                <LogOut size={20} />
                <span>LogOut</span>
              </button>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-dark-secondary border-b border-gray-800 px-8 py-4 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            <span className="text-primary">Crypto</span> Market Overview
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">support@autopilotx.in</span>
            <div className="flex items-center gap-2 bg-dark-tertiary px-4 py-2 rounded-lg">
              <User size={20} />
              <span className="text-sm">{user?.username}</span>
            </div>
          </div>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
