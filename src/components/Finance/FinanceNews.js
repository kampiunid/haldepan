import Link from 'next/link'
import React from 'react'

export default function FinanceNews() {
  return (
    <div className='finance-box mt-40'>
      <div className='section-title'>
        <h3 className='title'>Finance</h3>
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
              <Link href='/post-details-two'>
                Japan’s virus success puzzled the world luck running out?
              </Link>
            </h3>
            <p>
              The property, complete with seates screening from room
              amphitheater pond with sandy shower…
            </p>
            <ul>
              <li>
                <Link href='/post-details-two'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-two'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-two'>
                  <i className='fas fa-share'></i> 53,346
                </Link>
              </li>
            </ul>
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
              <Link href='/post-details-two'>
                Japan’s virus success puzzled the world luck running out?
              </Link>
            </h3>
            <p>
              The property, complete with seates screening from room
              amphitheater pond with sandy shower…
            </p>
            <ul>
              <li>
                <Link href='/post-details-two'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-two'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-two'>
                  <i className='fas fa-share'></i> 53,346
                </Link>
              </li>
            </ul>
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
              <Link href='/post-details-two'>
                Japan’s virus success puzzled the world luck running out?
              </Link>
            </h3>
            <p>
              The property, complete with seates screening from room
              amphitheater pond with sandy shower…
            </p>
            <ul>
              <li>
                <Link href='/post-details-two'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-two'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-two'>
                  <i className='fas fa-share'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='finance-item'>
          <div className='finance-thumb'>
            <img src='/images/finance/finance-4.jpg' alt='finance' />
            <div className='finance-date'>
              <span>April 26, 2020</span>
            </div>
          </div>
          <div className='finance-content'>
            <h3 className='title'>
              <Link href='/post-details-two'>
                Japan’s virus success puzzled the world luck running out?
              </Link>
            </h3>
            <p>
              The property, complete with seates screening from room
              amphitheater pond with sandy shower…
            </p>
            <ul>
              <li>
                <Link href='/post-details-two'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-two'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-two'>
                  <i className='fas fa-share'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='finance-btn text-center mt-25'>
        <a className='main-btn main-btn-2' href='#'>
          See more
        </a>
      </div>
    </div>
  )
}
