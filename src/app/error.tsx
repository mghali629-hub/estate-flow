'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ece3] flex flex-col items-center justify-center text-center px-4 font-serif">
      <div className="text-3xl text-amber-500 font-serif mb-2">Notice</div>
      <h2 className="text-xl font-light text-white mb-2">Listing Registry Unavailable</h2>
      <p className="text-gray-400 text-xs max-w-md mb-6 font-sans">
        An error occurred while fetching off-market real estate records.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-[#8B6914] hover:bg-[#a67c1e] text-black font-bold text-xs font-sans rounded-xl transition-colors uppercase tracking-wider"
      >
        Reload Registry
      </button>
    </div>
  );
}
