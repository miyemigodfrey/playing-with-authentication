import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signupApi } from "../services/authApi";

function SignupPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { login, isAuthenticated } = useAuth();
	const navigate = useNavigate();

	// Redirect if already authenticated
	if (isAuthenticated) {
		navigate("/dashboard", { replace: true });
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setError("");

		// Validate passwords match
		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		// Validate password length
		if (password.length < 6) {
			setError("Password must be at least 6 characters");
			return;
		}

		setIsLoading(true);

		/**
		 * 🎯 TODO FOR LEARNERS:
		 *
		 * Implement the signup form submission.
		 *
		 * Steps:
		 * 1. Call the signupApi function with name, email, and password
		 * 2. If successful, call the login function from AuthContext
		 *    with the token and user from the response
		 * 3. Navigate to the dashboard
		 * 4. Handle any errors by setting the error state
		 *
		 * Example:
		 * try {
		 *   const response = await signupApi({ name, email, password });
		 *   login(response.access_token, response.user);
		 *   navigate('/dashboard', { replace: true });
		 * } catch (err) {
		 *   setError(err.message || 'Signup failed');
		 * } finally {
		 *   setIsLoading(false);
		 * }
		 */

		try {
			// TODO: Implement the signup logic here
			console.log("TODO: Implement signup submission", {
				name,
				email,
				password,
			});

			// Call the signup API
			const response = await signupApi({ name, email, password });

			// Save to auth context
			login(response.access_token, response.user);

			// Navigate to dashboard
			navigate("/dashboard", { replace: true });
		} catch (err: any) {
			setError(err.message || "Signup failed. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center p-6">
			<div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
				<h2 className="text-2xl text-gray-900 font-semibold mb-4 text-center">
					Create Account
				</h2>

				<div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-4">
					<h4 className="font-medium mb-1">🎯 Learning Task</h4>
					<p className="text-sm text-yellow-800">
						This form calls <code>signupApi</code> from <code>authApi.ts</code>.
						Implement the API function to make it work!
					</p>
				</div>

				{error && (
					<div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-center">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block mb-2 text-sm font-medium text-gray-700">
							Full Name
						</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="John Doe"
							required
							className="w-full p-3 border border-gray-200 rounded focus:border-pink-500 outline-none"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="john@example.com"
							required
							className="w-full p-3 border border-gray-200 rounded focus:border-pink-500 outline-none"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Minimum 6 characters"
							required
							className="w-full p-3 border border-gray-200 rounded focus:border-pink-500 outline-none"
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="confirmPassword"
							className="block mb-2 text-sm font-medium text-gray-700">
							Confirm Password
						</label>
						<input
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Confirm your password"
							required
							className="w-full p-3 border border-gray-200 rounded focus:border-pink-500 outline-none"
						/>
					</div>

					<button
						type="submit"
						className="w-full p-3 bg-pink-600 text-white rounded hover:bg-pink-500 disabled:bg-gray-300"
						disabled={isLoading}>
						{isLoading ? "Creating Account..." : "Sign Up"}
					</button>
				</form>

				<p className="text-center mt-4 text-sm text-gray-600">
					Already have an account?{" "}
					<Link to="/login" className="text-pink-600 hover:underline">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}

export default SignupPage;
