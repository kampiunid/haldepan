import Link from 'next/link'
import React from 'react'

export default function LogoWithSearch() {
  return (
    <div className='header-centerbar'>
      <div className='container custom-container'>
        <div className='row align-items-center'>
          <div className='col-lg-5 col-md-5'>
            <div className='logo'>
              <Link href='/'>
                <img src='/images/logo/logo-black.png' alt='Logo' />
              </Link>
            </div>
          </div>
          <div className='col-lg-5 col-md-7'>
            <div className='header-search'>
              <form action='#'>
                <div className='input-box'>
                  <input type='text' placeholder='What you want to search?' />
                  <button type='button'>Search</button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-2'>
            <div className='header-temperature justify-content-end d-none d-lg-flex align-items-center'>
              <div className='icon'>
                <img src='/images/temperature-icon.svg' alt='' />
              </div>
              <div className='temperature-content text-center'>
                <h5 className='title'>
                  13{' '}
                  <sup>
                    0<sub>C</sub>
                  </sup>
                </h5>
                <p>San Francisco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
