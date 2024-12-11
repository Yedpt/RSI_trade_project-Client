import React from 'react'

const Card = () => {
    const Limit = 50;

    

    const newPost = {
        cardContainer: 
            'flex flex-col   justify-center w-full h-40 bg-transparent rounded-lg shadow-md p-6',

        url_image:  'flex mr-40 rounded-lg  w-32 h-32 bg-[#f1faee] ', 

        title: 'flex text-pretty items-center text-xl  text-gray-800',
              
    }
  return (
    <>
    <div className={newPost.cardContainer}>
        <div className={newPost.url_image}>
            <div className={newPost.title} >
                <h2>El CEO de Coinbase, Armstrong, planea vender parte de su par</h2>
            </div>

        </div>

     
      
    </div>
    </>
  )
}

export default Card

