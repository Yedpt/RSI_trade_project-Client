// PostUploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PostUploadForm = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    image: null,
    date_at: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    setPostData((prevState) => ({
      ...prevState,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('date_at', postData.date_at);
    if (postData.image) {
      formData.append('image', postData.image);
    }

    try {
      const response = await axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Post uploaded:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        name="title"
        value={postData.title}
        onChange={handleInputChange}
        placeholder="Title"
        className="w-full p-2 border rounded mb-3"
        required
      />
      <textarea
        name="content"
        value={postData.content}
        onChange={handleInputChange}
        placeholder="Write the content..."
        className="w-full p-2 border rounded mb-3"
        rows="4"
        required
      />
      <input
        type="text"
        name="dateAt"
        value={postData.date_at}
        onChange={handleInputChange}
        placeholder="Publication Date"
        className="w-full p-2 border rounded mb-3"
        required
      />
      <input
        type="file"
        name="image"
        onChange={handleImageUpload}
        accept="image/*"
        className="w-full p-2 border rounded mb-3"
        required
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Upload Post
      </button>
    </form>
  );
};

export default PostUploadForm;