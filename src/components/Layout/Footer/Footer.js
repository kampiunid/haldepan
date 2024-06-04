import Link from 'next/link'
import React from 'react'
import CategoryWidget from './CategoryWidget'

export default function Footer({ dark }) {
  return (
    <footer className={`footer-area ${dark ? 'footer-dark' : ''}`}>
      <div className='container'>
        <div className='footer-topbar'>
          <div className='row align-items-center'>
            <div className='col-lg-7 col-md-5'>
              <div className='footer-logo'>
                <Link href='/'>
                  <img src='/images/logo/logo-white.png' alt='' />
                </Link>
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
            <div className='col-lg-5 col-md-7'>
              <div className='footer-newaletter'>
                <div className='input-box'>
                  <input type='text' placeholder='Your email address' />
                  <button type='button'>SIGN UP</button>
                </div>
                <p>We hate spam as much as you do</p>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-widget-area'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='footer-widget-right-border'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='widget widget-list'>
                      <div className='section-title section-title-2'>
                        <h3 className='title'>News categories</h3>
                      </div>
                      <div className='list d-flex justify-content-between'>
                        <ul>
                          <li>
                            <a href='#'>Politics</a>
                          </li>
                          <li>
                            <a href='#'>Business</a>
                          </li>
                          <li>
                            <a href='#'>Technology</a>
                          </li>
                          <li>
                            <a href='#'>Science</a>
                          </li>
                          <li>
                            <a href='#'>Health</a>
                          </li>
                          <li>
                            <a href='#'>Sports</a>
                          </li>
                          <li>
                            <a href='#'>Entertainment</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href='#'>Education</a>
                          </li>
                          <li>
                            <a href='#'>Obituaries</a>
                          </li>
                          <li>
                            <a href='#'>Corrections</a>
                          </li>
                          <li>
                            <a href='#'>Education</a>
                          </li>
                          <li>
                            <a href='#'>Today’s Paper</a>
                          </li>
                          <li>
                            <a href='#'>Corrections</a>
                          </li>
                          <li>
                            <a href='#'>Foods</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='widget widget-list widget-list-2'>
                      <div className='section-title section-title-2'>
                        <h3 className='title'>Living</h3>
                      </div>
                      <div className='list d-flex justify-content-between'>
                        <ul>
                          <li>
                            <a href='#'>Crossword</a>
                          </li>
                          <li>
                            <a href='#'>Food</a>
                          </li>
                          <li>
                            <a href='#'>Automobiles</a>
                          </li>
                          <li>
                            <a href='#'>Education</a>
                          </li>
                          <li>
                            <a href='#'>Health</a>
                          </li>
                          <li>
                            <a href='#'>Magazine</a>
                          </li>
                          <li>
                            <a href='#'>Weddings</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href='#'>Classifieds</a>
                          </li>
                          <li>
                            <a href='#'>Photographies</a>
                          </li>
                          <li>
                            <a href='#'>NYT Store</a>
                          </li>
                          <li>
                            <a href='#'>Journalisms</a>
                          </li>
                          <li>
                            <a href='#'>Public Editor</a>
                          </li>
                          <li>
                            <a href='#'>Tools & Services</a>
                          </li>
                          <li>
                            <a href='#'>My Account</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='footer-twitter-post'>
                  <div className='row'>
                    <div className='col-lg-5 col-md-5'>
                      <div className='widget widget-list'>
                        <div className='section-title section-title-2'>
                          <h3 className='title'>Opinion</h3>
                        </div>
                        <div className='list'>
                          <ul>
                            <li>
                              <a href='#'>Today’s Opinion</a>
                            </li>
                            <li>
                              <a href='#'>Op-Ed Contributing</a>
                            </li>
                            <li>
                              <a href='#'>Contributing Writers</a>
                            </li>
                            <li>
                              <a href='#'>Business News</a>
                            </li>
                            <li>
                              <a href='#'>Collections</a>
                            </li>
                            <li>
                              <a href='#'>Today’s Paper</a>
                            </li>
                            <li>
                              <a href='#'>Saturday Review</a>
                            </li>
                            <li>
                              <a href='#'>Product Review</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-7 col-md-7'>
                      <div className='widget widget-twitter-post'>
                        <div className='twitter-post'>
                          <div className='icon'>
                            <i className='fab fa-twitter'></i>
                          </div>
                          <div className='twitter-content'>
                            <p>
                              Cyber Monday Sale, Save 33% on Jannah theme during
                              our year-end Sale, Purchase a new license for your
                              next project…{' '}
                              <a href='#'>
                                @newspark #technology
                                https://dribbble.com/subash_chandra
                              </a>
                            </p>
                            <span>March 26, 2020</span>
                          </div>
                        </div>
                        <div className='twitter-post'>
                          <div className='icon'>
                            <i className='fab fa-twitter'></i>
                          </div>
                          <div className='twitter-content'>
                            <p>
                              Cyber Monday Sale, Save 33% on Jannah theme during
                              our year-end Sale, Purchase a new license for your
                              next project…{' '}
                              <a href='#'>
                                @newspark #technology
                                https://dribbble.com/subash_chandra
                              </a>
                            </p>
                            <span>March 26, 2020</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='footer-rightbar mt-60'>
                <div className='row'>
                  <div className='col-lg-12 col-md-6'>
                    <CategoryWidget />
                  </div>
                  <div className='col-lg-12 col-md-6'>
                    <div className='widget wedget-service'>
                      <div className='section-title section-title-2'>
                        <h3 className='title'>Newspark news services</h3>
                      </div>
                      <div className='service-item'>
                        <ul>
                          <li>
                            <a href='#'>
                              <i className='fal fa-mobile-android-alt'></i> On
                              your mobile
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fal fa-microphone-alt'></i> On smart
                              speakers
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fal fa-envelope'></i> Contact
                              Newspark news
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
    </footer>
  )
}
