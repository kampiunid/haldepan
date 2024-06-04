import React from 'react'
import FinanceNewsCard from '../News/FinanceNewsCard'
import SmallNewsCard from '../News/SmallNewsCard'
import TrendingNewsCard from '../News/TrendingNewsCard'
import LargePostSlider from './LargePostSlider'
import TrendingNewsCardSlider from './TrendingNewsCardSlider'

export default function TrendingAreaTwo({ customClass }) {
  return (
    <section className={`trending-3-area ${customClass}`}>
      <div className='container custom-container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='trending-news-3 mt-50'>
              <div className='section-title section-title-3'>
                <h3 className='title'>Trending News</h3>
              </div>
              <TrendingNewsCard />
            </div>
            <TrendingNewsCardSlider />
          </div>
          <div className='col-lg-4'>
            <FinanceNewsCard />
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-md-6'>
            <LargePostSlider />
          </div>
          <div className='col-lg-3 col-md-6'>
            <SmallNewsCard />
          </div>
          <div className='col-lg-4'>
            <div className='ad mt-30'>
              <a href='#'>
                <img src='/images/ad/ad-3.png' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
