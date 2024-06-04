"use client"

import React from 'react'
import Link from 'next/link'
import data from '../../../data/navigation.json'

function Drawer({ drawer, action }) {
  return (
    <>
      <div className={`off_canvars_overlay ${drawer ? 'active' : ''}`}></div>
      <div className='offcanvas_menu'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <div
                className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}
              >
                <div className='canvas_close'>
                  <Link href='#nolink' onClick={(e) => action(e)}>
                    <i className='fa fa-times'></i>
                  </Link>
                </div>
                <div className='offcanvas-brand text-center mb-40'>
                  <img src='/images/logo/logo-black.png' alt='newsprk' />
                </div>
                {data && data.data && data.data.length > 0 && (
                  <div id='menu' className='text-left'>
                    <ul className='offcanvas_main_menu list-unstyled'>
                      {data.data.map((item, i) => (
                        <li key={i}>
                          {item.submenu && item.submenu.length > 0 && (
                            <span className='menu-expand'>
                              <i className='fa fa-angle-down'></i>
                            </span>
                          )}
                          {item.link ? (
                            <Link href={item.link}>{item.linkText}</Link>
                          ) : (
                            <Link href='#'>{item.linkText}</Link>
                          )}
                          {item.submenu && (
                            <ul className='sidebar-sub-menu list-unstyled ml-3'>
                              {item.submenu.map((sItem, j) => (
                                <li key={j}>
                                  {sItem.child && (
                                    <span className='menu-expand'>
                                      <i className='fa fa-angle-down'></i>
                                    </span>
                                  )}
                                  <Link href={sItem.link}>
                                    {sItem.linkText}
                                  </Link>
                                  {sItem.child && (
                                    <ul>
                                      {sItem.third_menu.map((thirdMenu, k) => (
                                        <li key={k}>
                                          <Link href={thirdMenu.link}>
                                            {thirdMenu.linkText}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Drawer
