import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
	children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { isAuthenticated } = useAuth();
	const location = useLocation();

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	{
		/**
          if (isLoading) {
    return (
      <div className='flex justify-center items-center py-8'>
        <div className='w-10 h-10 border-4 border-gray-200 border-t-pink-600 rounded-full animate-spin'></div>
      </div>
    );

  }
         */
	}

	return <>{children}</>;
}
