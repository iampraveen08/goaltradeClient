import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Download } from 'lucide-react';
import api from '../api/axios';

export default function Strategies() {
  const [strategies, setStrategies] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'deployed'>('all');

  useEffect(() => {
    fetchStrategies();
  }, []);

  const fetchStrategies = async () => {
    try {
      const response = await api.get('/strategies/public');
      setStrategies(response.data);
    } catch (error) {
      console.error('Failed to fetch strategies:', error);
    }
  };

  const handleDeploy = async (strategyId: string) => {
    try {
      await api.post(`/strategies/${strategyId}/deploy`, { multiplier: 1 });
      alert('Strategy deployed successfully!');
      fetchStrategies();
    } catch (error) {
      console.error('Failed to deploy strategy:', error);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Strategies</h1>
          <p className="text-gray-400">Browse and deploy proven trading strategies</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-gray-800">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'all'
                ? 'text-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All Strategies
            {activeTab === 'all' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('deployed')}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'deployed'
                ? 'text-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Deployed Strategies
            {activeTab === 'deployed' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
          </button>
        </div>

        {/* Strategy Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {strategies.map((strategy) => (
            <div key={strategy._id} className="bg-dark-secondary border border-gray-800 rounded-xl overflow-hidden">
              {/* Chart Preview */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-transparent p-6 flex items-end">
                <div className="w-full h-24 flex items-end justify-around">
                  {[12, 18, 14, 22, 16, 20, 15, 24, 19, 21].map((height, i) => (
                    <div
                      key={i}
                      className="w-2 bg-primary rounded-t"
                      style={{ height: `${height * 3}px` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    strategy.type === 'BTC' ? 'bg-primary/20 text-primary' : 'bg-blue-500/20 text-blue-500'
                  }`}>
                    {strategy.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{strategy.name}</h3>
                <p className="text-sm text-gray-400 mb-1">{strategy.symbol}</p>
                <p className="text-gray-400 mb-6">{strategy.description}</p>

                {strategy.status === 'coming_soon' ? (
                  <div className="text-center py-4 bg-dark-tertiary rounded-lg">
                    <span className="text-xl font-bold">COMING SOON</span>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Win Rate</span>
                        <span className="font-semibold">{strategy.winRate}%</span>
                      </div>
                      <div className="w-full bg-dark-tertiary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${strategy.winRate}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-400">Max Drawdown</span>
                        <span className="font-semibold">{strategy.maxDrawdown}%</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Trades:</span>
                        <span className="font-semibold">{strategy.totalTrades}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDeploy(strategy._id)}
                        className="flex-1 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors"
                      >
                        Deploy
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors">
                        <span>Multiplier</span>
                        <span className="font-bold">1</span>
                      </button>
                    </div>

                    <button className="w-full mt-3 py-2 text-primary hover:text-primary-dark flex items-center justify-center gap-2">
                      <Download size={18} />
                      <span>Backtested Report - Last 1 year</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
