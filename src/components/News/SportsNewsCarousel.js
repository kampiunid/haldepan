"use client"

import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

const postData = [
  {
    postThumb: '/images/sports/sports-1.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Copa America: Luis Suarez from devastated US',
  },
  {
    postThumb: '/images/sports/sports-2.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Nancy Zhang a Chinese busy woman and Dhaka',
  },
  {
    postThumb: '/images/sports/sports-3.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'U.S. Response subash says he will label regions by risk of…',
  },
  {
    postThumb: '/images/sports/sports-4.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Venezuela elan govt and opposit the property collect',
  },
  {
    postThumb: '/images/sports/sports-5.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Cheap smartphone sensor could help you old food safe',
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

export default function SportsNewsCarousel({ dark }) {
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
    <Slider {...settings} className='trending-sidebar-slider'>
      <div className='post_gallery_items'>
        {postData.map((item, i) => (
          <div
            key={i + 1}
            className={`gallery_item ${dark ? 'gallery_item_dark ' : ''}`}
          >
            <div className='gallery_item_thumb'>
              <img src={item.postThumb} alt='sports' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-two'>{item.postTag}</Link>
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
      <div className='post_gallery_items'>
        {postData.map((item, i) => (
          <div
            key={i + 1}
            className={`gallery_item ${dark ? 'gallery_item_dark ' : ''}`}
          >
            <div className='gallery_item_thumb'>
              <img src={item.postThumb} alt='sports' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-two'>{item.postTag}</Link>
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
    </Slider>
  )
}
