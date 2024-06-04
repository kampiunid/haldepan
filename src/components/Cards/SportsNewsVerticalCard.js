import Link from 'next/link'
import React from 'react'

export default function SportsNewsVerticalCard() {
  return (
    <div className='post-sports-box mt-40'>
      <div className='section-title'>
        <h3 className='title'>Sports</h3>
      </div>
      <div className='post-sports-item'>
        <div className='post-sports-thumb'>
          <img src='/images/post-sports-1.jpg' alt='' />
        </div>
        <div className='post-sports-content'>
          <h3 className='title'>
            <Link href='/post-details-three'>
              Japan’s virus success puzzled the world luck running out?
            </Link>
          </h3>
          <p>
            The property, complete with seates screening from room amphitheater
            pond with sandy shower…
          </p>
          <ul>
            <li>
              <Link href='/post-details-three'>
                <i className='far fa-eye'></i> 53,346
              </Link>
            </li>
            <li>
              <Link href='/post-details-three'>
                <i className='far fa-heart'></i> 53,346
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='post_gallery_items'>
        <div className='post-gallery-style-2'>
          <div className='post-gallery-thumb'>
            <img src='/images/gallery-post/1.png' alt='gallery' />
          </div>
          <div className='post-gallery-content'>
            <h5 className='title'>
              <Link href='/post-details-three'>
                The city with highest quality of life in world.
              </Link>
            </h5>
            <ul>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='post-gallery-style-2'>
          <div className='post-gallery-thumb'>
            <img src='/images/gallery-post/2.png' alt='gallery' />
          </div>
          <div className='post-gallery-content'>
            <h5 className='title'>
              <Link href='/post-details-three'>
                The city with highest quality of life in world.
              </Link>
            </h5>
            <ul>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='post-gallery-style-2'>
          <div className='post-gallery-thumb'>
            <img src='/images/gallery-post/3.png' alt='gallery' />
          </div>
          <div className='post-gallery-content'>
            <h5 className='title'>
              <Link href='/post-details-three'>
                The city with highest quality of life in world.
              </Link>
            </h5>
            <ul>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='post-gallery-style-2'>
          <div className='post-gallery-thumb'>
            <img src='/images/gallery-post/4.png' alt='gallery' />
          </div>
          <div className='post-gallery-content'>
            <h5 className='title'>
              <Link href='/post-details-three'>
                The city with highest quality of life in world.
              </Link>
            </h5>
            <ul>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='post-gallery-style-2'>
          <div className='post-gallery-thumb'>
            <img src='/images/gallery-post/5.png' alt='gallery' />
          </div>
          <div className='post-gallery-content'>
            <h5 className='title'>
              <Link href='/post-details-three'>
                The city with highest quality of life in world.
              </Link>
            </h5>
            <ul>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-eye'></i> 53,346
                </Link>
              </li>
              <li>
                <Link href='/post-details-three'>
                  <i className='far fa-heart'></i> 53,346
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='post-btn pt-20'>
        <a className='main-btn main-btn-2' href='#'>
          See More
        </a>
      </div>
    </div>
  )
}
