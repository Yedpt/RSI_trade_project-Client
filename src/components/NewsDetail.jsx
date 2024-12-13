import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsById } from '../services/newsService';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNewsById(id);
      setNews(data);
    };
    fetchNews();
  }, [id]);

  if (!news) return <div>Loading...</div>;

  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <img 
        src={news.imageUrl} 
        alt={news.title} 
        className="w-full max-w-2xl rounded-lg mb-6"
      />
      <div className="flex gap-4 text-gray-400 mb-6">
        <span>{news.user_id}</span>
        <span>•</span>
        <span>{news.date_at}</span>
      </div>
      <p className="text-lg leading-relaxed">{news.content}</p>
    </div>
  );
};

export default NewsDetail;
