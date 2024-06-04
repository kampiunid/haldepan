// Import hook useClient from next/react
import NewsGallary from '@/components/MainPage/NewsGallary'

import TwoPostCarousel from '@/components/MainPage/TwoPostCarousel'
import VideoNews from '@/components/MainPage/VideoNews'
import NewsLetter from '@/components/Newsletter/NewsLetter'
import AdOne from '@/components/AdsWidget/AdOne'

import WidgetOne from '@/components/SocialMediaWidgets/WidgetOne'
import SideList from "@/components/MainPage/SideList";
import NewsList from "@/components/MainPage/NewsList";

export default function Home({ searchParams }) {
  const newsListProps = {take: 5, skip: 0, cat: '', tittle: 'Berita Terbaru', type: 'latest'};
  
  return (
    <>
      <div className='post__gallery__area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <NewsGallary take={5} skip={0} cat='' tittle='Sorotan' type='latest' />
            </div>
            <div className='col-lg-4'>
              <div className='post_gallery_sidebar'>
                <SideList take={4} skip={0} cat='' tittle='Sorotan' type='latest' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='all-post-area pt-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className="d-none d-lg-block">
                <NewsList {...newsListProps} />
              </div>
              <div className="d-lg-none">
                <SideList {...newsListProps} />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='trending-right-sidebar'>
                <WidgetOne />
                <SideList take={5} skip={0} cat='' tittle='' type='randall' />
                <AdOne />
              </div>
            </div>
          </div>
        </div>
      </section>
      <TwoPostCarousel take={5} skip={0} cat='' type='latest'/>
      <section className='video-news-area'>
        <div className='container custom-container'>
          <div className='video-news-box'>
            <div className='row'>
              <div className='col-lg-8'>
                <VideoNews take={1} skip={0} cat='' type='latest'/>
              </div>
              <div className='col-lg-4'>
                <SideList take={3} skip={1} cat='' tittle='video Populer' type='topall' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='all-post-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className="d-none d-lg-block">
                <NewsList {...newsListProps} />
              </div>
              <div className="d-lg-none">
                <SideList {...newsListProps} />
              </div>
              <div className='post-add mt-30 mb-30'>
                <a href='#'>
                  <img src='/images/ads/banner.png' alt='ad' />
                </a>
              </div>
              <div className="d-none d-lg-block">
                <NewsList {...newsListProps} />
              </div>
              <div className="d-lg-none">
                <SideList {...newsListProps} />
              </div>
            </div>
            <div className='col-lg-4'>
              <SideList take={5} skip={0} cat='' tittle='' type='latest' />
              <AdOne />
              <SideList take={5} skip={0} cat='' tittle='' type='randall' />
              <NewsLetter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

