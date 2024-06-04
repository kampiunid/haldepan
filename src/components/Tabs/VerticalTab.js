import React from 'react'
import Link from 'next/link'

export default function VerticalTab() {
  return (
    <div className='counter-post-tab'>
      <div className='post-tab-btn'>
        <ul className='nav nav-pills' id='pills-tab' role='tablist'>
          <li className='nav-item' role='presentation'>
            <a
              className='nav-link active'
              id='pills-home-tab'
              data-toggle='pill'
              href='#pills-home'
              role='tab'
              aria-controls='pills-home'
              aria-selected='true'
            >
              Food
            </a>
          </li>
          <li className='nav-item' role='presentation'>
            <a
              className='nav-link'
              id='pills-profile-tab'
              data-toggle='pill'
              href='#pills-profile'
              role='tab'
              aria-controls='pills-profile'
              aria-selected='false'
            >
              Business
            </a>
          </li>
          <li className='nav-item' role='presentation'>
            <a
              className='nav-link'
              id='pills-contact-tab'
              data-toggle='pill'
              href='#pills-contact'
              role='tab'
              aria-controls='pills-contact'
              aria-selected='false'
            >
              Politics
            </a>
          </li>
        </ul>
      </div>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          id='pills-home'
          role='tabpanel'
          aria-labelledby='pills-home-tab'
        >
          <div className='counter-post-main-item'>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>1</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>2</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>3</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>4</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>5</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>6</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='pills-profile'
          role='tabpanel'
          aria-labelledby='pills-profile-tab'
        >
          <div className='counter-post-main-item'>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>1</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>2</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>3</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>4</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>5</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>6</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='tab-pane fade'
          id='pills-contact'
          role='tabpanel'
          aria-labelledby='pills-contact-tab'
        >
          <div className='counter-post-main-item'>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>1</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>2</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>3</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>4</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>5</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='counter-post-content'>
              <h5 className='title'>
                <Link href='/post-details-one'>
                  Cheers, darling. Virtual cheer. How to throw a virtual cock
                  tail party
                </Link>
              </h5>
              <div className='meta-date-share'>
                <div className='counter-number'>
                  <span>6</span>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
                <div className='meta-share'>
                  <ul>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fal fa-bookmark'></i>
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-one'>
                        <i className='fas fa-share'></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
