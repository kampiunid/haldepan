"use client"

import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

const postData = [
  {
    id: '1',
    postThumb: '/images/populer/populer-post-1.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'The property complete with a 30 seat screen room.',
  },
  {
    id: '2',
    postThumb: '/images/populer/populer-post-3.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'The property complete with a 30 seat screen room.',
  },
  {
    id: '3',
    postThumb: '/images/populer/populer-post-3.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'The property complete with a 30 seat screen room.',
  },
  {
    id: '4',
    postThumb: '/images/populer/populer-post-4.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'The property complete with a 30 seat screen room.',
  },
  {
    id: '5',
    postThumb: '/images/populer/populer-post-5.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'The property complete with a 30 seat screen room.',
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

export default function PopularNewsCarousel({ dark }) {
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
    <div className='populer-post'>
      <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
        <h3 className='title'>Popular</h3>
      </div>
      <Slider {...settings} className='trending-sidebar-slider'>
        <div className='populer-post-slider'>
          {postData.map((item, i) => (
            <div
              key={i + 1}
              className={`gallery_item populer_item-style ${
                dark ? 'gallery_item_dark' : ''
              }`}
            >
              <div className='gallery_item_thumb'>
                <img src={item.postThumb} alt='populer' />
                <span>{item.id}</span>
              </div>
              <div className='gallery_item_content'>
                <h4 className='title'>
                  <Link href='/post-details-two'>{item.postTitle}</Link>
                </h4>
                <span>{item.postTag}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='populer-post-slider'>
          {postData.map((item, i) => (
            <div
              key={i + 1}
              className={`gallery_item populer_item-style ${
                dark ? 'gallery_item_dark' : ''
              }`}
            >
              <div className='gallery_item_thumb'>
                <img src={item.postThumb} alt='populer' />
                <span>{item.id}</span>
              </div>
              <div className='gallery_item_content'>
                <h4 className='title'>
                  <Link href='/post-details-two'>{item.postTitle}</Link>
                </h4>
                <span>{item.postTag}</span>
              </div>
            </div>
          ))}
        </div>
      </Slider>
    </div>
  )
}
