import ptohoUser from '../../DataBase/Photo'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import photoUser from '../../DataBase/Photo';
import './PhotoUi.css'

const PhotoUi = () => {
  return (
    <div>
      <div className='card flex'>
        {photoUser.map((d, i) => (
          <div className="cards" key={i}>
            <p>{d.niki}</p>
            <img src={d.img} className='imgP' alt="" />
            <div className='leftRight flex'>
              <div className="left flex">
                <FavoriteBorderIcon sx={{color: '#797596', fontSize: '20px'}} />
                <ChatBubbleOutlineOutlinedIcon sx={{color: '#797596', fontSize: '20px'}} />
                <SendOutlinedIcon sx={{color: '#797596', fontSize: '20px'}} />
              </div>
              <div className="right">
                <BookmarkBorderIcon sx={{color: '#797596', fontSize: '20px'}} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default 
PhotoUi