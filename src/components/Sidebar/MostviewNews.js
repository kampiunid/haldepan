import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'

const postData = [
  {
    id: 1,
    postThumb: '/images/most-post/most-1.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Joko zhang a chinese busy woman and dhaka',
  },
  {
    id: 2,
    postThumb: '/images/most-post/most-2.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'The billionaire Philan thropist read to learn',
  },
  {
    id: 3,
    postThumb: '/images/most-post/most-3.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Cheap smartphone sensor could help you old food safe',
  },
  {
    id: 4,
    postThumb: '/images/most-post/most-4.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Nancy zhang a chinese busy woman and dhaka',
  },
  {
    id: 5,
    postThumb: '/images/most-post/most-5.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Class property employ ancho red multi',
  },
  {
    id: 6,
    postThumb: '/images/most-post/most-6.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Ratiffe to be Director of nation talent Trump ignored',
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
export default function MostviewNews({ dark }) {
  const setting = {
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
    <>
      <div className='trending-most-view mt-25'>
        <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
          <h3 className='title'>Most View</h3>
        </div>
      </div>
      <Slider {...setting} className='trending-sidebar-slider'>
        <div className='post_gallery_items'>
          {postData.map((item, i) => (
            <div
              className={`gallery_item gallery_item-style-2 ${
                dark ? 'gallery_item_dark' : ''
              }`}
              key={item.id}
            >
              <div className='gallery_item_thumb'>
                <img src={item.thumb} alt='gallery' />
                <div className='icon'>
                  <i className='fas fa-bolt'></i>
                </div>
              </div>
              <div className='gallery_item_content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href='/post-details-one'>{item.postTag}</Link>
                  </div>
                  <div className='meta-date'>
                    <span>{item.postDate}</span>
                  </div>
                </div>
                <h4 className='title'>
                  <Link href='/post-details-one'>{item.postTitle}</Link>
                </h4>
                <span>{item.id}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='post_gallery_items'>
          {postData.map((item, i) => (
            <div
              className={`gallery_item gallery_item-style-2 ${
                dark ? 'gallery_item_dark' : ''
              }`}
              key={item.id}
            >
              <div className='gallery_item_thumb'>
                <img src={item.postThumb} alt='gallery' />
                <div className='icon'>
                  <i className='fas fa-bolt'></i>
                </div>
              </div>
              <div className='gallery_item_content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href='/post-details-one'>{item.postTag}</Link>
                  </div>
                  <div className='meta-date'>
                    <span>{item.postDate}</span>
                  </div>
                </div>
                <h4 className='title'>
                  <Link href='/post-details-one'>{item.postTitle}</Link>
                </h4>
                <span>{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </Slider>
    </>
  )
}
