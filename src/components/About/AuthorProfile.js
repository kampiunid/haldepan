import React from 'react'

export default function AuthorProfile() {
  return (
    <section className='about-author-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='about-author-content'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>Home</a>
                  </li>
                  <li className='breadcrumb-item'>
                    <a href='#'>Author</a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Subash Chandra
                  </li>
                </ol>
              </nav>
              <div className='author-content'>
                <div className='thumb'>
                  <img src='/images/author.png' alt='' />
                </div>
                <h3 className='title'>Subash Chandra</h3>
                <ul>
                  <li>News Writer</li>
                  <li>
                    <span>
                      Since: <span>April 25, 2020</span>
                    </span>
                  </li>
                </ul>
                <div className='text'>
                  <p>
                    Subash Chandra is an investigative reporter for Newspark,
                    based in Bangladesh. He started at The Times in 1999
                    covering Mayor Rudolph W. Giuliani and then the Sept. 11,
                    2001, attacks.
                  </p>
                  <p>
                    He is a three-time winner of the Pulitzer Prize for
                    explanatory reporting, investigative reporting and as part
                    of team for foreign reporting. He previously worked at The
                    Bangladesh Post and The Hartford Courant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
