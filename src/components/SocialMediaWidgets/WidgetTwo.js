import React from 'react'

export default function WidgetTwo({ customClass }) {
  return (
    <div className='post-contact'>
      <div className={`section-title ${customClass}`}>
        <h3 className='title'>Connect us</h3>
      </div>
      <ul>
        <li>
          <a href='#'>
            <i className='fab fa-facebook-f'></i>
            <span>34,456</span>
            <p>Fans</p>
          </a>
        </li>
        <li>
          <a className='item-2' href='#'>
            <i className='fab fa-twitter'></i>
            <span>34,456</span>
            <p>Followers</p>
          </a>
        </li>
        <li>
          <a className='item-3' href='#'>
            <i className='fab fa-youtube'></i>
            <span>34,456</span>
            <p>Subscribers</p>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a className='item-4' href='#'>
            <i className='fab fa-instagram'></i>
            <span>34,456</span>
            <p>Followers</p>
          </a>
        </li>
        <li>
          <a className='item-5' href='#'>
            <i className='fab fa-vimeo-v'></i>
            <span>34,456</span>
            <p>Followers</p>
          </a>
        </li>
        <li>
          <a className='item-6' href='#'>
            <i className='fab fa-maxcdn'></i>
            <span>34,456</span>
            <p>Fans</p>
          </a>
        </li>
      </ul>
    </div>
  )
}
