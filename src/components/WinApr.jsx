import React from 'react'
import saving from '../assets/saving.svg';
import { useNavigate } from 'react-router-dom';

const WinApr = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='flex flex-col lg:justify-start lg:ml-8 justify-center mt-20'>
    <div className="p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-[#8FE282]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-white text-xl font-bold">
            News
          </h1>
        </div>
      </div>
      <div className="w-[360px] h-32 relative bg-[#a2e5b3] rounded-xl mt-4 ml-4 flex items-center overflow-hidden">
        <div className="ml-6">
          <div className="text-slate-800 text-xl font-bold font-mainFont leading-7">Gane hasta 5% APR</div>
          <div className="w-[175px] text-slate-700 text-normal font-normal font-mainFont leading-normal">Cómo obtener recompensas en la app.</div>
        </div>
        <div className="ml-auto mt-9 -mr-11">
          <img src={saving} alt="" className="h-53 w-53" />
        </div>
      </div>
      </div>
    </>
  )
}

export default WinApr