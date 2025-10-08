import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-xl">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center p-2">

                {/* Logo and Title*/}
                <Link to="/" className="flex items-center gap-3">
                    <img src="./logo.png" alt="logo" className="w-8 h-8" />
                    <span className="text-xl font-bold text-gray-900">Swift Mailer</span>
                </Link>

                {/* Navbar Links */}
                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        to="/docs"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                    >
                        <img src="./google-docs.png" alt="Docs" className="h-5 w-5" />
                        <span>Docs</span>
                    </Link>

                    <Link
                        to="/integration"
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                    >
                        <img src="./integration.png" alt="Integration Guide" className="h-5 w-5" />
                        <span>Integration Guide</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
