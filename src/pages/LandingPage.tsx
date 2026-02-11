import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Lock, Wifi, BarChart3, Bell, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-secondary to-dark">
      {/* Header */}
      <header className="fixed top-0 w-full bg-dark-secondary/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <h1 className="text-xl font-bold">AutopilotX</h1>
          </div>
          <div className="flex gap-4">
            <Link to="/signin" className="px-6 py-2 text-white hover:text-primary transition-colors">
              Log in
            </Link>
            <Link to="/signup" className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <p className="text-primary text-sm uppercase tracking-wider mb-4">Future of crypto trading</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Deploy Smart Strategies.<br />
            Trade Automatically.<br />
            Earn Profit.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Experience effortless crypto trading with ready-to-use strategies. Deploy them in a click, and watch your portfolio grow on AutopilotX.
          </p>
          <Link to="/signup" className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark rounded-lg text-white font-medium text-lg transition-colors">
            Get Started
          </Link>
        </div>
      </section>

      {/* Transparent & Powerful Section */}
      <section className="py-20 px-6 bg-dark-secondary/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Transparent. Powerful.</h3>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            We believe in full transparency. Dive deep into the historical performance of every strategy. Analyze metrics, understand the logic, and trade with confidence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Privacy & Security */}
            <div>
              <h4 className="text-primary text-xl font-semibold mb-8">Privacy & Security</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Lock className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold mb-2">Secure Sign-in</h5>
                    <p className="text-gray-400 text-sm">Sign in with your email and password to access your account with in built authentication.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold mb-2">Secure Data</h5>
                    <p className="text-gray-400 text-sm">Your data is safe and secure with us.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Wifi className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold mb-2">Safe Connection</h5>
                    <p className="text-gray-400 text-sm">Safely connect to broker with API keys that only grant trading permissions.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Features */}
            <div>
              <h4 className="text-primary text-xl font-semibold mb-8">Platform Features</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <BarChart3 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold mb-2">Analytics</h5>
                    <p className="text-gray-400 text-sm">Track your portfolio and strategy performance with in-depth analytics.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Bell className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold mb-2">Notifications</h5>
                    <p className="text-gray-400 text-sm">Stay updated with real-time alerts on trades, market moves, and account activity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h5 className="font-semibold mb-2">Integrations</h5>
                    <p className="text-gray-400 text-sm">Connect to a growing list of top-tier crypto exchanges seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Proven Strategies at Your Fingertips</h3>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Discover data-backed, performance-tested trading strategies built by experts. Deploy instantly and start trading with confidence.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bitron Strategy */}
            <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
              <div className="h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-lg mb-4 flex items-end justify-center pb-4">
                <div className="w-full h-20 flex items-end justify-around px-4">
                  <div className="w-2 bg-primary h-12 rounded-t"></div>
                  <div className="w-2 bg-primary h-16 rounded-t"></div>
                  <div className="w-2 bg-primary h-10 rounded-t"></div>
                  <div className="w-2 bg-primary h-20 rounded-t"></div>
                  <div className="w-2 bg-primary h-14 rounded-t"></div>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium mb-3">BTC</span>
              <h4 className="text-xl font-bold mb-2">Bitron</h4>
              <p className="text-gray-400 text-sm mb-4">A dynamic Bitcoin trading strategy built for speed, precision, and consistency.</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Win Rate</span>
                  <span className="font-semibold">44%</span>
                </div>
                <div className="w-full bg-dark-tertiary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '44%' }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Max Drawdown</span>
                  <span className="font-semibold">6%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total Trades:</span>
                  <span className="font-semibold">330</span>
                </div>
              </div>
              <Link to="/signup" className="block text-center py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors">
                Learn More
              </Link>
            </div>

            {/* Coming Soon */}
            <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6 relative overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl opacity-50">⟠</div>
              </div>
              <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-2">COMING SOON</h4>
                  <p className="text-primary">ETHEREUM STRATEGY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-secondary border-t border-gray-800 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <TrendingUp size={24} />
              </div>
              <div>
                <h1 className="font-bold">AutopilotX</h1>
                <p className="text-xs text-gray-400">© 2026 AutopilotX - All rights reserved.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">YouTube</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Telegram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
