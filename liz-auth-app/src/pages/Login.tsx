import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { loginApi } from "../services/authApi";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const { login, isAuthenticated } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/dashboard";
	useEffect(() => {
		if (isAuthenticated) {
			navigate(from, { replace: true });
		}
	}, [isAuthenticated, navigate, from]);

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		setError("");

		try {
			const response = await loginApi({ email, password });

			login(response.access_token, response.user);
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError("Login failed. Please try again.");
			}
		}
	};

	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
			<div className="w-full max-w-sm">
				<div className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-2">
						Welcome Back
					</h1>
					<p className="text-gray-600">Sign in to your account to continue</p>
				</div>

				{error && (
					<div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-center">
						{error}
					</div>
				)}

				<div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
					<form className="space-y-5" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-semibold text-gray-700">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="you@example.com"
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition bg-gray-50 hover:bg-white"
							/>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-semibold text-gray-700">
								Password
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="••••••••"
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition bg-gray-50 hover:bg-white"
							/>
						</div>

						<button
							type="submit"
							className="w-full py-3 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg hover:from-pink-700 hover:to-pink-800 disabled:bg-gray-400 font-semibold transition shadow-md hover:shadow-lg">
							Login
						</button>
					</form>

					<div className="mt-6 pt-6 border-t border-gray-200">
						<p className="text-center text-sm text-gray-600">
							Don't have an account?{" "}
							<Link
								to="/signup"
								className="text-pink-600 hover:text-pink-700 font-semibold transition">
								Create one
							</Link>
						</p>
					</div>
				</div>

				<p className="text-center text-xs text-gray-500 mt-6">
					Protected by industry-standard security
				</p>
			</div>
		</div>
	);
}
