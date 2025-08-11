import { useEffect, useState } from "react";
import mockQuestions from '../../data/mockQuestion';
import Card from "../../common/Card";

export default function Main() {
  const [questions, setQuestion] =useState([]);
  useEffect(() =>{
    setQuestion(mockQuestions);
  }, []);
  return (
    <>
    {questions.map((question) =>(
      <Card key={question.id} {...question} />
      ))
    }
    </>
  );
}
  