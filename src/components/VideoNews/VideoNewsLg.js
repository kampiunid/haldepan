import Link from 'next/link'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function VideoNewsLg() {
  const [isOpen, setOpen] = useState(false)
  return (
    <section className='video-style-post-2-area'>
      <div className='container custom-container'>
        <div className='video-style-box mt-40'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title'>
                <h3 className='title'>Videos News</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='video-play-item'>
                <div className='video-play-thumb'>
                  <img src='/images/video-play-thumb.jpg' alt='' />
                  <div className='play-btn' onClick={() => setOpen(true)}>
                    <a
                      className='video-popup'
                      href='#'
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className='fab fa-youtube'></i>
                    </a>
                  </div>
                  <ModalVideo
                    channel='youtube'
                    autoplay
                    isOpen={isOpen}
                    videoId='eEzD-Y97ges'
                    onClose={() => setOpen(false)}
                  />
                  <div className='share-item'>
                    <ul>
                      <li>
                        <Link href='/post-details-two'>
                          <i className='fal fa-bookmark'></i>
                        </Link>
                      </li>
                      <li>
                        <Link href='/post-details-two'>
                          <i className='fas fa-share'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='post-meta'>
                    <div className='meta-categories'>
                      <Link href='/post-details-two' tabIndex='0'>
                        TECHNOLOGY
                      </Link>
                    </div>
                    <div className='meta-date'>
                      <span>March 26, 2020</span>
                    </div>
                    <div className='meta-date'>
                      <span>8:36mm</span>
                    </div>
                  </div>
                </div>
                <div className='video-play-content'>
                  <h3 className='title'>
                    <Link href='/post-details-two'>
                      ICC Men’s Cricket World Cup digital content delivers
                      record-breaking numbers
                    </Link>
                  </h3>
                  <ul>
                    <li>
                      <Link href='/post-details-two'>
                        <i className='far fa-eye'></i> 53,346
                      </Link>
                    </li>
                    <li>
                      <Link href='/post-details-two'>
                        <i className='far fa-heart'></i> 53,346
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='video-play-sidebar-items'>
                <div className='post-gallery-style-2'>
                  <div className='post-gallery-thumb'>
                    <img src='/images/video-items/1.png' alt='gallery' />
                  </div>
                  <div className='post-gallery-content'>
                    <h5 className='title'>
                      <Link href='/post-details-two' tabIndex='-1'>
                        The property complete with a 30 seat screen room.
                      </Link>
                    </h5>
                    <div className='meta-post-2-style'>
                      <div className='meta-post-categores'>
                        <Link href='/post-details-two' tabIndex='-1'>
                          TECHNOLOGY
                        </Link>
                      </div>
                      <div className='meta-post-date'>
                        <span>April 26, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='post-gallery-style-2'>
                  <div className='post-gallery-thumb'>
                    <img src='/images/video-items/2.png' alt='gallery' />
                  </div>
                  <div className='post-gallery-content'>
                    <h5 className='title'>
                      <Link href='/post-details-two' tabIndex='-1'>
                        Cheap smartphone sensor could help you old.
                      </Link>
                    </h5>
                    <div className='meta-post-2-style'>
                      <div className='meta-post-categores'>
                        <Link href='/post-details-two' tabIndex='-1'>
                          TECHNOLOGY
                        </Link>
                      </div>
                      <div className='meta-post-date'>
                        <span>April 26, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='post-gallery-style-2'>
                  <div className='post-gallery-thumb'>
                    <img src='/images/video-items/3.png' alt='gallery' />
                  </div>
                  <div className='post-gallery-content'>
                    <h5 className='title'>
                      <Link href='/post-details-two' tabIndex='-1'>
                        Harbour amid a Slowen the down in singer city
                      </Link>
                    </h5>
                    <div className='meta-post-2-style'>
                      <div className='meta-post-categores'>
                        <Link href='/post-details-two' tabIndex='-1'>
                          TECHNOLOGY
                        </Link>
                      </div>
                      <div className='meta-post-date'>
                        <span>April 26, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='post-gallery-style-2'>
                  <div className='post-gallery-thumb'>
                    <img src='/images/video-items/4.png' alt='gallery' />
                  </div>
                  <div className='post-gallery-content'>
                    <h5 className='title'>
                      <Link href='/post-details-two' tabIndex='-1'>
                        The secret to moving this from sphinx screening
                      </Link>
                    </h5>
                    <div className='meta-post-2-style'>
                      <div className='meta-post-categores'>
                        <Link href='/post-details-two' tabIndex='-1'>
                          TECHNOLOGY
                        </Link>
                      </div>
                      <div className='meta-post-date'>
                        <span>April 26, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='post-gallery-style-2'>
                  <div className='post-gallery-thumb'>
                    <img src='/images/video-items/5.png' alt='gallery' />
                  </div>
                  <div className='post-gallery-content'>
                    <h5 className='title'>
                      <Link href='/post-details-two' tabIndex='-1'>
                        The secret to moving this is sphinx screening
                      </Link>
                    </h5>
                    <div className='meta-post-2-style'>
                      <div className='meta-post-categores'>
                        <Link href='/post-details-two' tabIndex='-1'>
                          TECHNOLOGY
                        </Link>
                      </div>
                      <div className='meta-post-date'>
                        <span>April 26, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='post-gallery-style-2'>
                  <div className='post-gallery-thumb'>
                    <img src='/images/video-items/6.png' alt='gallery' />
                  </div>
                  <div className='post-gallery-content'>
                    <h5 className='title'>
                      <Link href='/post-details-two' tabIndex='-1'>
                        The secret to moving this is sphinx screening
                      </Link>
                    </h5>
                    <div className='meta-post-2-style'>
                      <div className='meta-post-categores'>
                        <Link href='/post-details-two' tabIndex='-1'>
                          TECHNOLOGY
                        </Link>
                      </div>
                      <div className='meta-post-date'>
                        <span>April 26, 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
