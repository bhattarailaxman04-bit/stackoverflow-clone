import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main/Main';
import Question from './component/Main/Question';
import { AuthProvider } from './context/AuthContext';

export default function App(){
    return(
        <AuthProvider>
        <Header />
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/question/:id' element={<Question/>} />
            <Route path='*' element={<h1 className='text-center text-2xl'>page Not Found</h1>} />
        </Routes>
        </BrowserRouter>
        <Footer/>
        </AuthProvider>
    );
}