import React from 'react'

export default function CommentList() {
  return (
    <section className='post-comments-area pb-100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='section-title'>
              <h3 className='title'>Post Comments</h3>
            </div>
            <div className='post-comments-list'>
              <div className='post-comments-item'>
                <div className='thumb'>
                  <img src='/images/comments-1.png' alt='comments' />
                </div>
                <div className='post'>
                  <a href='#'>Reply</a>
                  <h5 className='title'>Subash Chandra</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div className='post-comments-item'>
                <div className='thumb'>
                  <img src='/images/comments-2.png' alt='comments' />
                </div>
                <div className='post'>
                  <a href='#'>Reply</a>
                  <h5 className='title'>Subash Chandra</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div className='post-comments-item ml-30'>
                <div className='thumb'>
                  <img src='/images/comments-3.png' alt='comments' />
                </div>
                <div className='post'>
                  <a href='#'>Reply</a>
                  <h5 className='title'>Subash Chandra</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div className='post-comments-item'>
                <div className='thumb'>
                  <img src='/images/comments-4.png' alt='comments' />
                </div>
                <div className='post'>
                  <a href='#'>Reply</a>
                  <h5 className='title'>Subash Chandra</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
            </div>
            <div className='post-load-btn'>
              <a className='main-btn' href='#'>
                LOAD MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
