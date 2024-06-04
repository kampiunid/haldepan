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
export default function MostViewTwo() {
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
    <div className='most-view-box'>
      <div className='section-title'>
        <h3 className='title'>Most View</h3>
      </div>

      <Slider {...settings} className='trending-sidebar-slider'>
        <div className='post_gallery_items'>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/1.png' alt='gallery' />
              <span>1</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/2.png' alt='gallery' />
              <span>2</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/3.png' alt='gallery' />
              <span>3</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/4.png' alt='gallery' />
              <span>4</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/5.png' alt='gallery' />
              <span>5</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='post_gallery_items'>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/1.png' alt='gallery' />
              <span>1</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/2.png' alt='gallery' />
              <span>2</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/3.png' alt='gallery' />
              <span>3</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/4.png' alt='gallery' />
              <span>4</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
          <div className='post-gallery-style-2 most-view-style-2'>
            <div className='post-gallery-thumb'>
              <img src='/images/gallery-post/5.png' alt='gallery' />
              <span>5</span>
            </div>
            <div className='post-gallery-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  The city with highest quality of life in world.
                </Link>
              </h5>
              <div className='meta-post-2-style'>
                <div className='meta-post-categores'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-post-date'>
                  <span>April 26, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
