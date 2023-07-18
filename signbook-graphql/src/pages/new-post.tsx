import Link from 'next/link';
import { useState } from 'react';

const NewPost = () => {
  const [formState, setFormState] = useState({});

  const handleInput = ({ event, name }: any) => {
    setFormState({
      ...formState,
      [name]: event.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-10">Sign the Real-World Next.js signbook!</h1>
      <div className="max-w-7xl shadow-xl bg-purple-50 p-7 mb-10 grid grid-rows-1 gap-4 rounded-md border-2 border-purple-800">
        <div>
          <label htmlFor="title" className="text-purple-900 mb-2">
            title
          </label>
          <input
            id="title"
            type="text"
            onChange={(event) => handleInput({ event, name: 'title' })}
            placeholder="Your name"
            className="p-2 rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="body" className="text-purple-900 mb-2">
            body
          </label>
          <textarea
            id="body"
            placeholder="Leave a message here!"
            onChange={(event) => handleInput({ event, name: 'body' })}
            className="p-2 rounded-lg w-full"
          />

          <button className="bg-purple-600 p-4 rounded-lg text-gray-50 m-auto mt-4">
            Submit
          </button>
        </div>
      </div>
      <Link href="/" passHref className="mt-5 underline">
        Back to the homepage
      </Link>
    </div>
  );
};

export default NewPost;
