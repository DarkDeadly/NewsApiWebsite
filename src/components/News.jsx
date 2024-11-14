import React from 'react'
import { Link } from 'react-router-dom'

const News = ({NewsDatas , flexDirection = "flex-reverse" , height ='h-1/2' , width = 'w-full' , titleText ='text-4xl', showbottomTitle = false , maxlg = ""}) => {
  return (
    <div className={`flex ${flexDirection} border-2 border-black rounded-lg w-full`}>
      <div className={`h-full ${maxlg} aspect-auto	`}>
      <img src={NewsDatas.urlToImage} alt="element" className={`${width} ${height} rounded-lg `}/>

      </div>
        <div className="px-3 flex flex-col justify-center pt-5">
            <div className="flex justify-between items-center pb-5">
            <h1 className={`font-mono ${titleText} font-bold underline w-[60%] `}>{NewsDatas.title}</h1>
            {!showbottomTitle &&<p className='text-lg font-serif font-bold'> writed by {NewsDatas.author}</p>}
            </div>
            <p className='text-2xl pb-5'>{NewsDatas.description}</p>
            <p className='text-2xl'>to read the full article visits <Link to={NewsDatas.url} className='text-2xl underline text-purple-700'>here</Link></p>
            {showbottomTitle &&<p className='text-lg font-serif font-bold pt-5'> writed by {NewsDatas.author}</p>
        }
        </div>
    </div>
  )
}

export default News
