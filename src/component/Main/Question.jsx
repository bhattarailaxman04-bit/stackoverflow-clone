import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockQuestions from "../../data/mockQuestion";

export default function Question() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const foundQuestion = mockQuestions.find(
      (item) => item.id === parseInt(id)
    );
    setQuestion(foundQuestion);
  }, [id]);

  if (!question) {
    return (
      <div className="text-center text-2xl">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Question Title */}
      <h2 className="text-2xl font-semibold mb-2">{question.question}</h2>

      {/* Creator & Date */}
      <p className="text-sm text-gray-500 mb-4">
        Asked by <span className="font-medium">{question.creator}</span> on{" "}
        {new Date(question.createdDate).toLocaleDateString()}
      </p>

      {/* Body (supports code blocks if wrapped in backticks) */}
      <div className="bg-gray-50 p-4 rounded border border-gray-300 mb-4 whitespace-pre-wrap">
        {question.body}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {question.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Votes / Comments section */}
      <div className="flex gap-6 text-gray-600 text-sm">
        <span>0 votes</span>
        <span>0 answers</span>
        <span>0 comments</span>
      </div>
    </div>
  );
}
