// main.jsx
import { useEffect, useState } from "react";
import mockQuestions, { categories } from '../../data/mockQuestion';
import { useAuth } from "../../context/AuthContext";
import FactsCards from "./FactsCards";

export default function Main() {
    const { isLoggedIn } = useAuth();
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(mockQuestions);
    }, []);

    const handeleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newQuestion = {
            id: questions.length + 1,
            question: form.question.value,
            tags: form.tags.value.split(',').map((tag) => tag.trim()),
        };
        setQuestions([...questions, newQuestion]);
        form.reset();
    };

    return (
        <>
            {/* This grid applies the perfect gap (gap-4) and centering (mx-auto max-w-7xl) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 **gap-4 p-4 mx-auto max-w-7xl** mt-6 mb-6">
                {categories.slice(0, 8).map((category, index) => (
                    <FactsCards key={index} category={category} />
                ))}
            </div>

            {console.log("student GK quiz")}
            
            {isLoggedIn && (
                <form onSubmit={handeleSubmit} className="flex flex-col items-center mt-4">
                    <input name="question" type="text" placeholder="Question Title " className="border p-2 w-1/2 mb-2" />
                    <input name="body" type="text" placeholder="Describe your queation" className="border p-2 w-1/2 mb-2" />
                    <input name="tags" type="text" placeholder="Tags (comma separated)" className="border p-2 w-1/2 mb-2" />
                    <button type="submit" className="bg-blue-500 text-white p-2 w-1/2">
                        Add question
                    </button>
                </form>
            )}
        </>
    );
}