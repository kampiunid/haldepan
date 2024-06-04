import Link from 'next/link'
import React from 'react'

export default function TrendingThreeCol() {
  return (
    <section className='trending-area pt-85'>
      <div className='container custom-container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='trending-image-post mt-30'>
              <img src='/images/trending-image-post-1.jpg' alt='' />
              <div className='trending-image-content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href='/post-details-two'>TECHNOLOGY</Link>
                  </div>
                  <div className='meta-date'>
                    <span>March 26, 2020</span>
                  </div>
                </div>
                <h3 className='title'>
                  <Link href='/post-details-two'>
                    Japan’s virus success has puzzled the world. Is its luck
                    running out?
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='trending-image-post mt-30'>
              <img src='/images/trending-image-post-2.jpg' alt='' />
              <div className='trending-image-content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href='/post-details-two'>TECHNOLOGY</Link>
                  </div>
                  <div className='meta-date'>
                    <span>March 26, 2020</span>
                  </div>
                </div>
                <h3 className='title'>
                  <Link href='/post-details-two'>
                    Japan’s virus success has puzzled the world. Is its luck
                    running out?
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='trending-image-post mt-30'>
              <img src='/images/trending-image-post-1.jpg' alt='' />
              <div className='trending-image-content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href='/post-details-two'>TECHNOLOGY</Link>
                  </div>
                  <div className='meta-date'>
                    <span>March 26, 2020</span>
                  </div>
                </div>
                <h3 className='title'>
                  <Link href='/post-details-two'>
                    Japan’s virus success has puzzled the world. Is its luck
                    running out?
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
