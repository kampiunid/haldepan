import React from 'react'

export default function FooterTwo() {
  return (
    <footer>
      <div className='footer footer_area1 primay_bg'>
        <div className='container'>
          <div className='cta'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <div className='footer_logo logo'>
                  <a href='index.html'>
                    <img src='/img/logo/footer_logo.png' alt='logo' />
                  </a>
                </div>
                <div className='social2'>
                  <ul className='inline'>
                    <li>
                      <a href='#'>
                        <i className='fab fa-instagram'></i>
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
              <div className='col-md-6 col-lg-4 offset-lg-2 align-self-center'>
                <div className='signup_form'>
                  <form action='index.html' method='post'>
                    <input
                      className='signup'
                      type='email'
                      placeholder='Your email address'
                    />
                    <input type='button' className='cbtn' value='sign up' />
                  </form>
                  <p>We hate spam as much as you do</p>
                </div>
              </div>
            </div>
          </div>
          <div className='border_white'></div>
          <div className='space-40'></div>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col-sm-6 col-lg'>
                  <div className='single_footer_nav border_white_right'>
                    <h3 className='widget-title2'>News categories</h3>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <ul>
                          <li>
                            <a href='#'>Politics</a>
                          </li>
                          <li>
                            <a href='#'>Business</a>
                          </li>
                          <li>
                            <a href='#'>TECHNOLOGY</a>
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
                      </div>
                      <div className='col-lg-6'>
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
                </div>
                <div className='col-sm-6 col-lg'>
                  <div className='single_footer_nav'>
                    <h3 className='widget-title2'>Living</h3>
                    <div className='row'>
                      <div className='col-lg-6'>
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
                      </div>
                      <div className='col-lg-6'>
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
              </div>
              <div className='space-40'></div>
              <div className='border_white'></div>
              <div className='space-40'></div>
              <div className='row'>
                <div className='col-sm-6 col-lg-5'>
                  <div className='single_footer_nav border_white_right'>
                    <h3 className='widget-title2'>Opinion</h3>
                    <div className='row'>
                      <div className='col-lg-6'>
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
                </div>
                <div className='col-sm-6 col-lg-7'>
                  <div className='twitter_feeds'>
                    <h3 className='widget-title2'>Twitter feed</h3>
                    <div className='single_twitter_feed border_white_bottom'>
                      <div className='twitter_feed_icon'>
                        {' '}
                        <i className='fab fa-twitter'></i>
                      </div>
                      <h6>
                        Cyber Monday Sale, Save 33% on Jannah theme during our
                        year-end Sale, Purchase a new license for your next
                        project…{' '}
                        <span>
                          @newspark #TECHNOLOGY
                          https://dribbble.com/subash_chandra
                        </span>
                      </h6>
                      <p>March 26, 2020</p>
                    </div>
                    <div className='single_twitter_feed'>
                      <div className='twitter_feed_icon'>
                        {' '}
                        <i className='fab fa-twitter'></i>
                      </div>
                      <h6>
                        Cyber Monday Sale, Save 33% on Jannah theme during our
                        year-end Sale, Purchase a new license for your next
                        project…{' '}
                        <span>
                          @newspark #TECHNOLOGY
                          https://dribbble.com/subash_chandra
                        </span>
                      </h6>
                      <p>March 26, 2020</p>
                    </div>
                    <div className='single_twitter_feed'>
                      <div className='twitter_feed_icon'>
                        {' '}
                        <i className='fab fa-twitter'></i>
                      </div>
                      <h6>
                        Cyber Monday Sale, Save 33% on Jannah theme during our
                        year-end Sale, Purchase a new license for your next
                        project…{' '}
                        <span>
                          @newspark #TECHNOLOGY
                          https://dribbble.com/subash_chandra
                        </span>
                      </h6>
                      <p>March 26, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='extra_newss border_white_left pl-4'>
                <h3 className='widget-title2'>More news</h3>
                <div className='single_extra_news border_white_bottom'>
                  <p>
                    TECHNOLOGY <span> / March 26, 2020</span>
                  </p>{' '}
                  <a href='#'>Nancy zhang a chinese busy woman and dhaka</a>
                  <span className='news_counter'>1</span>
                </div>
                <div className='single_extra_news border_white_bottom'>
                  <p>
                    TECHNOLOGY <span> / March 26, 2020</span>
                  </p>{' '}
                  <a href='#'>Nancy zhang a chinese busy woman and dhaka</a>
                  <span className='news_counter'>2</span>
                </div>
                <div className='single_extra_news border_white_bottom'>
                  <p>
                    TECHNOLOGY <span> / March 26, 2020</span>
                  </p>{' '}
                  <a href='#'>Nancy zhang a chinese busy woman and dhaka</a>
                  <span className='news_counter'>3</span>
                </div>
                <div className='single_extra_news border_white_bottom'>
                  <p>
                    TECHNOLOGY <span> / March 26, 2020</span>
                  </p>{' '}
                  <a href='#'>Nancy zhang a chinese busy woman and dhaka</a>
                  <span className='news_counter'>4</span>
                </div>
                <div className='single_extra_news'>
                  <p>
                    TECHNOLOGY <span> / March 26, 2020</span>
                  </p>{' '}
                  <a href='#'>Nancy zhang a chinese busy woman and dhaka</a>
                  <span className='news_counter'>5</span>
                </div>
                <div className='space-40'></div>
                <div className='border_white_bottom'></div>
                <div className='space-40'></div>
                <div className='footer_contact'>
                  <h3 className='widget-title2'>Newspark news services</h3>
                  <div className='single_fcontact'>
                    <div className='fcicon'>
                      <img src='/img/icon/mobile.png' alt='' />
                    </div>
                    <a href='#'>On your mobile</a>
                  </div>
                  <div className='single_fcontact'>
                    <div className='fcicon'>
                      <img src='/img/icon/speacker.png' alt='' />
                    </div>
                    <a href='#'>On smart speakers</a>
                  </div>
                  <div className='single_fcontact'>
                    <div className='fcicon'>
                      <img src='/img/icon/evelope.png' alt='' />
                    </div>{' '}
                    <a href='#'>Contact Newspark news</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 align-self-center'>
                <p>&copy; Copyright 2020, All Rights Reserved</p>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='copyright_menus text-right'>
                  <div className='language'></div>
                  <div className='copyright_menu inline'>
                    <ul>
                      <li>
                        <a href='#'>About</a>
                      </li>
                      <li>
                        <a href='#'>Advertise</a>
                      </li>
                      <li>
                        <a href='#'>Privacy & Policy</a>
                      </li>
                      <li>
                        <a href='#'>Contact Us</a>
                      </li>
                    </ul>
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
