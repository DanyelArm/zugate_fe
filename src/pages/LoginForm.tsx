import React from 'react';

export default function LoginForm() {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-4">Professor Login</h2>
      <input type="email" placeholder="Email" className="border rounded w-full py-2 px-3 mb-3"/>
      <input type="password" placeholder="Password" className="border rounded w-full py-2 px-3 mb-3"/>
      <a href="#" className="text-blue-500 hover:underline mb-4 block text-sm">Forgot Password?</a>
      <button className="bg-blue-500 text-white rounded py-2 px-4 w-full hover:bg-blue-700">Log In</button>
    </div>
  );
}
