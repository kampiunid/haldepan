import Link from 'next/link'
import React from 'react'

const postData = [
  {
    postThumb: '/images/entertainment-1.jpg',
    postThumbDark: '/images/entertainment-dark-1.jpg',
    postTitle: '  There may be no consoles in the future ea exec says',
    postDate: 'March 26, 2020',
    postDesc:
      ' The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
    postTag: 'TECHNOLOGY',
  },
  {
    postThumb: '/images/entertainment-2.jpg',
    postThumbDark: '/images/entertainment-dark-2.jpg',
    postTitle: '  There may be no consoles in the future ea exec says',
    postDate: 'March 26, 2020',
    postDesc:
      ' The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
    postTag: 'TECHNOLOGY',
  },
  {
    postThumb: '/images/entertainment-3.jpg',
    postThumbDark: '/images/entertainment-dark-3.jpg',
    postTitle: '  There may be no consoles in the future ea exec says',
    postDate: 'March 26, 2020',
    postDesc:
      ' The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
    postTag: 'TECHNOLOGY',
  },
  {
    postThumb: '/images/entertainment-4.jpg',
    postThumbDark: '/images/entertainment-dark-4.jpg',
    postTitle: '  There may be no consoles in the future ea exec says',
    postDate: 'March 26, 2020',
    postDesc:
      ' The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
    postTag: 'TECHNOLOGY',
  },
]

export default function EntertainmentNews({ dark }) {
  return (
    <div className='post-entertainment'>
      <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
        <h3 className='title'>Entertainment News</h3>
      </div>
      <div className='row'>
        {postData.map((item, i) => (
          <div className='col-lg-6 col-md-6' key={i + 1}>
            <div
              className={`trending-news-item ${
                dark ? 'trending-news-item-dark' : ''
              } mb-30`}
            >
              <div className='trending-news-thumb'>
                {dark ? (
                  <img src={item.postThumbDark} alt='trending' />
                ) : (
                  <img src={item.postThumb} alt='trending' />
                )}

                <div className='circle-bar'>
                  <div className='first circle'>
                    <strong></strong>
                  </div>
                </div>
              </div>
              <div className='trending-news-content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href='/post-details-two'>{item.postTag}</Link>
                  </div>
                  <div className='meta-date'>
                    <span>{item.postDate}</span>
                  </div>
                </div>
                <h3 className='title'>
                  <Link href='/post-details-two'>{item.postTitle}</Link>
                </h3>
                <p className='text'>{item.postDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
