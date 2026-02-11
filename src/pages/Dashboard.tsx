import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import api from '../api/axios';

export default function Dashboard() {
  const [marketData, setMarketData] = useState<any>({});
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    fetchMarketData();
    fetchChartData();
    
    const interval = setInterval(() => {
      fetchMarketData();
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const fetchMarketData = async () => {
    try {
      const response = await api.get('/market/prices');
      setMarketData(response.data);
    } catch (error) {
      console.error('Failed to fetch market data:', error);
    }
  };

  const fetchChartData = async () => {
    try {
      const response = await api.get('/market/history/BTC?days=7');
      const prices = response.data.prices.slice(-24); // Last 24 hours
      const formatted = prices.map((item: any) => ({
        time: new Date(item[0]).getHours() + ':00',
        price: item[1]
      }));
      setChartData(formatted);
    } catch (error) {
      console.error('Failed to fetch chart data:', error);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Market Ticker */}
        <div className="bg-dark-secondary border border-gray-800 rounded-lg px-6 py-3 flex gap-8 overflow-x-auto">
          {Object.entries(marketData).map(([symbol, data]: [string, any]) => (
            <div key={symbol} className="flex items-center gap-4 min-w-max">
              <span className="font-semibold">{symbol}:</span>
              <span className="font-mono">${data?.price?.toLocaleString() || '0'}</span>
              <span className={`flex items-center gap-1 ${data?.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {data?.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {Math.abs(data?.change24h || 0).toFixed(2)}%
              </span>
            </div>
          ))}
        </div>

        {/* Welcome Message */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Hi, Praveen Kumar!</h1>
          <p className="text-gray-400">Trade Intelligently. Execute Instantly. Grow Confidently.</p>
        </div>

        {/* Connect Broker Card */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/50 rounded-xl p-6 flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Ready to Trade Smarter? Connect your Broker!</h3>
            <p className="text-gray-300 mb-4">Add your broker account to activate strategy deployment and start trading smarter.</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors">
                Connect CoinDCX
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-48 h-48 flex items-center justify-center">
                <TrendingUp size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 bg-dark-secondary border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Crypto Market Overview</h3>
            <p className="text-sm text-gray-400 mb-4">Live price performance</p>
            
            <div className="mb-4">
              <div className="text-2xl font-bold">Bitcoin <span className="text-sm text-gray-400">BTC</span></div>
              <div className="text-3xl font-bold">${marketData.BTC?.price?.toLocaleString() || '0'}</div>
              <div className={`flex items-center gap-2 ${marketData.BTC?.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {marketData.BTC?.change24h >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                <span>{Math.abs(marketData.BTC?.change24h || 0).toFixed(2)}% (24H)</span>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1A1F2E',
                    border: '1px solid #374151',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="price" stroke="#10B981" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Deployed Strategies */}
          <div className="bg-dark-secondary border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Deployed Strategies</h3>
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="text-6xl mb-4 opacity-50">📊</div>
              <p className="text-gray-400 mb-4">No Strategy Deployed</p>
              <button className="text-primary hover:text-primary-dark font-medium">
                View All →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
