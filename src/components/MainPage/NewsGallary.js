"use client";

import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "45%",
        right: "20px",
        transform: "translateY(-50%)",
        zIndex: 2,
        cursor: "pointer",
        color: "white",
      }}
      onClick={onClick}
    >
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "45%",
        left: "20px",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        color: "white",
      }}
      onClick={onClick}
    >
    </div>
  );
}

export default function TwoPostCarousel({ take, skip, cat, type, dark, customClass }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);

  const baseURL = process.env.NEXT_PUBLIC_NEXTAUTH_URL;
  
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

  const generateExcerpt = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.slice(0, length) + '...';
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="post_gallery_items">
      <Slider {...settings}>
        {posts?.map((item) => {
          const excerpt = generateExcerpt(item.desc, 200);
          const cleanedExcerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, "");

          return (
            <div
              className={`gallery_item gallery_item-style-2 ${
                dark ? "gallery_item_dark" : ""
              }`}
              key={item.id}
            >
              <div className={`post_gallery_play ${dark ? 'post_gallery_play_dark' : ''}`} style={{ position: 'relative', width: '100%', height: '450px', overflow: 'hidden' }}>
                <img 
                  src={item.img || `${baseURL}/images/gallery-5.jpg`}
                  alt={item.title}
                  style={{
                    position: 'relative',
                    width: '1600px',
                    height: '100%',
                    objectFit: 'cover', // Maintain aspect ratio
                  }}
                />
                <div className='post__gallery_play_content' style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0, 
                  background: 'rgba(0, 0, 0, 0.5)', 
                  color: '#fff', 
                  padding: '20px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end' 
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <div className='post-meta' style={{ marginBottom: '5px' }}>
                      <div className='meta-categories'>
                        <Link href={`/posts/${item.catSlug}`} style={{ color: '#fff', textDecoration: 'none' }}>{item.catSlug}</Link>
                      </div>
                      <div className='meta-date'>
                        <span>{item.createdAt.substring(0, 10)}</span>
                      </div>
                    </div>
                    <h2 className='title' style={{ margin: '5px 0' }}>
                      <Link href={`/posts/${item.slug}`} style={{ textDecoration: 'none', color: '#fff' }}>{item.title}</Link>
                    </h2>
                    <p style={{ marginBottom: '10px', color: '#fff' }} dangerouslySetInnerHTML={{ __html: cleanedExcerpt }}></p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
