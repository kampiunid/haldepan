import styles from "./singlePage.module.css";
import Image from "next/image";
import BreadCrumb from '@/components/Others/BreadCrumb';
import WidgetOne from '@/components/SocialMediaWidgets/WidgetOne';
import AdWidgetTwo from '@/components/AdsWidget/AdWidgetTwo';
import NewsLetter from '@/components/Newsletter/NewsLetter';
import SideList from "@/components/MainPage/SideList";
import TrendingSingleCarousel from '@/components/MainPage/TrendingSingleCarousel';

const getData = async (slug) => {
  const baseURL = process.env.NEXTAUTH_URL;
  const res = await fetch(`${baseURL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  return res.json();
};

const getNextPost = async (slug) => {
  const baseURL = process.env.NEXTAUTH_URL;
  const res = await fetch(`${baseURL}/api/posts/${slug}/next`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch next post");
  }

  return res.json();
};

const getPreviousPost = async (slug) => {
  const baseURL = process.env.NEXTAUTH_URL;
  const res = await fetch(`${baseURL}/api/posts/${slug}/previous`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch previous post");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  const nextPost = await getNextPost(slug);
  const previousPost = await getPreviousPost(slug);

  return (
    <>
      <section className='post-layout-1-area pb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <BreadCrumb CategoryName={data?.catSlug} />
            </div>
            <div className='col-lg-8'>
              <div className='post-layout-top-content'>
                <div className='post-categories d-flex justify-content-between align-content-center'>
                  <div className='categories-item'>
                    <span>{data?.catSlug}</span>
                  </div>
                  <div className='categories-share'>
                    <ul>
                      <li>
                        <i className='fas fa-eye'></i> {data?.views}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='post-content'>
                  <h3 className='title'>
                    {data?.title}
                  </h3>
                  <p>
                    The property, complete with 30-seat screening from room, a
                    100-seat amphitheater and a swimming pond with sandy
                    shower…
                  </p>
                  <div className='thumb'>
                    <img src={data?.img} alt='' />
                  </div>
                </div>
                <div className='post-author'>
                  <div className='author-info'>
                    <div className='thumb'>
                      {data?.user?.image && (
                        <div className={styles.userImageContainer}>
                          <Image src={data.user.image} alt="" fill className={styles.avatar} />
                        </div>
                      )}
                    </div>
                    <h5 className='title'>{data?.user.name}</h5>
                    <ul>
                      <li>{data?.createdAt.substring(0, 10)} {" "} </li>
                    </ul>
                  </div>
                  <div className='author-social'>
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
                      <li>
                        <a href='#'>
                          <i className='fal fa-heart'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fal fa-bookmark'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fas fa-ellipsis-v'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='post-text mt-30'>
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.desc }}
                  />
                </div>
                
                <div className='post-tags'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fas fa-tag'></i> Tags
                      </a>
                    </li>
                    <li>
                      <a href='#'>Health</a>
                    </li>
                    <li>
                      <a href='#'>World</a>
                    </li>
                    <li>
                      <a href='#'>Corona</a>
                    </li>
                  </ul>
                </div>
                <div className='post-reader-text pt-50'>
                  <div className='row'>
                    <div className='col-md-6'>
                      {previousPost && (
                        <div className='post-reader-prev'>
                          <span>PREVIOUS NEWS</span>
                          <h4 className='title'>
                            <a href={`/posts/${previousPost.slug}`}>
                              {previousPost.title}
                            </a>
                          </h4>
                        </div>
                      )}
                    </div>
                    <div className='col-md-6'>
                      {nextPost && (
                        <div className='post-reader-prev'>
                          <span>NEXT NEWS</span>
                          <h4 className='title'>
                            <a href={`/posts/${nextPost.slug}`}>
                              {nextPost.title}
                            </a>
                          </h4>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='post_gallery_sidebar mt-40'>
                <SideList take={4} skip={0} cat='' tittle='Sorotan' type='latest' />
                <WidgetOne customClass='mt-30' />
                <TrendingSingleCarousel take={3} skip={0} cat='' tittle='Trending' type='latest' />
                <SideList take={3} skip={0} cat='' tittle=' ' type='latest' />
                <AdWidgetTwo />
                <SideList take={4} skip={0} cat='' tittle='Populer' type='randall' />
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
