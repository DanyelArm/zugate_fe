import React, { useState } from 'react';

export default function QuizForm() {
  const [isFormComplete, setIsFormComplete] = useState(false);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-4">Create a Quiz</h2>
      <input type="file" accept="application/pdf" className="mb-4"/>
      <input type="number" placeholder="Number of Questions" className="border rounded w-full py-2 px-3 mb-3" />
      <input type="number" placeholder="Number of Responses" className="border rounded w-full py-2 px-3 mb-3" />
      <input type="number" placeholder="Number of Present Students" className="border rounded w-full py-2 px-3 mb-3" />
      <button
        className={`bg-blue-500 text-white rounded py-2 px-4 w-full ${!isFormComplete ? 'opacity-50' : 'hover:bg-blue-700'}`}
        disabled={!isFormComplete}
      >
        Create Quiz
      </button>
    </div>
  );
}
