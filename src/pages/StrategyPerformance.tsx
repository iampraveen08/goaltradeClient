import Layout from '../components/Layout';

export default function StrategyPerformance() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Strategy Performance</h1>
          <p className="text-gray-400">Analyze detailed performance metrics of your strategies</p>
        </div>

        {/* Empty State */}
        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4 opacity-50">📉</div>
            <h3 className="text-xl font-bold mb-2">No Performance Data</h3>
            <p className="text-gray-400 mb-6">Deploy strategies to see performance analytics</p>
            <a href="/strategies" className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors">
              Deploy Strategy
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
