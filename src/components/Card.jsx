import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import coinBase from '../assets/coinbase.png';

const Card = ({ id, imageUrl, title: initialTitle, user_id, date_at, content }) => {
  const Limit_Small = 50;
  const [title, setTitle] = useState(initialTitle);
  const [displayedTitle, setDisplayedTitle] = useState(title);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (typeof title === 'string' && title.length > Limit_Small) {
          setDisplayedTitle(title.substring(0, Limit_Small) + '...');
        } else {
          setDisplayedTitle(title);
        }
      } else {
        setDisplayedTitle(title);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [title]);

  const newPost = {
    cardContainer: `flex flex-col w-full ${showContent ? 'h-auto' : 'h-40'} m-4 bg-transparent mt-8 border-b-2 border-[#64748B] rounded-sm p-4 cursor-pointer hover:bg-gray-800 transition-colors`,
    mainContent: 'flex w-full',
    url_image: 'flex-shrink-0 rounded-lg w-32 h-28 overflow-hidden',
    image: 'w-full h-full object-cover',
    title: 'text-left font-mainFont ml-8 text-xl font-semibold text-[#f8f9fd] overflow-hidden text-wrap whitespace-normal',
    userDateContainer: 'flex items-center mt-1 ml-8 gap-2',
    user_id: 'text-base text-[#64748B] font-mainFont font-normal',
    date_at: 'text-base font-normal text-[#64748B] font-mainFont',
    content: 'mt-6 text-[#f8f9fd] font-mainFont text-base leading-relaxed px-4 border-t border-[#64748B] pt-4'
  };

  const handleCardClick = (e) => {
    // Evitar navegación si se está expandiendo el contenido
    if (showContent) {
      e.preventDefault();
      return;
    }
    
    // Navegar a la página de detalles
    navigate(`/detail/${id}`);
  };

  return (
    <div 
      className={newPost.cardContainer} 
      onClick={(e) => {
        setShowContent(!showContent);
        handleCardClick(e);
      }}
    >
      <div className={`${newPost.mainContent}`}>
        <div className={`${newPost.url_image}`}>
          <img src={imageUrl || coinBase} alt="News thumbnail" className={newPost.image} />
        </div>
        <div>
          <div className={`${newPost.title}`}>
            <h2>{displayedTitle}</h2>
          </div>
          <div className={`${newPost.userDateContainer}`}>
            <h3 className={`${newPost.user_id}`}>{user_id || 'binance'}</h3>
            <span>•</span>
            <h3 className={`${newPost.date_at}`}>{date_at || 'hace 2 horas'}</h3>
          </div>
        </div>
      </div>
      
      {showContent && (
        <div className={`${newPost.content}`}>
          <p>{content || 'According to research by the CEO of Coinbase He plans to sell his part of the company since the business is not going very well.'}</p>
        </div>
      )}
    </div>
  );
};

export default Card;