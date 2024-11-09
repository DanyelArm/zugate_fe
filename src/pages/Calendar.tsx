import React from 'react';

export default function Calendar() {
  return (
    <div className="overflow-y-scroll h-64 w-full bg-white p-4 shadow-md rounded">
      <h2 className="text-lg font-semibold mb-2">Class Schedule</h2>
      <ul>
        <li className="border-b py-2">10:00 - 12:00 Class 1</li>
        <li className="border-b py-2">12:00 - 2:00 Class 2</li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
}
