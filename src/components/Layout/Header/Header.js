"use client"

import React from 'react'
import NavigationBar from './NavigationBar'
import Topbar from './Topbar'
import LogoBanner from './LogoBanner'

import useToggle from '@/Hooks/useToggle'
import AuthLinks from '@/components/AuthLinks/AuthLinks'

export default function Header({ customClass, className, action, dark }) {
  const [drawer, drawerAction] = useToggle(false)
  
  return (
    <header
      className={`newsprk-header-area
    header-area ${customClass}`}
    >
      <Topbar take={5} skip={0} cat='' type='latest' />
      <LogoBanner />
      <div className={`newsprk-header-area ${className || ''}`}>
        <div className='container'>
          <div className='header-nav-box'>
            <div className='row align-items-center position-relative'>
              <div
                onClick={(e) => action(e)}
                className='toggle-btn ml-15 canvas_open d-lg-none d-block'
              >
                <i className='fa fa-bars' />
              </div>
              <div className='col-lg-8'>
                <div
                  className={`newsprk-header-main-menu ${
                    dark ? 'newsprk-header-main-menu-dark' : ''
                  }`}
                >
                  <NavigationBar />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='header-menu-rightbar'>
                  <AuthLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
