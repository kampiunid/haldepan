import Link from 'next/link'
import React from 'react'

export default function LogoBanner() {
  return (
    <div className='header-centerbar'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <div className='logo'>
              <Link href='/'>
                <img src='/images/logo/logo-black.png' alt='' />
              </Link>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='header-centerbar-ad'>
              <Link href='/'>
                <img src='/images/banner.png' alt='' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
