import React from "react";

const questions = [
  "Can education flashcards be used for all age groups?",
  "How do education flashcards work?",
  "Can education flashcards be used for test preparation?",
];

function Faq() {
  return (
    <div className="sm:mx-24 mx-8 mb-14">
      <h2 className="text-bg text-4xl font-bold">F.A.Q</h2>
      {questions.map((question, index) => (
        <div className="relative">
          <details
            key={index}
            className="mt-6 border-2 border-[#06286E]/50 rounded-xl py-3 px-2 text-[#28262C]"
          >
            <summary>{question}</summary>
            <div className="my-4  p-2 bg-blue-100 rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            a modi beatae voluptas nisi? Amet porro totam obcaecati fugit
            temporibus ipsum quo autem iure voluptatibus, adipisci, ab quibusdam
            neque ut cumque. Neque error eos consequatur dolores optio illo.
            Recusandae, ab ad facere excepturi eligendi quis!
            </div>
          </details>
          <img className="absolute top-1/4 right-5" src='/DownArrow.svg' alt='Down'/>
        </div>
      ))}
    </div>
  );
}

export default Faq;
