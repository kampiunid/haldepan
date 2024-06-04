import React from 'react'
import LogoBannerDark from './LogoBannerDark'
import NavigationBar from './NavigationBar'
import Topbar from './Topbar'

export default function HeaderThree({ action }) {
  return (
    <header className='header-area header-dark'>
      <Topbar />
      <LogoBannerDark />
      <div className='header-menubar'>
        <div className='container'>
          <div className='row align-items-center position-relative'>
            <div
              onClick={(e) => action(e)}
              className='toggle-btn dark ml-15 canvas_open d-lg-none d-block'
            >
              <i className='fa fa-bars' />
            </div>
            <div className='col-lg-8 col-sm-3 col-3'>
              <div className='header-menu'>
                <NavigationBar customClass='newspark-dark-menu-items' />
              </div>
            </div>
            <div className='col-lg-4 col-sm-9 col-9'>
              <div className='header-menu-rightbar'>
                <div className='header-menu-search'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fal fa-search'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fal fa-user-circle'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='nice-select-item'>
                  <select>
                    <option data-display='English'>English</option>
                    <option value='1'>Bangla</option>
                    <option value='2'>Hindi</option>
                    <option value='3'>option</option>
                    <option value='4'>Potato</option>
                  </select>
                </div>
                <div className='header-temperature'>
                  <div className='icon'>
                    <img src='/images/temperature-icon-3.svg' alt='' />
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
      </div>
    </header>
  )
}
