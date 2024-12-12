import React, { useState, useEffect } from 'react';
import coinBase  from '../assets/coinbase.png';

const Card = () => {
  const Limit_Small = 50;

  const [title, setTitle] = useState(
    'El CEO de Coinbase, Armstrong, planea vender parte de su participación'
  );
  const [displayedTitle, setDisplayedTitle] = useState(title);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        if (title.length > Limit_Small) {
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
    cardContainer: 'flex w-full h-40 bg-transparent border-4  border-b-[#64748B] rounded-lg  p-4',
    url_image: 'flex-shrink-0 rounded-lg w-32 h-28 bg-[#f1faee]',
    title: 'text-left font-mainFont ml-8 text-xl font-semibold text-[#f8f9fd] overflow-hidden text-wrap whitespace-normal',
    userDateContainer: 'flex items-center mt-1 ml-8 gap-2',
    user_id: 'text-base text-[#64748B] font-mainFont font-normal ',
    date_at: 'text-base font-normal text-[#64748B] font-mainFont ',
  };
  
  return (
    <>
      <div className={newPost.cardContainer}>
        <div className={newPost.url_image}>
          <img src={coinBase} alt="" />
        </div>
        <div>
          <div className={newPost.title}>
            <h2>{displayedTitle}</h2>
          </div>

          <div className={newPost.userDateContainer}>
            <h3 className={newPost.user_id}>binance</h3>
            <span>•</span>
            <h3 className={newPost.date_at}>hace 2 horas</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;