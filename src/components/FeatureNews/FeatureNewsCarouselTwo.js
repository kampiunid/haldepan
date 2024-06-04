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

export default function FeatureNewsCarouselTwo() {
  const settings = {
    slidesToShow: 3,
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
          slidesToShow: 2,
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
    <Slider {...settings} className='row feature-slider'>
      <div className='col'>
        <div className='feature-news-item'>
          <div className='feature-news-thumb'>
            <img src='/images/feature/feature-news-1.jpg' alt='feature' />
            <div className='meta-categores'>
              <span>TECHNOLOGY</span>
            </div>
          </div>
          <div className='feature-news-content'>
            <p>
              The worried doctors stood together after their rounds, weighing
              the risks.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='feature-news-item'>
          <div className='feature-news-thumb'>
            <img src='/images/feature/feature-news-2.jpg' alt='feature' />
            <div className='meta-categores'>
              <span>TECHNOLOGY</span>
            </div>
          </div>
          <div className='feature-news-content'>
            <p>
              The worried doctors stood together after their rounds, weighing
              the risks.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='feature-news-item'>
          <div className='feature-news-thumb'>
            <img src='/images/feature/feature-news-3.jpg' alt='feature' />
            <div className='meta-categores'>
              <span>TECHNOLOGY</span>
            </div>
          </div>
          <div className='feature-news-content'>
            <p>
              The worried doctors stood together after their rounds, weighing
              the risks.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='feature-news-item'>
          <div className='feature-news-thumb'>
            <img src='/images/feature/feature-news-2.jpg' alt='feature' />
            <div className='meta-categores'>
              <span>TECHNOLOGY</span>
            </div>
          </div>
          <div className='feature-news-content'>
            <p>
              The worried doctors stood together after their rounds, weighing
              the risks.{' '}
            </p>
          </div>
        </div>
      </div>
    </Slider>
  )
}
