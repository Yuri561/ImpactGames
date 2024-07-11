import React, { useState, useEffect } from 'react';

const Tournament: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2024-07-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span key={interval} className="text-xl text-yellow-500 font-bold mx-1">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex-1  h-full w-full p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Main Tournament Section */}
        <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500 underline">Main Tournament</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white underline">Leaderboard</h3>
            <ul className="text-white">
              <li>1. Team Alpha - 1500 points</li>
              <li>2. Team Beta - 1400 points</li>
              <li>3. Team Gamma - 1300 points</li>
              <li>4. Team Delta - 1200 points</li>
              <li>5. Team Epsilon - 1100 points</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white underline">Tournament Type</h3>
            <p className="text-white">Round-robin tournament</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white underline">Tournament Deadline</h3>
            <p className="text-white">July 31, 2024</p>
          </div>
        </div>
        
        {/* Free Spare Section */}
        <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-yellow-500 underline">Free Spare</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white underline">Challenge Your Friends</h3>
            <p className="text-white">Invite your friends for a friendly challenge.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white underline">Leaderboard</h3>
            <ul className="text-white">
              <li>1. Player One - 50 wins</li>
              <li>2. Player Two - 45 wins</li>
              <li>3. Player Three - 40 wins</li>
              <li>4. Player Four - 35 wins</li>
              <li>5. Player Five - 30 wins</li>
            </ul>
          </div>
          <div>
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600">
              Challenge a Friend
            </button>
          </div>
        </div>

        {/* Rules & Regulations Section */}
        <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-white mb-4 text-yellow-500 underline">Rules & Regulations</h3>
          <ul className="text-white">
            <li>1. Absolutely NO AI HELP</li>
            <li>2. Every member must submit own code</li>
            <li>3. Teams can only participate in one tournament at a time</li>
            <li>4. Teams have 5 attempts to factor code</li>
            <li>5. Team MUST follow code rules on Code Space</li>
          </ul>
        </div>

        {/* Countdown Timer Section */}
        <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg shadow flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white mb-4 text-yellow-500 underline">Next Challenge Starts In</h3>
          <div className="flex flex-wrap justify-center items-center space-x-2">
            {timerComponents.length ? timerComponents : <span className="text-xl text-yellow-500">Time's up!</span>}
          </div>
          <button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600">
            Enter Tournament
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
