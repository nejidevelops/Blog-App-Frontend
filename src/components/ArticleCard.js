import React from 'react';
import { images } from '../constants'

const ArticleCard = ({ className }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
      <img src={images.Post1Image} alt="title" className='w-full object-cover object-center h-auto' />
    </div>
  )
}

export default ArticleCard
