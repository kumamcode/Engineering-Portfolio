'use client';

export default function StockBotDiagram() {
  return (
    <div className="w-full p-4 min-w-0">
      <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">System Architecture</h3>
      
      {/* Horizontal flow of sections, with boxes stacked vertically within each section */}
      <div className="flex flex-nowrap items-start justify-center gap-4 pb-4 overflow-x-auto">
        {/* Data Collection - Blue boxes stacked vertically */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <h4 className="text-xs font-semibold text-gray-700 mb-1">Data Collection</h4>
          <div className="flex flex-col gap-2">
            <div className="bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Stooq API</div>
              <div className="text-xs opacity-90">S&P 500 & VIX</div>
            </div>
            <div className="bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Google News</div>
              <div className="text-xs opacity-90">Headlines</div>
            </div>
            <div className="bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Reddit API</div>
              <div className="text-xs opacity-90">Sentiment</div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex items-center pt-10">
          <svg className="w-8 h-8 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        {/* AI Processing - Green boxes stacked vertically */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <h4 className="text-xs font-semibold text-gray-700 mb-1">AI Processing</h4>
          <div className="flex flex-col gap-2">
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Groq LLM</div>
              <div className="text-xs opacity-90">llama-3.3-70b</div>
            </div>
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Name Mapping</div>
              <div className="text-xs opacity-90">Company → Ticker</div>
            </div>
            <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Recommendations</div>
              <div className="text-xs opacity-90">Insights</div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex items-center pt-10">
          <svg className="w-8 h-8 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        {/* Validation - Orange boxes stacked vertically */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <h4 className="text-xs font-semibold text-gray-700 mb-1">Validation</h4>
          <div className="flex flex-col gap-2">
            <div className="bg-amber-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Yahoo Finance</div>
              <div className="text-xs opacity-90">Ticker Validation</div>
            </div>
            <div className="bg-amber-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Real-time Metrics</div>
              <div className="text-xs opacity-90">Price, P/E, Cap</div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex items-center pt-10">
          <svg className="w-8 h-8 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        {/* Output - Purple boxes stacked vertically */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <h4 className="text-xs font-semibold text-gray-700 mb-1">Output</h4>
          <div className="flex flex-col gap-2">
            <div className="bg-purple-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">HTML Format</div>
              <div className="text-xs opacity-90">Templates</div>
            </div>
            <div className="bg-purple-500 text-white px-4 py-3 rounded-lg shadow-md text-center min-w-[130px]">
              <div className="font-semibold text-sm mb-1">Gmail SMTP</div>
              <div className="text-xs opacity-90">Daily Reports</div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Additional Features</h4>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Failed Ticker Caching</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Rate Limiting</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">macOS Automation</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">Error Handling</span>
        </div>
      </div>
    </div>
  );
}
