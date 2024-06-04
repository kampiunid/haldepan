'use client';

import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'
import ModalVideo from 'react-modal-video'

const getData = async (take, skip, cat, type) => {
  const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

  const res = await fetch(
    `${baseURL}/api/posts?take=${take}&skip=${skip}&cat=${cat || ''}&type=${type || ''}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};

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

export default function TwoPostCarousel({ take, skip, cat, type, dark, customClass }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false)

  const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts } = await getData(take, skip, cat, type); // Fetch top 3 posts
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // const [isOpen, setOpen] = useState(false)
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
            {posts.map((item, i) => (
              <div className='col' key={i + 1}>
                <div className='single-play-post-item'>
                  {dark ? (
                    <img 
                      src={item.img || `${baseURL}/images/gallery-5.jpg`}
                      alt={item.title}
                      style={{
                        position: 'relative',
                        width: '600px',
                        height: '400px',
                        objectFit: 'cover', // Gunakan object-fit: cover; untuk menjaga rasio aspek
                      }}
                    />
                  ) : (
                    <img 
                      src={item.img || `${baseURL}/images/gallery-5.jpg`}
                      alt={item.title}
                      style={{
                        position: 'relative',
                        width: '600px',
                        height: '400px',
                        objectFit: 'cover', // Gunakan object-fit: cover; untuk menjaga rasio aspek
                      }}
                    />
                  )}

                  <div className='single-play-post-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>{item.catslug}</a>
                      </div>
                      <div className='meta-date'>
                        <span>{item.createdAt.substring(0, 10)}</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <Link href='/post-details-two'>{item.title}</Link>
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
