import React, { useState } from 'react';

interface NewPostProps {
  addPost: (content: string) => void;
}

const NewPost: React.FC<NewPostProps> = ({ addPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent('');
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-75 p-4 rounded-lg shadow mb-8">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-2 rounded-md bg-gray-700 text-white"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 mt-2"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
