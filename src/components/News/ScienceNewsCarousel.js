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

export default function ScienceNewsCarousel() {
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
    <div className='science-news-area mt-30'>
      <div className='section-title section-title-3'>
        <h3 className='title'>Science News</h3>
      </div>
      <Slider {...settings} className='row science-slide'>
        <div className='col'>
          <div className='science-news-item'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h3>
            <div className='post-text-thumb'>
              <div className='thumb'>
                <img src='/images/science-1.jpg' alt='science' />
              </div>
              <div className='text'>
                <p>
                  The property, complete with seat screening from room, a
                  100-seat amphitheater and a swimming pond with…
                </p>
              </div>
            </div>
            <div className='post-user'>
              <Link href='/post-details-one'>
                <i className='fal fa-bookmark'></i>
              </Link>
              <span>
                By <span>Subash Chandra</span>
              </span>
              <p>March 26, 2020</p>
            </div>
          </div>
          <div className='science-news-item'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h3>
            <div className='post-text-thumb'>
              <div className='thumb'>
                <img src='/images/science-2.jpg' alt='science' />
              </div>
              <div className='text'>
                <p>
                  The property, complete with seat screening from room, a
                  100-seat amphitheater and a swimming pond with…
                </p>
              </div>
            </div>
            <div className='post-user'>
              <Link href='/post-details-one'>
                <i className='fal fa-bookmark'></i>
              </Link>
              <span>
                By <span>Subash Chandra</span>
              </span>
              <p>March 26, 2020</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='science-news-item'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h3>
            <div className='post-text-thumb'>
              <div className='thumb'>
                <img src='/images/science-3.jpg' alt='science' />
              </div>
              <div className='text'>
                <p>
                  The property, complete with seat screening from room, a
                  100-seat amphitheater and a swimming pond with…
                </p>
              </div>
            </div>
            <div className='post-user'>
              <Link href='/post-details-one'>
                <i className='fal fa-bookmark'></i>
              </Link>
              <span>
                By <span>Subash Chandra</span>
              </span>
              <p>March 26, 2020</p>
            </div>
          </div>
          <div className='science-news-item'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h3>
            <div className='post-text-thumb'>
              <div className='thumb'>
                <img src='/images/science-4.jpg' alt='science' />
              </div>
              <div className='text'>
                <p>
                  The property, complete with seat screening from room, a
                  100-seat amphitheater and a swimming pond with…
                </p>
              </div>
            </div>
            <div className='post-user'>
              <Link href='/post-details-one'>
                <i className='fal fa-bookmark'></i>
              </Link>
              <span>
                By <span>Subash Chandra</span>
              </span>
              <p>March 26, 2020</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='science-news-item'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h3>
            <div className='post-text-thumb'>
              <div className='thumb'>
                <img src='/images/science-4.jpg' alt='science' />
              </div>
              <div className='text'>
                <p>
                  The property, complete with seat screening from room, a
                  100-seat amphitheater and a swimming pond with…
                </p>
              </div>
            </div>
            <div className='post-user'>
              <Link href='/post-details-one'>
                <i className='fal fa-bookmark'></i>
              </Link>
              <span>
                By <span>Subash Chandra</span>
              </span>
              <p>March 26, 2020</p>
            </div>
          </div>
          <div className='science-news-item'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Why clinician spiritual health matters in the covid-19 crisis:
                you can’t pour from an empty cup…
              </Link>
            </h3>
            <div className='post-text-thumb'>
              <div className='thumb'>
                <img src='/images/science-1.jpg' alt='science' />
              </div>
              <div className='text'>
                <p>
                  The property, complete with seat screening from room, a
                  100-seat amphitheater and a swimming pond with…
                </p>
              </div>
            </div>
            <div className='post-user'>
              <Link href='/post-details-one'>
                <i className='fal fa-bookmark'></i>
              </Link>
              <span>
                By <span>Subash Chandra</span>
              </span>
              <p>March 26, 2020</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
