'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import ModalVideo from 'react-modal-video';
import Link from 'next/link';

const getData = async (take, skip, cat, type) => {
  const baseURL = 'http://localhost:3000';

  const res = await fetch(
    `${baseURL}/api/posts?take=${take}&skip=${skip}&cat=${cat || ''}&type=${type || ''}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed');
  }

  const data = await res.json();

  const galleryData = data.posts.map((post) => ({
    postCategory: post.catSlug.toUpperCase(),
    postTitle: post.title,
    postDate: new Date(post.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    postDesc: post.catSlug,
  }));

  return galleryData;
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

export default function NewsGallary({ take, skip, cat, dark, type, tittle }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const data = await getData(take, skip, cat, type);
        setGalleryData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
  };

  const settingsInner = {
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        className='post_gallery_slider'
      >
        {galleryData.map((item, i) => (
          <div
            className={`post_gallery_play d-flex ${
              dark ? 'post_gallery_play_dark' : ''
            }`}
            key={i}
          >
            <div className='bg-image'></div>
            <div className='post__gallery_play_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='#'>{item.postCategory}</Link>
                </div>
                <div className='meta-date'>
                  <span>{item.postDate}</span>
                </div>
              </div>
              <h2 className='title'>
                <Link href='/post-details-three'>{item.postTitle}</Link>
              </h2>
              <p>{item.postDesc}</p>
            </div>
            <div className='post_play_btn' onClick={() => setOpen(true)}>
              <Link
                className='#'
                onClick={(e) => e.preventDefault()}
                href='#nolink'
              >
                <i className='fas fa-play'></i>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      <Slider
        {...settingsInner}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        className='post_gallery_inner_slider'
      >
        <div className='item'>
          <img src='/images/gallery-post/item-1.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-2.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-3.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-4.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-5.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-6.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-7.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-2.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-3.jpg' alt='' />
        </div>
        <div className='item'>
          <img src='/images/gallery-post/item-4.jpg' alt='' />
        </div>
      </Slider>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='eEzD-Y97ges'
        onClose={() => setOpen(false)}
      />
    </>
  );
}
