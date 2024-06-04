import Link from 'next/link'
import React from 'react'

export default function MostViewVerticalCard() {
  return (
    <div className='finance-box mt-40'>
      <div className='section-title'>
        <h3 className='title'>Most View</h3>
      </div>
      <div className='finance-items'>
        <div className='finance-item'>
          <div className='finance-thumb'>
            <img src='/images/finance/finance-1.jpg' alt='finance' />
            <div className='finance-date'>
              <span>April 26, 2020</span>
            </div>
          </div>
          <div className='finance-content'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Japan’s virus success puzzled the world luck running out?
              </Link>
            </h3>
            <p>
              The property, complete with seates screening from room
              amphitheater pond with sandy shower…
            </p>
            <div className='finance-post-meta'>
              <div className='meta-user'>
                <span>
                  <i className='fal fa-user-circle'></i> Tanvir Ahmed
                </span>
              </div>
              <div className='meta-date'>
                <span>April 26, 2020</span>
              </div>
            </div>
          </div>
        </div>
        <div className='finance-item'>
          <div className='finance-thumb'>
            <img src='/images/finance/finance-2.jpg' alt='finance' />
            <div className='finance-date'>
              <span>April 26, 2020</span>
            </div>
          </div>
          <div className='finance-content'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Japan’s virus success puzzled the world luck running out?
              </Link>
            </h3>
            <p>
              The property, complete with seates screening from room
              amphitheater pond with sandy shower…
            </p>
            <div className='finance-post-meta'>
              <div className='meta-user'>
                <span>
                  <i className='fal fa-user-circle'></i> Tanvir Ahmed
                </span>
              </div>
              <div className='meta-date'>
                <span>April 26, 2020</span>
              </div>
            </div>
          </div>
        </div>
        <div className='finance-item'>
          <div className='finance-thumb'>
            <img src='/images/finance/finance-3.jpg' alt='finance' />
            <div className='finance-date'>
              <span>April 26, 2020</span>
            </div>
          </div>
          <div className='finance-content'>
            <h3 className='title'>
              <Link href='/post-details-one'>
                Japan’s virus success puzzled the world luck running out?
              </Link>
            </h3>
            <p>
              The property, complete with seates screening from room
              amphitheater pond with sandy shower…
            </p>
            <div className='finance-post-meta'>
              <div className='meta-user'>
                <span>
                  <i className='fal fa-user-circle'></i> Tanvir Ahmed
                </span>
              </div>
              <div className='meta-date'>
                <span>April 26, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='finance-btn text-center mt-10'>
        <a className='main-btn main-btn-2' href='#'>
          See more
        </a>
      </div>
    </div>
  )
}
