import React from 'react'

export default function WidgetOne({ dark, customClass }) {
  return (
    <div className={`trending-right-sidebar ${customClass}`}>
      <div className='trending-social'>
        <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
          <h3 className='title'>Follow us</h3>
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
    </div>
  )
}
