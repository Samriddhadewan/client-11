export default function ErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl mt-4">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 px-6 py-3 bg-[#0E7A81] text-white rounded-lg ">
          Go Back Home
        </a>
      </div>
    );
  }