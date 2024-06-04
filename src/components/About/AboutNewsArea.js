import React from 'react'
import NewsLetter from '../Newsletter/NewsLetter'
import TrendingNewsWidget from '../NewsWidgets/TrendNewsWidget'
import TrendWidget from '../NewsWidgets/TrendNewsWidget'
import NewsTabs from '../Sidebar/NewsTabs'
import LatestAndPopularNews from '../Tabs/LatestAndPopularNews'
import TrendingSingleCarousel from '../TrendingNews/TrendingSingleCarousel'

export default function AboutNewsArea() {
  return (
    <section className='about-item-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <LatestAndPopularNews />
          </div>
          <div className='col-lg-4'>
            <div className='post_gallery_sidebar mt-40'>
              <NewsTabs />
              <NewsLetter />
            </div>
            <TrendingSingleCarousel />
            <TrendingNewsWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
