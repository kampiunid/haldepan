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
export default function TrendingLargeCarousel() {
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
    <div className='treding-post-news mt-40'>
      <div className='section-title'>
        <h3 className='title'>Trending News</h3>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='post-news-item-2'>
            <div className='post-news-thumb'>
              <img src='/images/post-news-thumb-2.png' alt='' />
            </div>
            <div className='post-news-content'>
              <h3 className='title'>
                <Link href='/post-details-one'>
                  There may be no consoles in the future ea exec says
                </Link>
              </h3>
              <p>
                The property, complete with 30-seat screening from room, a
                100-seat amphitheater and a swimming pond with sandy shower…
              </p>
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
        <div className='col-md-6'>
          <Slider {...settings} className='trending-sidebar-slider'>
            <div className='post_gallery_items'>
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/1.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/2.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/3.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/4.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/5.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/1.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/2.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/3.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/4.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
              <div className='post-gallery-style-2'>
                <div className='post-gallery-thumb'>
                  <img src='/images/gallery-post/5.png' alt='gallery' />
                </div>
                <div className='post-gallery-content'>
                  <h5 className='title'>
                    <Link href='/post-details-one'>
                      Miami woman deliver her powerful winds kept help from
                      nuture…
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
      </div>
    </div>
  )
}
