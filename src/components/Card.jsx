import React, { useState, useEffect } from 'react';

const Card = () => {
  const Limit_Small = 50;

  const [title, setTitle] = useState(
    'El CEO de Coinbase, Armstrong, planea vender parte de su participación'
  );
  const [displayedTitle, setDisplayedTitle] = useState(title);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { // Móvil: limitar el texto
        if (title.length > Limit_Small) {
          setDisplayedTitle(title.substring(0, Limit_Small) + '...');
        } else {
          setDisplayedTitle(title);
        }
      } else { // Escritorio: texto completo
        setDisplayedTitle(title);
      }
    };

    handleResize(); // Llamar al cargar
    window.addEventListener('resize', handleResize); // Escuchar redimensionamiento

    return () => {
      window.removeEventListener('resize', handleResize); // Limpieza
    };
  }, [title]);

  const newPost = {
    cardContainer: 'flex w-full h-40 bg-transparent rounded-lg shadow-md p-4',
    url_image: 'flex-shrink-0 rounded-lg w-32 h-32 bg-[#f1faee]', // Asegura que no cambie de tamaño
    title: ' text-left ml-2 text-2xl text-gray-800 overflow-hidden  whitespace-normal',
  };

  return (
    <>
      <div className={newPost.cardContainer}>
        
          <div className={newPost.url_image}></div>
          <div className={newPost.title}>
            <h2>{displayedTitle}</h2>
          </div>
        
      </div>
    </>
  );
};

export default Card;
