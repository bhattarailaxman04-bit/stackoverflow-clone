// CategoryQuestions.jsx (Modified)
import { useEffect, useState } from "react"; // <-- useState added here
import { useParams, Link } from "react-router-dom"; // Link is no longer needed but kept in imports for now
import mockQuestions, { categories } from "../../data/mockQuestion"; // Adjust path as needed

export default function CategoryQuestions() {
    const { categoryTitle } = useParams();
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    // Convert 'Outer-Space' from URL back to 'Outer Space' for filtering
    const actualCategoryTitle = categoryTitle.replace(/-/g, ' ');

    // --- START: ACCORDION/TOGGLE LOGIC ---
    // State to track which question's ID is currently open (or null if none)
    const [openQuestionId, setOpenQuestionId] = useState(null);

    // Function to handle click: Toggles the answer visibility
    const handleQuestionClick = (id) => {
        setOpenQuestionId(prevId => (prevId === id ? null : id));
    };
    // --- END: ACCORDION/TOGGLE LOGIC ---

    useEffect(() => {
        // Filter questions based on the tag matching the category title
        const questions = mockQuestions.filter(
            (item) => item.tags.includes(actualCategoryTitle)
        );
        setFilteredQuestions(questions);
    }, [actualCategoryTitle]);

    // Get category description for the header
    const categoryInfo = categories.find(cat => cat.title === actualCategoryTitle);

    if (!categoryInfo) {
        return (
            <div className="text-center text-2xl p-8">
                <h1>Category Not Found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2 text-blue-700">{categoryInfo.title} Quiz Questions</h1>
            <p className="text-gray-600 mb-6">{categoryInfo.desc}</p>
            <h2 className="text-xl font-semibold mb-4">Total Questions: {filteredQuestions.length}</h2>

            <div className="space-y-4">
                {filteredQuestions.map((q) => {
                    const isOpen = openQuestionId === q.id;
                    return (
                        <div key={q.id} className="border rounded-lg shadow-sm bg-white overflow-hidden">
                            {/* Replaced <Link> with a clickable <div>. 
                                Clicking toggles the answer visibility using handleQuestionClick. 
                            */}
                            <div
                                onClick={() => handleQuestionClick(q.id)}
                                className={`p-4 cursor-pointer flex justify-between items-center transition duration-300 ${isOpen ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'}`}
                            >
                                <p className="text-lg font-medium text-gray-800 flex items-center gap-3 m-0">
                                    <span className="text-xl text-blue-600">{isOpen ? '🔽' : '▶️'}</span>
                                    **{q.question}**
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {q.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* --- Conditional Answer Display --- */}
                            {isOpen && (
                                <div className="answer-body p-4 bg-gray-100 border-t border-gray-200">
                                    <h3 className="text-md font-bold mb-1 text-blue-700">Answer:</h3>
                                    <p className="text-gray-800">{q.body}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}