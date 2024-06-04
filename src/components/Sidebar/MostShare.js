"use client"

import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

const postData = [
  {
    id: '1',
    postTag: 'TECHNOLOGY',
    postTitle: '     Nancy zhang a chinese busy woman and dhaka',
    postDate: 'March 26, 2020',
  },
  {
    id: '2',
    postTag: 'TECHNOLOGY',
    postTitle: '     Nancy zhang a chinese busy woman and dhaka',
    postDate: 'March 26, 2020',
  },
  {
    id: '3',
    postTag: 'TECHNOLOGY',
    postTitle: '     Nancy zhang a chinese busy woman and dhaka',
    postDate: 'March 26, 2020',
  },
  {
    id: '4',
    postTag: 'TECHNOLOGY',
    postTitle: '     Nancy zhang a chinese busy woman and dhaka',
    postDate: 'March 26, 2020',
  },
  {
    id: '5',
    postTag: 'TECHNOLOGY',
    postTitle: '     Nancy zhang a chinese busy woman and dhaka',
    postDate: 'March 26, 2020',
  },
]

function PrevArrow(props) {
  const { onClick } = props
  return (
    <span className='prev slick-arrow' onClick={onClick}>
      <i className='fal fa-angle-left'></i>
    </span>
  )
}
function NextArrow(props) {
  const { onClick } = props
  return (
    <span className='next slick-arrow' onClick={onClick}>
      <i className='fal fa-angle-right'></i>
    </span>
  )
}
export default function MostShare({ customClass, dark }) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div className={`all-post-sidebar ${customClass}`}>
      <div className='most-share-post'>
        <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
          <h3 className='title'>Most Share</h3>
        </div>
      </div>
      <Slider {...settings} className='trending-sidebar-slider'>
        <div className='most-share-post-items'>
          {postData.map((item, i) => (
            <div
              className={`most-share-post-item ${
                dark ? 'most-share-post-item-dark' : ''
              }`}
              key={i + 1}
            >
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>{item.postTag}</Link>
                </div>
                <div className='meta-date'>
                  <span>{item.postDate}</span>
                </div>
              </div>
              <h3 className='title'>
                <Link href='/post-details-one'>{item.postTitle}</Link>
              </h3>
              <ul>
                <li>
                  <i className='fab fa-twitter'></i> 2.2K
                </li>
                <li>
                  <i className='fab fa-facebook-f'></i> 3.5K
                </li>
              </ul>
              <div className='count'>
                <span>{item.id}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='most-share-post-items'>
          {postData.map((item, i) => (
            <div
              className={`most-share-post-item ${
                dark ? 'most-share-post-item-dark' : ''
              }`}
              key={i + 1}
            >
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>{item.postTag}</Link>
                </div>
                <div className='meta-date'>
                  <span>{item.postDate}</span>
                </div>
              </div>
              <h3 className='title'>
                <Link href='/post-details-one'>{item.postTitle}</Link>
              </h3>
              <ul>
                <li>
                  <i className='fab fa-twitter'></i> 2.2K
                </li>
                <li>
                  <i className='fab fa-facebook-f'></i> 3.5K
                </li>
              </ul>
              <div className='count'>
                <span>{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </Slider>
    </div>
  )
}
