"use client"

import React from 'react'
import Slider from 'react-slick'
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

export default function TrendingSingleCarousel() {
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
    <div className='trending-sidebar mt-40'>
      <div className='section-title'>
        <h3 className='title'>Trending News</h3>
      </div>
      <Slider className='trending-sidebar-slider' {...settings}>
        <div className='trending-news-item'>
          <div className='trending-news-thumb'>
            <img src='/images/trending-news-1.jpg' alt='trending' />
            <div className='icon'>
              <a href='#'>
                <i className='fas fa-bolt'></i>
              </a>
            </div>
          </div>
          <div className='trending-news-content'>
            <div className='post-meta'>
              <div className='meta-categories'>
                <a href='#'>TECHNOLOGY</a>
              </div>
              <div className='meta-date'>
                <span>March 26, 2020</span>
              </div>
            </div>
            <h3 className='title'>
              <a href='#'>
                There may be no consoles in the future ea exec says
              </a>
            </h3>
            <p className='text'>
              The property, complete with 30-seat screening from room, a
              100-seat amphitheater and a swimming pond with sandy shower…
            </p>
          </div>
        </div>
        <div className='trending-news-item'>
          <div className='trending-news-thumb'>
            <img src='/images/trending-news-2.jpg' alt='trending' />
            <div className='icon'>
              <a href='#'>
                <i className='fas fa-bolt'></i>
              </a>
            </div>
          </div>
          <div className='trending-news-content'>
            <div className='post-meta'>
              <div className='meta-categories'>
                <a href='#'>TECHNOLOGY</a>
              </div>
              <div className='meta-date'>
                <span>March 26, 2020</span>
              </div>
            </div>
            <h3 className='title'>
              <a href='#'>
                Japan’s virus success has puzzled the world. Is its luck running
                out?
              </a>
            </h3>
            <p className='text'>
              The property, complete with 30-seat screening from room, a
              100-seat amphitheater and a swimming pond with sandy shower…
            </p>
          </div>
        </div>
        <div className='trending-news-item'>
          <div className='trending-news-thumb'>
            <img src='/images/trending-news-3.jpg' alt='trending' />
            <div className='icon'>
              <a href='#'>
                <i className='fas fa-bolt'></i>
              </a>
            </div>
          </div>
          <div className='trending-news-content'>
            <div className='post-meta'>
              <div className='meta-categories'>
                <a href='#'>TECHNOLOGY</a>
              </div>
              <div className='meta-date'>
                <span>March 26, 2020</span>
              </div>
            </div>
            <h3 className='title'>
              <a href='#'>
                Japan’s virus success has puzzled the world. Is its luck running
                out?
              </a>
            </h3>
            <p className='text'>
              The property, complete with 30-seat screening from room, a
              100-seat amphitheater and a swimming pond with sandy shower…
            </p>
          </div>
        </div>
      </Slider>
    </div>
  )
}
