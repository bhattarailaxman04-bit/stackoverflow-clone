export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4 px-6 mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-center sm:text-left">
                    &copy; {currentYear} Aryan College. All rights reserved.
                </p>
                <div className="mt-2 sm:mt-0 space-x-4 text-sm">
                    <a href="#" className="hover:underline hover:text-orange-400">Privacy Policy</a>
                    <a href="#" className="hover:underline hover:text-orange-400">Terms of Service</a>
                    <a href="#" className="hover:underline hover:text-orange-400">Contact</a>
                </div>
            </div>
        </footer>
    );
}