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

export default function TrendingNewsCardSlider() {
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
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  }
  return (
    <div className='trending-slider-item mt-40'>
      <Slider {...settings} className='row trending-slider-3'>
        <div className='col'>
          <div className='international-item international-3-item'>
            <div className='meta-category'>
              <span>Technology</span>
            </div>
            <h5 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h5>
            <div className='text-thumb d-flex align-items-center'>
              <p>
                The property, complete with seat screening from room, a 100-seat
                amphitheater and a swimming pond with sandy shower…
              </p>
              <div className='thumb'>
                <img src='/images/international-1.jpg' alt='' />
              </div>
            </div>
            <ul>
              <li>
                <Link href='/post-details-one'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-one'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col'>
          <div className='international-item international-3-item'>
            <div className='meta-category'>
              <span>Business</span>
            </div>
            <h5 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h5>
            <div className='text-thumb d-flex align-items-center'>
              <p>
                The property, complete with seat screening from room, a 100-seat
                amphitheater and a swimming pond with sandy shower…
              </p>
              <div className='thumb'>
                <img src='/images/international-2.jpg' alt='' />
              </div>
            </div>
            <ul>
              <li>
                <Link href='/post-details-one'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-one'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='col'>
          <div className='international-item international-3-item'>
            <div className='meta-category'>
              <span>Business</span>
            </div>
            <h5 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h5>
            <div className='text-thumb d-flex align-items-center'>
              <p>
                The property, complete with seat screening from room, a 100-seat
                amphitheater and a swimming pond with sandy shower…
              </p>
              <div className='thumb'>
                <img src='/images/international-2.jpg' alt='' />
              </div>
            </div>
            <ul>
              <li>
                <Link href='/post-details-one'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-one'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Slider>
    </div>
  )
}
