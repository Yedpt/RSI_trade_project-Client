// NewsCard.js
import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const News = ({ urlImage, title, content, dateAt }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white border rounded-lg overflow-hidden shadow-md mb-4">
      {/* Image */}
      <img src={urlImage} alt={title} className="w-full h-[400px] object-cover" />

      {/* Content */}
      <div className="p-3">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700">{content}</p>
        <p className="text-xs text-gray-400 mt-2">{dateAt}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between p-3 border-t">
        <div className="flex space-x-4">
          <button onClick={() => setLiked(!liked)} className={`${liked ? 'text-red-500' : 'text-gray-500'}`}>
            <Heart fill={liked ? 'currentColor' : 'none'} />
          </button>
          <MessageCircle className="text-gray-500" />
          <Send className="text-gray-500" />
        </div>
        <Bookmark className="text-gray-500" />
      </div>
    </div>
  );
};

export default News;
