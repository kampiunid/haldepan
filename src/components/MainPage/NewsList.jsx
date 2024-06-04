import React from "react";
import NewsCard from "../card/NewsCard";

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

const NewsList = async ({ take, skip, cat, dark, type, tittle }) => {
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
      <div className='business-news-post'>
        <div className='section-title d-flex justify-content-between align-items-center'>
          <h3 className='title'>{title}</h3>
          
        </div>
        <div className='business-post'>
          {posts?.map((item) => (
            <div
              className={`business-post-item mb-10  ${
                dark ? 'business-post-item-dark' : ''
              }`}
              key={item.id}
            >
              <NewsCard item={item}  />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsList;
