'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

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

function generateExcerpt(text, length) {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export default function TrendingSingleCarousel({ take, skip, cat, type, tittle, dark, customClass }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts } = await getData(take, skip, cat, type);
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [take, skip, cat, type]);

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
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='trending-sidebar mt-40'>
      <div className='section-title'>
        <h3 className='title'>{tittle}</h3>
      </div>
      <Slider className='trending-sidebar-slider' {...settings}>
        {posts.map((item, i) => {
          const excerpt = generateExcerpt(item.desc, 100);
          const cleanedExcerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, "");
          return (
            <div className='trending-news-item' key={i}>
              <div className='trending-news-thumb'>
                <img 
                  src={item.img || '/images/trending-news-1.jpg'}
                  alt={item.title}
                  style={{
                    width: '400px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <div className='icon'>
                  <a href='#'>
                    <i className='fas fa-bolt'></i>
                  </a>
                </div>
              </div>
              <div className='trending-news-content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <a href='#'>{item.catSlug}</a>
                  </div>
                  <div className='meta-date'>
                    <span>{item.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <h3 className='title'>
                  <a href='#'>{item.title}</a>
                </h3>
                <div className='text' style={{ marginBottom: '10px', color: dark ? '#fff' : '#000' }} dangerouslySetInnerHTML={{ __html: cleanedExcerpt }}></div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
