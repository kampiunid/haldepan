import Link from 'next/link'
import React from 'react'

export default function VerticalNewsList() {
  return (
    <div className='post-news-list mt-40'>
      <div className='gallery_item populer_item-style'>
        <div className='gallery_item_thumb'>
          <img src='/images/post-news/1.jpg' alt='populer' />
        </div>
        <div className='gallery_item_content'>
          <h4 className='title'>
            <Link href='/post-details-one'>
              The city with highest quality of life in world.
            </Link>
          </h4>
          <span>TECHNOLOGY</span>
        </div>
      </div>
      <div className='gallery_item populer_item-style'>
        <div className='gallery_item_thumb'>
          <img src='/images/post-news/2.jpg' alt='populer' />
        </div>
        <div className='gallery_item_content'>
          <h4 className='title'>
            <Link href='/post-details-one'>
              Fire shows that will improve your…
            </Link>
          </h4>
          <span>TECHNOLOGY</span>
        </div>
      </div>
      <div className='gallery_item populer_item-style'>
        <div className='gallery_item_thumb'>
          <img src='/images/post-news/3.jpg' alt='populer' />
        </div>
        <div className='gallery_item_content'>
          <h4 className='title'>
            <Link href='/post-details-one'>
              Mutul fund mark from down up to 15%.
            </Link>
          </h4>
          <span>TECHNOLOGY</span>
        </div>
      </div>
      <div className='gallery_item populer_item-style'>
        <div className='gallery_item_thumb'>
          <img src='/images/post-news/4.jpg' alt='populer' />
        </div>
        <div className='gallery_item_content'>
          <h4 className='title'>
            <Link href='/post-details-one'>
              Danny meyer’s form latest restaurantes…
            </Link>
          </h4>
          <span>TECHNOLOGY</span>
        </div>
      </div>
      <div className='gallery_item populer_item-style'>
        <div className='gallery_item_thumb'>
          <img src='/images/post-news/5.jpg' alt='populer' />
        </div>
        <div className='gallery_item_content'>
          <h4 className='title'>
            <Link href='/post-details-one'>
              Wright begins in rehab assignment at the..
            </Link>
          </h4>
          <span>TECHNOLOGY</span>
        </div>
      </div>
    </div>
  )
}
