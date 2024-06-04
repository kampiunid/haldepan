import Link from 'next/link'
import React from 'react'
import NavigationBar from './NavigationBar'
import TopbarFour from './TopbarFour'

export default function HeaderTwo({ customClass, className, action }) {
  return (
    <header className='header-area header-style-2 header-style-3'>
      <div className='container custom-container'>
        <div className='row no-gutters'>
          <div className='col-lg-3'>
            <div className='header-logo'>
              <Link href='/'>
                <img src='/images/logo-3.png' alt='' />
              </Link>
            </div>
          </div>
          <div className='col-lg-9'>
            <TopbarFour />
            <div className='header-centerbar d-none d-md-block'>
              <div className='container custom-container'>
                <div className='row align-items-center justify-content-end'>
                  <div className='col-lg-11'>
                    <div className='header-center-items d-flex justify-content-end align-items-center'>
                      <div className='header-date text-right'>
                        <h5 className='title'>Thursday</h5>
                        <span>March 26, 2020</span>
                      </div>
                      <div className='header-temperature'>
                        <div className='icon'>
                          <img src='/images/temperature-icon-2.png' alt='' />
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
                      <div className='social'>
                        <ul>
                          <li>
                            <a href='#'>
                              <i className='fab fa-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fab fa-facebook-f'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fab fa-youtube'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fab fa-instagram'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='header-menubar'>
        <div className='container custom-container'>
          <div className='menubar-bg'>
            <div className='row align-items-center position-relative'>
              <div
                onClick={(e) => action(e)}
                className='toggle-btn dark ml-15 pl-3 canvas_open d-lg-none d-block'
              >
                <i className='fa fa-bars' />
              </div>
              <div className='col-lg-9 col-sm-3 col-3'>
                <div className='newsprk-header-main-menu'>
                  <NavigationBar customClass='newspark-dark-menu-items pl-3' />
                </div>
              </div>
              <div className='col-lg-3 col-sm-9 col-9'>
                <div className='header-menu-rightbar'>
                  <div className='header-search'>
                    <form action='#'>
                      <div className='input-box'>
                        <button type='button'>
                          <i className='far fa-search'></i>
                        </button>
                      </div>
                    </form>
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
