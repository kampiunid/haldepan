"use client"

import React from 'react'

export default function TrendingNewsWidget() {
  return (
    <div className='trending-news-post-items'>
      <div className='gallery_item'>
        <div className='gallery_item_thumb'>
          <img src='/images/gallery-1.jpg' alt='gallery' />
          <div className='icon'>
            <i className='fas fa-bolt'></i>
          </div>
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <a href='#'>TECHNOLOGY</a>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <a href='#'>Nancy zhang a chinese busy woman and dhaka</a>
          </h4>
        </div>
      </div>
      <div className='gallery_item'>
        <div className='gallery_item_thumb'>
          <img src='/images/gallery-2.jpg' alt='gallery' />
          <div className='icon'>
            <i className='fas fa-bolt'></i>
          </div>
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <a href='#'>TECHNOLOGY</a>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <a href='#'>The billionaire Philan thropist read to learn</a>
          </h4>
        </div>
      </div>
      <div className='gallery_item'>
        <div className='gallery_item_thumb'>
          <img src='/images/gallery-3.jpg' alt='gallery' />
          <div className='icon'>
            <i className='fas fa-bolt'></i>
          </div>
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <a href='#'>TECHNOLOGY</a>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <a href='#'>Cheap smartphone sensor could help you old food safe</a>
          </h4>
        </div>
      </div>
    </div>
  )
}
