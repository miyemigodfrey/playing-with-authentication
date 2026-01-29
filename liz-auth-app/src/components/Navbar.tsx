import { Link } from 'react-router-dom';


export default function Navbar(){
    return(
        <nav className="bg-amber-900 flex items-center justify-between px-6 py-3 w-full ">
            <h2 className="text-white text-2xl font-semibold font-serif">LiZ-AUTH</h2>
            <div className="flex items-center gap-4 list-none">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/signup">Sign Up </Link>
                <Link to="/login">Login</Link> 
            </div>
        </nav>
    )
}