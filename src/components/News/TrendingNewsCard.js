import Link from 'next/link'
import React from 'react'

export default function TrendingNewsCard() {
  return (
    <div className='row'>
      <div className='col-lg-6 col-md-6'>
        <div className='trending-news-3-item'>
          <div className='trending-news-thumb'>
            <img src='/images/trending-thumb.jpg' alt='trending' />
            <div className='icon'>
              <Link href='/post-details-one' tabIndex='-1'>
                <i className='fas fa-bolt'></i>
              </Link>
            </div>
          </div>
          <div className='trending-news-content'>
            <div className='post-meta'>
              <div className='meta-categories'>
                <Link href='/post-details-one' tabIndex='-1'>
                  TECHNOLOGY
                </Link>
              </div>
              <div className='meta-date'>
                <span>March 26, 2020</span>
              </div>
              <div className='share-link'>
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
            <h3 className='title'>
              <Link href='/post-details-one' tabIndex='-1'>
                Unraveling immigration politics & Silicon Valley ethic with
                Jaclyn…
              </Link>
            </h3>
            <p className='text'>
              The property, complete with 30-seat screening from room, a
              100-seat amphitheater and a swimming pond with sandy shower…
            </p>
          </div>
        </div>
      </div>
      <div className='col-lg-6 col-md-6'>
        <div className='post_gallery_items'>
          <div className='gallery_item gallery_item_3'>
            <div className='gallery_item_thumb'>
              <img src='/images/gallery-1.jpg' alt='gallery' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
              </div>
              <h4 className='title'>
                <Link href='/post-details-one'>
                  Salesforce Ventures’s somorjai warns politics could dampen…
                </Link>
              </h4>
            </div>
          </div>
          <div className='gallery_item gallery_item_3'>
            <div className='gallery_item_thumb'>
              <img src='/images/gallery-2.jpg' alt='gallery' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
              </div>
              <h4 className='title'>
                <Link href='/post-details-one'>
                  Salesforce Ventures’s somorjai warns politics could dampen…
                </Link>
              </h4>
            </div>
          </div>
          <div className='gallery_item gallery_item_3'>
            <div className='gallery_item_thumb'>
              <img src='/images/gallery-3.jpg' alt='gallery' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
              </div>
              <h4 className='title'>
                <Link href='/post-details-one'>
                  Salesforce Ventures’s somorjai warns politics could dampen…
                </Link>
              </h4>
            </div>
          </div>
          <div className='gallery_item gallery_item_3'>
            <div className='gallery_item_thumb'>
              <img src='/images/gallery-4.jpg' alt='gallery' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
              </div>
              <h4 className='title'>
                <Link href='/post-details-one'>
                  Salesforce Ventures’s somorjai warns politics could dampen…
                </Link>
              </h4>
            </div>
          </div>
          <div className='gallery_item gallery_item_3'>
            <div className='gallery_item_thumb'>
              <img src='/images/gallery-5.jpg' alt='gallery' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
              </div>
              <h4 className='title'>
                <Link href='/post-details-one'>
                  Salesforce Ventures’s somorjai warns politics could dampen…
                </Link>
              </h4>
            </div>
          </div>
          <div className='gallery_item gallery_item_3'>
            <div className='gallery_item_thumb'>
              <img src='/images/gallery-5.jpg' alt='gallery' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
              </div>
              <h4 className='title'>
                <Link href='/post-details-one'>
                  Salesforce Ventures’s somorjai warns politics could dampen…
                </Link>
              </h4>
            </div>
          </div>
          <div className='gallery_item gallery_item_3'>
            <div className='gallery_item_thumb'>
              <img src='/images/gallery-5.jpg' alt='gallery' />
            </div>
            <div className='gallery_item_content'>
              <div className='post-meta'>
                <div className='meta-categories'>
                  <Link href='/post-details-one'>TECHNOLOGY</Link>
                </div>
                <div className='meta-date'>
                  <span>March 26, 2020</span>
                </div>
              </div>
              <h4 className='title'>
                <Link href='/post-details-one'>
                  Salesforce Ventures’s somorjai warns politics could dampen…
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
