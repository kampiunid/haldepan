import classNames from 'classnames'
import Link from 'next/link'
import React, { useState } from 'react'
export default function VerticalTabTwo() {
  const [activeTab, setActiveTab] = useState('home')

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  return (
    <div className='post-style-tab-post mt-40'>
      <div className='tab-btn'>
        <ul className='nav nav-pills' id='pills-tab' role='tablist'>
          <li className='nav-item' role='presentation'>
            <a
              className={classNames('nav-link', {
                active: activeTab === 'home',
              })}
              id='pills-home-tab'
              data-toggle='pill'
              href='#pills-home'
              role='tab'
              aria-controls='pills-home'
              aria-selected='true'
              onClick={(e) => {
                e.preventDefault()
                toggleTab('home')
              }}
            >
              TRENDY
            </a>
          </li>
          <li className='nav-item' role='presentation'>
            <a
              className={classNames('nav-link', {
                active: activeTab === 'profile',
              })}
              id='pills-profile-tab'
              data-toggle='pill'
              href='#pills-profile'
              role='tab'
              aria-controls='pills-profile'
              aria-selected='false'
              onClick={(e) => {
                e.preventDefault()
                toggleTab('profile')
              }}
            >
              LATEST
            </a>
          </li>
          <li className='nav-item' role='presentation'>
            <a
              className={classNames('nav-link', {
                active: activeTab === 'contact',
              })}
              id='pills-contact-tab'
              data-toggle='pill'
              href='#pills-contact'
              role='tab'
              aria-controls='pills-contact'
              aria-selected='false'
              onClick={(e) => {
                e.preventDefault()
                toggleTab('contact')
              }}
            >
              POPULAR
            </a>
          </li>
        </ul>
      </div>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className={classNames('tab-pane', 'fade', 'show', {
            active: activeTab === 'home',
          })}
          id='pills-home'
          role='tabpanel'
          aria-labelledby='pills-home-tab'
        >
          <div className='post-style-items'>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/1.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    The city with highest quality of life in world.
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/2.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Fire shows that will improve your…
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/3.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Mutul fund mark from down up to 15%.
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/4.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Danny meyer’s form latest restaurantes…
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/5.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Wright begins in rehab assignment at the..
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='post-btn'>
            <a className='main-btn main-btn-2' href='#'>
              See More
            </a>
          </div>
        </div>
        <div
          className={classNames('tab-pane', 'fade', 'show', {
            active: activeTab === 'profile',
          })}
          id='pills-profile'
          role='tabpanel'
          aria-labelledby='pills-profile-tab'
        >
          <div className='post-style-items'>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/1.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    The city with highest quality of life in world.
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/2.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Fire shows that will improve your…
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/3.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Mutul fund mark from down up to 15%.
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/4.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Danny meyer’s form latest restaurantes…
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/5.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Wright begins in rehab assignment at the..
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='post-btn'>
            <a className='main-btn main-btn-2' href='#'>
              See More
            </a>
          </div>
        </div>
        <div
          className={classNames('tab-pane', 'fade', 'show', {
            active: activeTab === 'contact',
          })}
          id='pills-contact'
          role='tabpanel'
          aria-labelledby='pills-contact-tab'
        >
          <div className='post-style-items'>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/1.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    The city with highest quality of life in world.
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/2.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Fire shows that will improve your…
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/3.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Mutul fund mark from down up to 15%.
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/4.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Danny meyer’s form latest restaurantes…
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='post-gallery-style-2 most-view-style-2'>
              <div className='post-gallery-thumb'>
                <img src='/images/tab-post/5.png' alt='gallery' />
              </div>
              <div className='post-gallery-content'>
                <h5 className='title'>
                  <Link href='/post-details-two' tabIndex='-1'>
                    Wright begins in rehab assignment at the..
                  </Link>
                </h5>
                <div className='meta-post-2-style'>
                  <div className='meta-post-categores'>
                    <Link href='/post-details-two' tabIndex='-1'>
                      TECHNOLOGY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='post-btn'>
            <a className='main-btn main-btn-2' href='#'>
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
