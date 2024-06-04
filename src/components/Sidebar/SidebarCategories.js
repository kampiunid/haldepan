import Link from 'next/link'
import React from 'react'

export default function SidebarCategories({ dark }) {
  return (
    <div className='Categories-post mt-40'>
      <div
        className={`section-title d-flex justify-content-between align-items-center ${
          dark ? 'section-title-2' : ''
        }`}
      >
        <h3 className='title'>Categories</h3>
        <Link href='/post-details-three'>SEE ALL </Link>
      </div>
      <div className='Categories-item'>
        <div className='item'>
          <img src='/images/categories-1.jpg' alt='categories' />
          <div className='Categories-content'>
            <Link href='/post-details-three'>
              <span>Restaurant</span>
              <img src='/images/arrow.svg' alt='' />
            </Link>
          </div>
        </div>
        <div className='item'>
          <img src='/images/categories-2.jpg' alt='categories' />
          <div className='Categories-content'>
            <Link href='/post-details-three'>
              <span>Entertainment</span>
              <img src='/images/arrow.svg' alt='' />
            </Link>
          </div>
        </div>
        <div className='item'>
          <img src='/images/categories-3.jpg' alt='categories' />
          <div className='Categories-content'>
            <Link href='/post-details-three'>
              <span>Financial</span>
              <img src='/images/arrow.svg' alt='' />
            </Link>
          </div>
        </div>
        <div className='item'>
          <img src='/images/categories-4.jpg' alt='categories' />
          <div className='Categories-content'>
            <Link href='/post-details-three'>
              <span>Business</span>
              <img src='/images/arrow.svg' alt='' />
            </Link>
          </div>
        </div>
        <div className='item'>
          <img src='/images/categories-5.jpg' alt='categories' />
          <div className='Categories-content'>
            <Link href='/post-details-three'>
              <span>Scientists</span>
              <img src='/images/arrow.svg' alt='' />
            </Link>
          </div>
        </div>
        <div className='item'>
          <img src='/images/categories-6.jpg' alt='categories' />
          <div className='Categories-content'>
            <Link href='/post-details-three'>
              <span>International’s</span>
              <img src='/images/arrow.svg' alt='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
