import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
	const { isAuthenticated, user, logout } = useAuth();

	return (
		<nav className="bg-amber-900 flex items-center justify-between px-6 py-3 w-full ">
			<Link to="/" className="text-xl font-bold">
				🔐LIZ Auth Learning
			</Link>
			<div className="flex items-center gap-4 list-none">
				<Link to="/" className="px-3 py-1 rounded hover:bg-white/10">
					Home
				</Link>

				{isAuthenticated ? (
					<>
						<Link to="/dashboard">Dashboard</Link>
						<Link to="/profile">Profile</Link>
						<span className="text-green-400">Welcome, {user?.name}</span>
						<button
							onClick={logout}
							className="bg-pink-600 hover:bg-pink-500 text-white px-3 py-1 rounded">
							Logout
						</button>
					</>
				) : (
					<>
						<Link to="/signup">Sign Up </Link>
						<Link to="/login">Login</Link>
					</>
				)}
			</div>
		</nav>
	);
}
