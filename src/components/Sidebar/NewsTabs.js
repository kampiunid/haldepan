"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import classnames from 'classnames'

const postData = [
  {
    postThumb: '/images/gallery-1.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Copa America: Luis Suarez from devastated US',
  },
  {
    postThumb: '/images/gallery-2.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Nancy Zhang a Chinese busy woman and Dhaka',
  },
  {
    postThumb: '/images/gallery-3.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'U.S. Response subash says he will label regions by risk of…',
  },
  {
    postThumb: '/images/gallery-4.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Venezuela elan govt and opposit the property collect',
  },
  {
    postThumb: '/images/gallery-5.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'Cheap smartphone sensor could help you old food safe',
  },
]
export default function NewsTabs({ dark }) {
  const [activeTab, setActiveTab] = useState('trendy')

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  return (
    <>
      <ul className='nav nav-pills' id='pills-tab' role='tablist'>
        <li className='nav-item'>
          <a
            className={classnames('nav-link', {
              active: activeTab === 'trendy',
            })}
            id='pills-trendy-tab'
            data-toggle='pill'
            href='#pills-trendy'
            role='tab'
            aria-controls='pills-trendy'
            aria-selected={activeTab === 'trendy'}
            onClick={(e) => {
              e.preventDefault()
              toggleTab('trendy')
            }}
          >
            TRENDY
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={classnames('nav-link', {
              active: activeTab === 'latest',
            })}
            id='pills-latest-tab'
            data-toggle='pill'
            href='#pills-latest'
            role='tab'
            aria-controls='pills-latest'
            aria-selected={activeTab === 'latest'}
            onClick={(e) => {
              e.preventDefault()
              toggleTab('latest')
            }}
          >
            LATEST
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={classnames('nav-link', {
              active: activeTab === 'contact',
            })}
            id='pills-contact-tab'
            data-toggle='pill'
            href='#pills-contact'
            role='tab'
            aria-controls='pills-contact'
            aria-selected={activeTab === 'contact'}
            onClick={(e) => {
              e.preventDefault()
              toggleTab('contact')
            }}
          >
            POPULAR
          </a>
        </li>
      </ul>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className={classnames('tab-pane', 'fade', 'show', {
            active: activeTab === 'trendy',
          })}
          id='pills-trendy'
          role='tabpanel'
          aria-labelledby='pills-trendy-tab'
        >
          <div className='post_gallery_items'>
            {postData.map((item, i) => (
              <div
                key={i + 1}
                className={`gallery_item ${dark ? 'gallery_item_dark' : ''}`}
              >
                <div className='gallery_item_thumb'>
                  <img src={item.postThumb} alt='gallery' />
                </div>
                <div className='gallery_item_content'>
                  <div className='post-meta'>
                    <div className='meta-categories'>
                      <a href='#'>{item.postTag}</a>
                    </div>
                    <div className='meta-date'>
                      <span>{item.postDate}</span>
                    </div>
                  </div>
                  <h4 className='title'>
                    <Link href='/post-details-two'>{item.postTitle}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={classnames('tab-pane', 'fade', 'show', {
            active: activeTab === 'latest',
          })}
          id='pills-latest'
          role='tabpanel'
          aria-labelledby='pills-latest-tab'
        >
          <div className='post_gallery_items'>
            {postData.map((item, i) => (
              <div
                key={i + 1}
                className={`gallery_item ${dark ? 'gallery_item_dark' : ''}`}
              >
                <div className='gallery_item_thumb'>
                  <img src={item.postThumb} alt='gallery' />
                </div>
                <div className='gallery_item_content'>
                  <div className='post-meta'>
                    <div className='meta-categories'>
                      <a href='#'>{item.postTag}</a>
                    </div>
                    <div className='meta-date'>
                      <span>{item.postDate}</span>
                    </div>
                  </div>
                  <h4 className='title'>
                    <Link href='/post-details-two'>{item.postTitle}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={classnames('tab-pane', 'fade', 'show', {
            active: activeTab === 'contact',
          })}
          id='pills-contact'
          role='tabpanel'
          aria-labelledby='pills-contact-tab'
        >
          <div className='post_gallery_items'>
            {postData.map((item, i) => (
              <div
                key={i + 1}
                className={`gallery_item ${dark ? 'gallery_item_dark' : ''}`}
              >
                <div className='gallery_item_thumb'>
                  <img src={item.postThumb} alt='gallery' />
                </div>
                <div className='gallery_item_content'>
                  <div className='post-meta'>
                    <div className='meta-categories'>
                      <a href='#'>{item.postTag}</a>
                    </div>
                    <div className='meta-date'>
                      <span>{item.postDate}</span>
                    </div>
                  </div>
                  <h4 className='title'>
                    <Link href='/post-details-two'>{item.postTitle}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
