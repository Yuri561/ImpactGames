import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col p-6 bg-cover bg-center w-full h-screen overflow-auto" style={{ backgroundImage: "url('/logo1.png')" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 flex-1">
        <div className="bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">Leaderboard & Current Ranks</h2>
          <table className="w-full text-left text-white border-collapse cursor-pointer">
            <thead>
              <tr className='border'>
                <th className="p-2 border-r border-gray-600">Rank</th>
                <th className="p-2 border-r border-gray-600">Team</th>
                <th className="p-2 border-r border-gray-600">Points</th>
                <th className="p-2 border-r border-gray-600">Player</th>
                <th className="p-2">Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-700 border">
                <td className="p-2 border-r border-gray-600">1</td>
                <td className="p-2 border-r border-gray-600">Team Alpha</td>
                <td className="p-2 border-r border-gray-600">1500</td>
                <td className="p-2 border-r border-gray-600">Player One</td>
                <td className="p-2">Diamond</td>
              </tr>
              <tr className="hover:bg-gray-700 border">
                <td className="p-2 border-r border-gray-600">2</td>
                <td className="p-2 border-r border-gray-600">Team Beta</td>
                <td className="p-2 border-r border-gray-600">1400</td>
                <td className="p-2 border-r border-gray-600">Player Two</td>
                <td className="p-2">Platinum</td>
              </tr>
              <tr className="hover:bg-gray-700 border">
                <td className="p-2 border-r border-gray-600">3</td>
                <td className="p-2 border-r border-gray-600">Team Gamma</td>
                <td className="p-2 border-r border-gray-600">1300</td>
                <td className="p-2 border-r border-gray-600">Player Three</td>
                <td className="p-2">Gold</td>
              </tr>
              <tr className="hover:bg-gray-700 border">
                <td className="p-2 border-r border-gray-600">4</td>
                <td className="p-2 border-r border-gray-600">Team Delta</td>
                <td className="p-2 border-r border-gray-600">1200</td>
                <td className="p-2 border-r border-gray-600">Player Four</td>
                <td className="p-2">Silver</td>
              </tr>
              <tr className="hover:bg-gray-700 border">
                <td className="p-2 border-r border-gray-600">5</td>
                <td className="p-2 border-r border-gray-600">Team Epsilon</td>
                <td className="p-2 border-r border-gray-600">1100</td>
                <td className="p-2 border-r border-gray-600">Player Five</td>
                <td className="p-2">Bronze</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">Welcome to Impact Games</h2>
          <p className="text-white">
            Impact Games is a collaborative platform where users can participate in monthly coding challenges and tournaments. Users log in through Discord verification and work in teams to build projects in a phased manner using an integrated code editor.
          </p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">Upcoming Challenges</h2>
          <ul className="text-white">
            <li>Week 1: Team Alpha builds the grid.</li>
            <li>Week 2: Team Beta adds game logic.</li>
            <li>Week 3: Both teams refine and polish the game.</li>
            <li>Week 4: Tournament rounds where teams compete to win.</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg shadow flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2 text-yellow-500">Discord Check-In</h2>
          <FaDiscord className="text-white text-6xl animate-spin mb-4" />
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600">
            Check Impact Team Membership
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
