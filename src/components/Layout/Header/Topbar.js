'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <span className='prev slick-arrow' onClick={onClick}>
      <i className='fal fa-angle-left'></i>
    </span>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <span className='next slick-arrow' onClick={onClick}>
      <i className='fal fa-angle-right'></i>
    </span>
  );
}

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

export default function Topbar({take, skip, cat, type}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const today = formatDate(new Date());
  
  return (
    <div className='header-topbar'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8'>
            <div className='topbar-trending'>
              <span>Trending</span>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <Slider {...settings} className='trending-slider'>
                  {posts.map((post) => (
                    <div className='trending-item' key={post.id}>
                      <p><Link href={`/posts/${post.slug}`}>{post.title}</Link></p>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='topbar-social d-flex align-items-center'>
              <p>{today}</p>
              <div className='social'>
                <ul>
                  <li>
                    <a href='#'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fab fa-youtube'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
