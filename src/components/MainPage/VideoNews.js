"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react';
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

export default function VideoNews({ take, skip, cat, type, tittle, dark }) {
  const [isOpen, setOpen] = useState(false);
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

  return (
    <div className='video-news-post'>
      <div className='section-title section-title-2'>
        <h3 className='title'>{tittle}</h3>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='eEzD-Y97ges'
        onClose={() => setOpen(false)}
      />
      <div
        className={`video-news-post-item ${
          dark ? 'video-news-post-item-dark' : ''
        }`}
      >
        {posts.map((item, i) => (
          <div key={i} className='video-news-post'>
            <div className='video-news-post-thumb'>
              <img src={item.img || '/images/video-post-thumb.jpg'} alt={item.title || ''} />
              <div className='play-btn' onClick={() => setOpen(true)}>
                <a
                  onClick={(e) => e.preventDefault()}
                  className='video-popup'
                  href='#'
                >
                  <i className='fab fa-youtube'></i>
                </a>
              </div>
            </div>
            <div className='video-news-post-content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-two'>{item.catSlug}</Link>
                </div>
                <div className='meta-date'>
                  <span>{item.createdAt.substring(0, 10)}</span>
                </div>
              </div>
              <h3 className='title'>
                <Link href='/post-details-two'>
                  {item.title}
                </Link>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
