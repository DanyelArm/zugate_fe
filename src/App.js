import React from 'react';
import Header from './components/Header.tsx';
import LoginForm from './pages/LoginForm.tsx';
import QuizForm from './pages/QuizForm.tsx';
import Popup from './pages/Popup.tsx';
import Calendar from './pages/Calendar.tsx';

function App() {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <div className="App">
      <Header />

      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div className="lg:w-1/3">
          <LoginForm />
          <QuizForm />
        </div>

        <div className="lg:w-1/3 flex justify-center">
          <h1 className="text-2xl font-semibold text-center mt-4">Professor's Name</h1>
        </div>

        <div className="lg:w-1/3">
          <Calendar />
        </div>
      </div>

      {showPopup && <Popup onClose={() => setShowPopup(false)} showStatistics={() => {/* Handle statistics display */}} />}
    </div>
  );
}

export default App;
