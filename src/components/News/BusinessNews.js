import Link from 'next/link'
import React from 'react'

const postData = [
  {
    postThumb: '/images/business-1.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'There may be no consoles in the future ea exec says',
    postDate: 'March 26, 2020',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-2.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'There may be no consoles in the future ea exec says',
    postDate: 'March 26, 2020',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-3.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'There may be no consoles in the future ea exec says',
    postDate: 'March 26, 2020',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-4.jpg',
    postTag: 'TECHNOLOGY',
    postTitle: 'There may be no consoles in the future ea exec says',
    postDate: 'March 26, 2020',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
]

export default function BusinessNews({ dark }) {
  return (
    <div className='business-news-post pt-40'>
      <div className='section-title d-flex justify-content-between align-items-center'>
        <h3 className='title'>Business News</h3>
        <Link href='/post-details-one'> SEE ALL </Link>
      </div>
      <div className='business-post'>
        {postData.map((item, i) => (
          <div
            key={i + 1}
            className={`business-post-item mb-40  ${
              dark ? 'business-post-item-dark' : ''
            }`}
          >
            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='business-post-thumb'>
                  <img src={item.postThumb} alt='business' />
                </div>
              </div>
              <div className='col-lg-6 col-md-6'>
                <div className='trending-news-item'>
                  <div className='trending-news-content'>
                    <div className='post-meta'>
                      <div className='meta-categories'>
                        <Link href='/post-details-one'>{item.postTag}</Link>
                      </div>
                      <div className='meta-date'>
                        <span>{item.postDate}</span>
                      </div>
                    </div>
                    <h3 className='title'>
                      <Link href='/post-details-one'>{item.postTitle}</Link>
                    </h3>
                    <p className='text'>{item.postDesc}</p>
                    <Link href='/post-details-one'>Read mores</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
