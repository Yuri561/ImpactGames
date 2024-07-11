import React from 'react';
import './CodeSpace.css'

const players = [
    { name: 'Player One', team: 'Red', leader: true },
    { name: 'Player Two', team: 'Blue', leader: false },
    { name: 'Player Three', team: 'Red', leader: false },
    { name: 'Player Four', team: 'Blue', leader: true },
    { name: 'Player Five', team: 'Red', leader: false },
    { name: 'Player Six', team: 'Blue', leader: false },
    { name: 'Player Seven', team: 'Red', leader: false },
    { name: 'Player Eight', team: 'Blue', leader: true },
];

const getPlayerColor = (team: string, leader: boolean) => {
    if (leader) return 'text-yellow-500';
    switch (team) {
        case 'Red':
            return 'text-red-500';
        case 'Blue':
            return 'text-blue-500';
        default:
            return 'text-white';
    }
};

const CodeSpace: React.FC = () => {
    return (
        <div className="flex-1 p-6 bg-cover bg-center h-full w-full" style={{ backgroundImage: "url('/tournament.png')" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900  p-4 rounded-lg shadow h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-yellow-500 underline">Enter CodeSpace</h2>
                        <p className="text-white mb-4">When you are in tournament mode, you can only code what is tasked to you in the online code editor.</p>
                        <div className="text-white">
                            <h3 className="text-lg font-semibold mb-2">Rules for Tournament Mode</h3>
                            <ul className="list-disc list-inside">
                                <li>Follow the task instructions precisely.</li>
                                <li>No external help is allowed.</li>
                                <li>Submit your code before the deadline.</li>
                                <li>Ensure your code adheres to the coding standards.</li>
                            </ul>
                        </div>
                    </div>
                    <button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 text-xl font-bold shadow-md">
                        Start
                    </button>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-yellow-500 underline">Enter CodeSpace Spare</h2>
                        <p className="text-white mb-4">In Free Spare mode, you can challenge your friends and code whatever you like.</p>
                        <div className="text-white">
                            <h3 className="text-lg font-semibold mb-2">Rules for Free Spare Mode</h3>
                            <ul className="list-disc list-inside">
                                <li>Enjoy coding and challenging your friends.</li>
                                <li>No restrictions on what you can code.</li>
                                <li>Share your creations with your friends.</li>
                            </ul>
                        </div>
                    </div>
                    <button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 text-xl font-bold shadow-md">
                        Start
                    </button>
                </div>
                <div className="col-span-2 bg-gray-900 p-4 rounded-lg shadow mt-4">
                    <h2 className="text-xl font-bold mb-2 text-yellow-500 underline">Active Players on CodeSpace</h2>
                    <div className="overflow-hidden relative w-full">
                        <div className="marquee whitespace-nowrap">
                            {players.map((player, index) => (
                                <span key={index} className={`inline-block px-4 ${getPlayerColor(player.team, player.leader)} mr-4`}>
                                    <span className={`text-lg font-bold ${player.leader ? 'text-yellow-500' : ''}`}>{player.name}</span>
                                    <span className="text-sm"> - {player.team} Team</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeSpace;
