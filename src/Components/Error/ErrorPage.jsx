import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-lg mb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline text-lg">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
