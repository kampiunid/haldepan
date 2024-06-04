import React from 'react'
import LogoWithSearch from './LogoWithSearch'
import NavigationBar from './NavigationBar'
import TopbarThree from './TopbarThree'

export default function HeaderFour({ action }) {
  return (
    <header className='header-area header-style-2 header-style-4'>
      <TopbarThree />
      <LogoWithSearch />
      <div className='header-menubar'>
        <div className='container custom-container'>
          <div className='menubar-bg'>
            <div className='row align-items-center position-relative'>
              <div
                onClick={(e) => action(e)}
                className='toggle-btn dark ml-15 pl-15 canvas_open d-lg-none d-block'
              >
                <i className='fa fa-bars' />
              </div>
              <div className='col-lg-9 col-sm-3 col-3'>
                <div className='header-menu newsprk-header-main-menu newsprk-header-main-menu-dark header-menu-style-2'>
                  <NavigationBar customClass='newspark-dark-menu-items pl-3' />
                </div>
              </div>
              <div className='col-lg-3 col-sm-9 col-9'>
                <div className='header-menu-rightbar'>
                  <div className='header-date'>
                    <p>Thursday, March 26, 2020</p>
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
