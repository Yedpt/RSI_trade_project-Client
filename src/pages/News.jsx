import WinApr from '../components/WinApr'
import NewsPage from '../components/NewsPage'


import React from 'react'

const News = () => {
  return (
    <div>
    <section className='bg-[#161622] flex min-h-screen'>
    <div>
      <div>
      <WinApr />
      </div>
      <NewsPage/>
    </div>
    </section>
    </div>
  )
}

export default News

