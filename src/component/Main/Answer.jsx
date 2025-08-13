import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Temporary mock answers (replace with API later)
const mockAnswers = [
  {
    id: 1,
    questionId: 1,
    body: "You can use the useState hook to manage state in a functional component.",
    creator: "Jane Doe",
    createdDate: "2025-05-12T10:00:00",
    votes: 0,
    comments: [
      {
        id: 1,
        text: "This is the best way in React 16.8+.",
        creator: "John Smith",
        createdDate: "2025-05-12T12:00:00",
      },
    ],
  },
  {
    id: 2,
    questionId: 1,
    body: "Alternatively, you can use Redux for more complex state management.",
    creator: "Alice",
    createdDate: "2025-05-12T11:00:00",
    votes: 0,
    comments: [],
  },
];

export default function Answer() {
  const { id } = useParams();
  const [answers, setAnswers] = useState([]);
  const [commentInputs, setCommentInputs] = useState({}); // Store text for each comment input

  useEffect(() => {
    // Filter answers by questionId
    const filteredAnswers = mockAnswers.filter(
      (answer) => answer.questionId === parseInt(id)
    );
    setAnswers(filteredAnswers);
  }, [id]);

  // Add a comment
  const handleAddComment = (answerId) => {
    const text = commentInputs[answerId]?.trim();
    if (!text) return;

    setAnswers((prev) =>
      prev.map((ans) =>
        ans.id === answerId
          ? {
              ...ans,
              comments: [
                ...ans.comments,
                {
                  id: Date.now(),
                  text,
                  creator: "You",
                  createdDate: new Date().toISOString(),
                },
              ],
            }
          : ans
      )
    );

    setCommentInputs((prev) => ({ ...prev, [answerId]: "" }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-6">
      <h3 className="text-lg font-semibold mb-4">
        {answers.length} Answer{answers.length !== 1 && "s"}
      </h3>

      {answers.map((ans) => (
        <div key={ans.id} className="border-b border-gray-300 pb-4 mb-6">
          {/* Votes */}
          <div className="flex gap-6 text-sm text-gray-500 mb-2">
            <span>{ans.votes} votes</span>
          </div>

          {/* Answer body */}
          <div className="bg-gray-50 p-4 rounded border border-gray-300 whitespace-pre-wrap">
            {ans.body}
          </div>

          {/* Creator & Date */}
          <p className="text-sm text-gray-500 mt-2">
            Answered by <span className="font-medium">{ans.creator}</span> on{" "}
            {new Date(ans.createdDate).toLocaleDateString()}
          </p>

          {/* Comments section like in your screenshot */}
          <div className="mt-3 border-l-2 border-gray-200 pl-3">
            {ans.comments.length > 0 ? (
              ans.comments.map((c) => (
                <div key={c.id} className="text-xs text-gray-600 mb-1">
                  {c.text} —{" "}
                  <span className="text-gray-500">{c.creator}</span>{" "}
                  <span className="text-gray-400">
                    {new Date(c.createdDate).toLocaleDateString()}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-400">No comments yet</p>
            )}

            {/* Add comment */}
            <div className="flex mt-2 gap-2">
              <input
                type="text"
                value={commentInputs[ans.id] || ""}
                onChange={(e) =>
                  setCommentInputs((prev) => ({
                    ...prev,
                    [ans.id]: e.target.value,
                  }))
                }
                placeholder="Add a comment..."
                className="border border-gray-300 rounded px-2 py-1 flex-1 text-xs"
              />
              <button
                onClick={() => handleAddComment(ans.id)}
                className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      ))}

      {answers.length === 0 && (
        <p className="text-gray-500">No answers yet. Be the first to answer!</p>
      )}
    </div>
  );
}
