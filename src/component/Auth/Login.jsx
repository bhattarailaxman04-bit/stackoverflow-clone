import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // const [email,setEmail]= useState();
  // const [password, setPassword] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const loginData = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
        credentials: 'include', // important to receive cookie
      });

      if (res.ok) {
        login();          // update context
        form.reset();
        navigate('/');    // redirect
      } else {
        const err = await res.json();
        console.log('Login failed:', err.message);
      }
    } catch (err) {
      console.error('Login error:', err);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin} className="flex flex-col items-center mt-4">
        <input name="email" type="email" placeholder="Email/Username" className="border p-2 w-1/2 mb-2" />
        <input name="password" type="password" placeholder="Password" className="border p-2 w-1/2 mb-2" />
        <button type="submit" className="bg-blue-500 text-white p-2 w-1/2">
          Login {' '}
        </button>
      </form>
    </>
  );
}