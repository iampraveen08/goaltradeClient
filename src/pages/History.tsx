import Layout from '../components/Layout';

export default function History() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">History</h1>
          <p className="text-gray-400">View your complete trading history</p>
        </div>

        {/* Empty State */}
        <div className="bg-dark-secondary border border-gray-800 rounded-xl p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4 opacity-50">📊</div>
            <h3 className="text-xl font-bold mb-2">No Trading History</h3>
            <p className="text-gray-400 mb-6">Your completed trades will appear here</p>
            <a href="/strategies" className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium transition-colors">
              Start Trading
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
