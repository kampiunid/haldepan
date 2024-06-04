"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Slider from 'react-slick'
import ModalVideo from 'react-modal-video'

const postData = [
  {
    postThumb: '/images/play-post-1.jpg',
    postThumbDark: '/images/play-post-dark-1.jpg',
    postCategory: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Success is not a good food failure makes you humble',
  },
  {
    postThumb: '/images/play-post-2.jpg',
    postThumbDark: '/images/play-post-1.jpg',
    postCategory: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Success is not a good food failure makes you humble',
  },
  {
    postThumb: '/images/play-post-1.jpg',
    postThumbDark: '/images/play-post-2.jpg',
    postCategory: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Success is not a good food failure makes you humble',
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

export default function TwoPostCarousel({ dark, customClass }) {
  const [isOpen, setOpen] = useState(false)
  const settings = {
    slidesToShow: 2,
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
    <section
      className={`single-play-post-area mt-10 ${customClass} ${
        dark ? 'single-play-post-dark-area' : ''
      } `}
    >
      <div className='container custom-container'>
        <div className='single-play-box'>
          <Slider {...settings} className='row single-play-post-slider'>
            {postData.map((item, i) => (
              <div className='col' key={i + 1}>
                <div className='single-play-post-item'>
                  {dark ? (
                    <img 
                    src={item.img || `${baseURL}/images/gallery-5.jpg`}
                    alt={item.title}
                    style={{
                      position: 'relative',
                      width: '1600px',
                      height: '100%',
                      objectFit: 'cover', // Gunakan object-fit: cover; untuk menjaga rasio aspek
                    }}
                  />
                  ) : (
                    <img 
        src={item.img || `${baseURL}/images/gallery-5.jpg`}
        alt={item.title}
        style={{
          position: 'relative',
          width: '1600px',
          height: '100%',
          objectFit: 'cover', // Gunakan object-fit: cover; untuk menjaga rasio aspek
        }}
      />
                  )}

                  <div className='single-play-post-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>{item.postCategory}</a>
                      </div>
                      <div className='meta-date'>
                        <span>{item.postDate}</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <Link href='/post-details-two'>{item.postTitle}</Link>
                    </h3>
                  </div>
                  <div className='play-btn'>
                    <a
                      className='video-popup'
                      onClick={() => setOpen(true)}
                      href='#'
                    >
                      <i className='fas fa-play'></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <ModalVideo
            channel='youtube'
            autoplay
            isOpen={isOpen}
            videoId='eEzD-Y97ges'
            onClose={() => setOpen(false)}
          />
        </div>
      </div>
    </section>
  )
}
