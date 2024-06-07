import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Suscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='enter email id...'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter