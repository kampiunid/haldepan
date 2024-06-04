import React from 'react'
import Pagination from '../Others/Pagination'

export default function LatestAndPopularNews() {
  return (
    <div className='about-tab-btn mt-40'>
      <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
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
            Latest news
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
            Popular news
          </a>
        </li>
      </ul>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          id='pills-home'
          role='tabpanel'
          aria-labelledby='pills-home-tab'
        >
          <div className='about-post-items'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-1.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-2.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-3.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-4.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-5.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-6.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-7.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-1.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-2.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-3.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-4.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-5.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='pagination-item'>
                  <nav aria-label='Page navigation example'>
                    <ul className='pagination'>
                      <li className='page-item active'>
                        <a className='page-link' href='#'>
                          01
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          02
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          ...
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#'>
                          50
                        </a>
                      </li>
                      <li className='page-item'>
                        <a className='page-link' href='#' aria-label='Next'>
                          <span aria-hidden='true'>
                            <i className='fas fa-caret-right'></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
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
          <div className='about-post-items'>
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-1.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-2.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-3.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-4.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-5.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-6.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-7.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-1.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-2.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-3.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-4.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item mb-30'>
                  <div className='trending-news-thumb'>
                    <img
                      src='/images/entertainment-dark-5.jpg'
                      alt='trending'
                    />
                  </div>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <a href='#'>TECHNOLOGY</a>
                      </div>
                      <div className='meta-date'>
                        <span>March 26, 2020</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <a href='#'>
                        There may be no consoles in the future ea exec says
                      </a>
                    </h3>
                    <p className='text'>
                      The property, complete with 30-seat screening from room, a
                      100-seat amphitheater and a swimming pond with sandy
                      shower…
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-lg-12'>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
