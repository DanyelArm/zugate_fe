import React from 'react';

export default function Popup({ onClose, showStatistics }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h3 className="text-lg font-semibold">Quiz Completion Status</h3>
        <p>Number of completed tests out of all present students: 15/20</p>
        <button onClick={showStatistics} className="bg-blue-500 text-white rounded py-2 px-4 mt-4">Show Statistics</button>
        <button onClick={onClose} className="bg-gray-500 text-white rounded py-2 px-4 mt-4 ml-2">Close</button>
      </div>
    </div>
  );
}
