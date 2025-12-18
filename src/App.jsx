// App.jsx
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main/Main';
import SingleQuestion from './component/Main/SingleQuestion';
import CategoryQuestions from './component/Main/CategoryQuestions';
import { useAuth } from './context/AuthContext';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import { useEffect } from 'react';

export default function App() {
    const { login, logout } = useAuth();

    // useEffect(() => {
    //   const checkSession = () => {
    //     fetch('http://localhost:5000/session', {
    //       method: 'POST',
    //       credentials: 'include',
    //     }).then((response) => {
    //       if (response.status === 200) {
    //         login();
    //       } else {
    //         logout();
    //       }
    //     });
    //   };
    //   checkSession();
    // }, []);

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* NEW ROUTE: Shows the list of 20 questions for a category (e.g., /questions/category/Outer-Space) */}
                    <Route path="/questions/category/:categoryTitle" element={<CategoryQuestions />} />

                    {/* EXISTING ROUTE: Shows the detail for a single question (e.g., /question/1) */}
                    <Route path="/question/:id" element={<SingleQuestion />} />

                    <Route
                        path="*"
                        element={<h1 className="text-center text-2xl">Page Not Found</h1>}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}