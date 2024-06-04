"use client"

import React from 'react'
import TrendingCarousel from '../News/TrendingCarousel'
import WidgetOne from '../SocialMediaWidgets/WidgetOne'

import SideList from "@/components/MainPage/SideList";
import NewsList from "@/components/MainPage/NewsList";

export default function TrendingNewsArea({ customClass, dark }) {
  const newsListProps = {take: 10, skip: 2, cat: '', tittle: ' ', type: 'latest'};

  return (
    <section className={`trending-news-area ${customClass}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
              <h3 className='title'>Trending News</h3>
            </div>
            <TrendingCarousel />
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
              <SideList take={5} skip={0} cat='' tittle='Berita Populer' type='latest' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
