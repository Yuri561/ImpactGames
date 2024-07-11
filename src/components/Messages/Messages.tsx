import React from 'react';
import { FaHome, FaStar, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const messages = [
  {
    sender: 'Neil Sims',
    subject: 'Am no listening depending up believing.',
    content: 'Enough around remove to barton agreed regret it.',
    time: '17m ago',
    avatar: '/logo1.png'
  },
  {
    sender: 'Bonnie Green',
    subject: 'For norland produce age wishing.',
    content: 'To figure on it spring season up. Her provision acuteness ...',
    time: '16m ago',
    avatar: '/logo1.png'
  },
  {
    sender: 'Roberta Casas',
    subject: 'Silent sir say desire fat him letter.',
    content: 'Whatever settling goodness too and honoured she buildin...',
    time: '16m ago',
    avatar: '/logo1.png'
  },
  {
    sender: 'Michael Gough',
    subject: 'Smallest directly families surprise honoured am an.',
    content: 'Speaking reading mistress him numerous...',
    time: '15m ago',
    avatar: '/logo1.png'
  },
  {
    sender: 'Jese Leos',
    subject: 'Sing long her way size.',
    content: 'Waited end mutual missed myself the little sister one. So in pointed or...',
    time: '14m ago',
    avatar: '/logo1.png'
  },
  // Add more messages as needed
];

const Messages: React.FC = () => {
  return (
    <div className="flex-1 p-6 bg-cover bg-center h-full w-full" style={{ backgroundImage: "url('/logo1.png')" }}>
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-4">Messages</h1>
      <div className="bg-gray-900  p-4 rounded-lg shadow overflow-y">
        <div className='flex justify-between items-center bg-gray-800 bg-opacity-30 p-4 rounded-lg shadow mb-3'>
          <FaHome className='text-yellow-500 w-8 h-8 cursor-pointer' />
          <div className='flex space-x-4'>
            <FaArrowLeft className='text-yellow-500 w-8 h-8 cursor-pointer'/>
            <FaArrowRight className='text-yellow-500 w-8 h-8 cursor-pointer'/>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 cursor-pointer">
            Compose
          </button>
          <span className="text-white">Show 1-25 of {messages.length}</span>
        </div>
        <table className="w-full text-left text-white">
          <thead>
            <tr>
              <th className="p-2">From</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Time</th>
            </tr>
          </thead>
          <tbody className='cursor-pointer'>
            {messages.map((message, index) => (
              <tr key={index} className="hover:bg-gray-700 border-t border-b">
                <td className="p-2 flex items-center">
                  <img src={message.avatar} alt={message.sender} className="h-8 w-8 rounded-full mr-2" />
                  {message.sender}
                </td>
                <td className="p-2">
                  <FaStar className="inline text-yellow-500 mr-2" />
                  {message.subject} - {message.content}
                </td>
                <td className="p-2">{message.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
