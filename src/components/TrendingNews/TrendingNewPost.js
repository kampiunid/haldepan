import Link from 'next/link'
import React from 'react'
const newPostData = [
  {
    postThumb: '/images/gallery-1.jpg',
    postCategory: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Nancy zhang a chinese busy woman and dhaka',
  },
  {
    postThumb: '/images/gallery-2.jpg',
    postCategory: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'The billionaire Philan thropist read to learn',
  },
  {
    postThumb: '/images/gallery-3.jpg',
    postCategory: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Cheap smartphone sensor could help you old food safe',
  },
]

export default function TrendingNewPost({ dark }) {
  return (
    <div className='row'>
      <div className='col-lg-6 col-md-6'>
        <div
          className={`trending-news-post-items ${
            dark ? 'trending-news-post-items-dark' : ''
          }`}
        >
          {newPostData.map((item, i) => (
            <div
              className={`gallery_item ${dark ? 'gallery_item_dark' : ''}`}
              key={i + 1}
            >
              <div className='gallery_item_thumb'>
                <img src={item.postThumb} alt='gallery' />
                <div className='icon'>
                  <i className='fas fa-bolt'></i>
                </div>
              </div>
              <div className='gallery_item_content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href='/post-details-three'>{item.postCategory}</Link>
                  </div>
                  <div className='meta-date'>
                    <span>{item.postDate}</span>
                  </div>
                </div>
                <h4 className='title'>
                  <Link href='/post-details-three'>{item.postTitle}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='col-lg-6 col-md-6'>
        <div
          className={`trending-news-post-items ${
            dark ? 'trending-news-post-items-dark' : ''
          }`}
        >
          {newPostData.map((item, i) => (
            <div
              className={`gallery_item ${dark ? 'gallery_item_dark' : ''}`}
              key={i + 1}
            >
              <div className='gallery_item_thumb'>
                <img src={item.postThumb} alt='gallery' />
                <div className='icon'>
                  <i className='fas fa-bolt'></i>
                </div>
              </div>
              <div className='gallery_item_content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href='/post-details-three'>{item.postCategory}</Link>
                  </div>
                  <div className='meta-date'>
                    <span>{item.postDate}</span>
                  </div>
                </div>
                <h4 className='title'>
                  <Link href='/post-details-two'>{item.postTitle}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
