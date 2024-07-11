import React, { useState } from 'react';
import NewPost from './NewPost';

const initialProfiles = [
  {
    name: 'John Doe',
    avatar: '/logo1.png',
    posts: [
      {
        content: 'Did Team 2 make a move yet?',
        time: '2 hours ago',
        likes: 10,
        comments: 2,
      },
      {
        content: 'When is the next tournament?.',
        time: '1 day ago',
        likes: 20,
        comments: 5,
      },
    ],
  },
  {
    name: 'Jane Smith',
    avatar: '/logo1.png',
    posts: [
      {
        content: 'Hello world!',
        time: '3 hours ago',
        likes: 15,
        comments: 3,
      },
      {
        content: 'Loving the new Impact Games platform!',
        time: '2 days ago',
        likes: 25,
        comments: 8,
      },
    ],
  },
  // Add more profiles as needed
];

const ProfileFeed: React.FC = () => {
  const [profiles, setProfiles] = useState(initialProfiles);

  const addPost = (content: string) => {
    const newPost = {
      content,
      time: 'Just now',
      likes: 0,
      comments: 0,
    };
    const updatedProfiles = profiles.map((profile, index) => {
      if (index === 0) { // Assuming the first profile is the logged-in user
        return {
          ...profile,
          posts: [newPost, ...profile.posts],
        };
      }
      return profile;
    });
    setProfiles(updatedProfiles);
  };

  return (
    <div className=" bg-cover bg-center" style={{ backgroundImage: "url('/logo1.png')" }}>
      <NewPost addPost={addPost} />
      {profiles.map((profile, index) => (
        <div key={index} className="bg-gray-900  p-4 rounded-lg shadow mb-8">
          <div className="flex items-center mb-4">
            <img src={profile.avatar} alt={profile.name} className="h-12 w-12 rounded-full mr-4" />
            <h2 className="text-2xl text-yellow-500">{profile.name}</h2>
          </div>
          {profile.posts.map((post, postIndex) => (
            <div key={postIndex} className="bg-gray-900  p-4 rounded-lg shadow mb-4">
              <p className="text-white">{post.content}</p>
              <div className="flex justify-between items-center text-gray-400 text-sm mt-2">
                <span>{post.time}</span>
                <div className="flex space-x-4">
                  <span>{post.likes} Likes</span>
                  <span>{post.comments} Comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProfileFeed;
