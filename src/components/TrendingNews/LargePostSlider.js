import Link from 'next/link'
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

export default function LargePostSlider() {
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
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }
  return (
    <Slider {...settings} className='trending-image-slide'>
      <div className='trending-image-post mt-30'>
        <img src='/images/trending-image-post-1.jpg' alt='' />
        <div className='trending-image-content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-two'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h3 className='title'>
            <Link href='/post-details-two'>
              Japan’s virus success has puzzled the world. Is its luck running
              out?
            </Link>
          </h3>
        </div>
      </div>
      <div className='trending-image-post mt-30'>
        <img src='/images/trending-image-post-2.jpg' alt='' />
        <div className='trending-image-content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-two'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h3 className='title'>
            <Link href='/post-details-two'>
              Japan’s virus success has puzzled the world. Is its luck running
              out?
            </Link>
          </h3>
        </div>
      </div>
    </Slider>
  )
}
