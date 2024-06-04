import Link from 'next/link'
import React from 'react'

export default function OrderedNewsList() {
  return (
    <div className='post_gallery_items'>
      <div className='gallery_item gallery_item-style-2'>
        <div className='gallery_item_thumb'>
          <img src='/images/most-post/most-1.jpg' alt='gallery' />
          <div className='icon'>
            <i className='fas fa-bolt'></i>
          </div>
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-three'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <Link href='/post-details-three'>
              Nancy zhang a chinese busy woman and dhaka
            </Link>
          </h4>
          <span>1</span>
        </div>
      </div>
      <div className='gallery_item gallery_item-style-2'>
        <div className='gallery_item_thumb'>
          <img src='/images/most-post/most-2.jpg' alt='gallery' />
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-three'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <Link href='/post-details-three'>
              The billionaire Philan thropist read to learn
            </Link>
          </h4>
          <span>2</span>
        </div>
      </div>
      <div className='gallery_item gallery_item-style-2'>
        <div className='gallery_item_thumb'>
          <img src='/images/most-post/most-3.jpg' alt='gallery' />
          <div className='icon'>
            <i className='fas fa-bolt'></i>
          </div>
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-three'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <Link href='/post-details-three'>
              Cheap smartphone sensor could help you old food safe
            </Link>
          </h4>
          <span>3</span>
        </div>
      </div>
      <div className='gallery_item gallery_item-style-2'>
        <div className='gallery_item_thumb'>
          <img src='/images/most-post/most-4.jpg' alt='gallery' />
          <div className='icon'>
            <i className='fas fa-bolt'></i>
          </div>
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-three'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <Link href='/post-details-three'>
              Class property employ ancho red multi
            </Link>
          </h4>
          <span>4</span>
        </div>
      </div>
      <div className='gallery_item gallery_item-style-2'>
        <div className='gallery_item_thumb'>
          <img src='/images/most-post/most-5.jpg' alt='gallery' />
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-three'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <Link href='/post-details-three'>
              Best garden wing supplies for the horticu ltural
            </Link>
          </h4>
          <span>5</span>
        </div>
      </div>
      <div className='gallery_item gallery_item-style-2'>
        <div className='gallery_item_thumb'>
          <img src='/images/most-post/most-6.jpg' alt='gallery' />
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories'>
              <Link href='/post-details-three'>TECHNOLOGY</Link>
            </div>
            <div className='meta-date'>
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className='title'>
            <Link href='/post-details-three'>
              Ratiffe to be Director of nation talent Trump ignored
            </Link>
          </h4>
          <span>6</span>
        </div>
      </div>
    </div>
  )
}
