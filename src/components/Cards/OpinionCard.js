import Link from 'next/link'
import React from 'react'

export default function OpinionCard() {
  return (
    <div className='opinion-post mt-40'>
      <div className='section-title'>
        <h3 className='title'>Opinion</h3>
      </div>
      <div className='opinion-post-item'>
        <div className='opinion-post-thumb'>
          <img src='/images/opinion-post-thumb.jpg' alt='' />
          <div className='circle-bar'>
            <div className='first circle'>
              <strong></strong>
            </div>
          </div>
        </div>
        <div className='opinion-post-content'>
          <h3 className='title'>
            <Link href='/post-details-two'>
              Miami woman deliver her powerful winds kept help from nuture…
            </Link>
          </h3>
          <p>
            The property, complete with 30-seat screening from room, a 100-seat
            amphitheater and a swimming pond Your email address will not be this
            published. Required…
          </p>
          <div className='meta-post-2-style'>
            <div className='meta-post-categores'>
              <Link href='/post-details-two'>TECHNOLOGY</Link>
            </div>
            <div className='meta-post-date'>
              <span>April 26, 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
