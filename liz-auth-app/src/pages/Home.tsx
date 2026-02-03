import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
	const { isAuthenticated } = useAuth();
	return (
		<div className="space-y-6">
			<div className="text-center p-10 rounded-lg bg-gradient-to-tr from-[#1a1a2e] to-[#16213e] text-white">
				<h1 className="text-3xl font-bold">🔐 Authentication Learning App</h1>
				<p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
					Learn how to implement authentication in React with JWT tokens,
					protected routes, and API integration.
				</p>

				<div className="mt-6 flex justify-center gap-4">
					{isAuthenticated ? (
						<Link
							to="/dashboard"
							className="px-6 py-3 bg-pink-600 text-white rounded hover:bg-pink-500">
							Go to Dashboard
						</Link>
					) : (
						<>
							<Link
								to="/login"
								className="px-6 py-3 bg-pink-600 text-white rounded hover:bg-pink-500">
								Login
							</Link>
							<Link
								to="/signup"
								className="px-6 py-3 border border-white text-white rounded hover:bg-white/10">
								Sign Up
							</Link>
						</>
					)}
				</div>
			</div>

			<div className="bg-white p-6 rounded-lg shadow">
				<h3 className="font-semibold mb-2">🧪 Test Credentials</h3>
				<p>Use these credentials to test the login functionality:</p>
				<p className="mt-2">
					<strong>Email:</strong> admin@abc.com
					<br />
					<strong>Password:</strong> Abcd1234
				</p>
			</div>
		</div>
	);
}
