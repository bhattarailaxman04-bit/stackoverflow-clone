import { useEffect, useState } from "react";
import mockQuestions from '../../data/mockQuestion';
import Card from "../../common/Card";
import { useAuth } from "../../context/AuthContext";

export default function Main() {
  const {isLoggedIn} = useAuth();

  const [questions, setQuestions] =useState([]);
  useEffect(() =>{
    setQuestions(mockQuestions);
  }, []);

  const handeleSubmit =(e) => {
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
    {questions.map((question) =>(
      <Card key={question.id} {...question} />
      ))}
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
  