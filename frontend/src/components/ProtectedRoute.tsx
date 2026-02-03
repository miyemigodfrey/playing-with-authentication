import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
	children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { isAuthenticated, isLoading } = useAuth();
	const location = useLocation();

	/**
	 * 🎯 TODO FOR LEARNERS:
	 *
	 * This component protects routes that require authentication.
	 * The basic structure is provided, but you need to understand how it works
	 * and potentially enhance it.
	 *
	 * Current implementation:
	 * 1. Shows loading spinner while checking auth state
	 * 2. Redirects to login if not authenticated
	 * 3. Renders children if authenticated
	 *
	 * Enhancements you could make:
	 * - Add role-based access control
	 * - Add a custom "unauthorized" page
	 * - Add token expiration checking
	 */

	// Show loading while checking authentication
	if (isLoading) {
		return (
			<div className="flex justify-center items-center py-8">
				<div className="w-10 h-10 border-4 border-gray-200 border-t-pink-600 rounded-full animate-spin"></div>
			</div>
		);
	}

	// TODO: Implement the redirect logic
	// If user is NOT authenticated, redirect to login page
	// The 'state' prop preserves the intended destination
	if (!isAuthenticated) {
		/**
		 * 🎯 LEARNING NOTE:
		 *
		 * We pass `state={{ from: location }}` so that after login,
		 * we can redirect the user back to the page they originally wanted to visit.
		 *
		 * In your login page, you can access this with:
		 * const location = useLocation();
		 * const from = location.state?.from?.pathname || '/dashboard';
		 */
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	// User is authenticated, render the protected content
	return <>{children}</>;
}

export default ProtectedRoute;
