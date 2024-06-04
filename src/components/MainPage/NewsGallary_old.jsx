'use client';

import React from "react";
import GallaryCard from "../card/GallaryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getData = async (take, skip, cat, type) => {
  //const baseURL = process.env.NEXTAUTH_URL;
  const baseURL = 'http://localhost:3000';

  const res = await fetch(
    `${baseURL}/api/posts?take=${take}&skip=${skip}&cat=${cat || ""}&type=${type || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const NewsGallary = async ({ take, skip, cat, dark, type, tittle }) => {
  let title = tittle || ""; // Use provided title, or set it to an empty string if not provided
  switch (type) {
    case 'latest':
      title = title || "Berita Terbaru";
      break;
    case 'topall':
      title = title || "Berita Populer";
      break;
    case 'topweek':
      title = title || "Populer Minggu Ini";
      break;
    case 'randall':
      title = title || "Rekomendasi";
      break;
    case 'randweek':
      title = title || "Berita Pilihan";
      break;
    default:
      break;
  }

  const { posts, count } = await getData(take, skip, cat, type);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          top: "45%", // Adjusted to move slightly higher
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
          top: "45%", // Adjusted to move slightly higher
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
    <>
      <div className="post_gallery_items">
        <Slider {...settings}>
          {posts?.map((item) => (
            <div
              className={`gallery_item gallery_item-style-2 ${
                dark ? "gallery_item_dark" : ""
              }`}
              key={item.id}
            >
              <GallaryCard item={item} dark={dark} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewsGallary;
