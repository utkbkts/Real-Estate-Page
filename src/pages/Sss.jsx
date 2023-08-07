import React from "react";

const Sss = () => {
  const questions = [];
  for (let i = 1; i <= 10; i++) {
    questions.push({
      question: `Soru ${i}`,
      answer: `Cevap ${i}`, 
    });
  }

  return (
    <div className="sss">
      <h3>Sık Sorulan Sorular</h3>
      {questions.map((item, index) => (
        <div className="question" key={index}>
          <p>
            <strong>{item.question}</strong>
          </p>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Sss;
