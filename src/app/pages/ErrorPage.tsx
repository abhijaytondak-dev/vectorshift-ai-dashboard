import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router";
import { AlertTriangle, Home, FileQuestion } from "lucide-react";
// Button component might be missing in 'components/ui/button', assuming it exists or I should replace it with standard button
// The file imported '@/app/components/ui/button'. I did NOT find this file in my file listing.
// I should replace it with a standard html button or create the file.
// I'll create a simple Button component in the file content to avoid error.
function Button({ children, onClick, className, size }: any) {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}>
      {children}
    </button>
  );
}

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  // ...
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* ... */}
    </div>
  );
}
