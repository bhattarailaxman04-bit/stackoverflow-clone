import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext(null);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const value = {
        isAuthenticated,
        login: () => setIsAuthenticated(true),
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Define the SuccessPage component
// This component must be defined before it is used
const SuccessPage = ({ message, onLoginClick }) => (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 font-sans">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Registration Successful!</h2>
            <p className="text-gray-600 mb-6">{message}</p>
            <button
                onClick={onLoginClick}
                className="bg-blue-500 text-white p-2 rounded-lg transition duration-300 hover:bg-blue-600"
            >
                Go to Login
            </button>
        </div>
    </div>
);

// The main Register component
const RegisterComponent = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
        const form = e.target;
        const registerData = {
            full_name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        };

        // Frontend password validation
        if (!passwordRegex.test(registerData.password)) {
            setError("Password must contain at least 8 characters, including one letter, one number, and one special character (@$!%*#?&).");
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerData),
            });

            if (res.ok) {
                form.reset();
                setIsRegistered(true);
            } else {
                const err = await res.json();
                if (err.message && err.message.includes("email already in use")) {
                    setError("This email is already registered. Please use a different one.");
                } else {
                    setError(err.message || "Registration failed. Please try again.");
                }
            }
        } catch (err) {
            setError("An unexpected error occurred. Please try again later.");
            console.error("Register error:", err);
        }
    };

    if (isRegistered) {
        return (
            <SuccessPage
                message="You are now ready to log in."
                onLoginClick={() => navigate('/login')}
            />
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 font-sans">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        name="name"
                        type="text"
                        placeholder="Full Name / Username"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full text-white font-semibold py-2 rounded-lg transition duration-300 bg-green-600 hover:bg-green-700"
                    >
                        Register
                    </button>
                </form>
                {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
            </div>
        </div>
    );
};

// Export the main component
export default RegisterComponent;