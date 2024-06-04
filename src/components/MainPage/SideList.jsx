import React from "react";
import Card from "../card/Card";

const getData = async (take, skip, cat, type) => {
  const baseURL = process.env.NEXTAUTH_URL;

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

const SideList = async ({ take, skip, cat, dark, type, tittle }) => {
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

  return (
    <>
      <div className='trending-most-view mt-25'>
        <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
          <h3 className='title text capitalization'>{title}</h3>
        </div>
      </div>
      
      <div className='post_gallery_items'>
        {posts?.map((item) => (
          <div
            className={`gallery_item gallery_item-style-2 ${
              dark ? 'gallery_item_dark' : ''
            }`}
    
            key={item.id}
          >
            <Card item={item}  />
          </div>
        ))}
      </div>
    </>
  );
};

export default SideList;
