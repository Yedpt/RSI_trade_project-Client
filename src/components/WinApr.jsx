import React from 'react'
import saving from '../assets/saving.svg';

const WinApr = () => {
  return (
    <>
      <div className="w-[360px] h-32 relative bg-[#a2e5b3] rounded-xl mt-8 ml-8 flex items-center overflow-hidden">
        <div className="ml-6">
          <div className="text-slate-800 text-xl font-bold font-mainFont leading-7">Gane hasta 5% APR</div>
          <div className="w-[175px] text-slate-700 text-normal font-normal font-mainFont leading-normal">Cómo obtener recompensas en la app.</div>
        </div>
        <div className="ml-auto mt-9 -mr-11">
          <img src={saving} alt="" className="h-53 w-53" />
        </div>
      </div>
    </>
  )
}

export default WinApr