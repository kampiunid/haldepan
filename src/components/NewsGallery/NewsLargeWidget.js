import Link from 'next/link'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function NewsLargeWidget() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className='post_gallery_play d-flex post_gallery_play-2 mt-40'>
      <div className='bg-image'></div>
      <div className='post__gallery_play_content'>
        <h2 className='title'>
          <Link href='/post-details-one' tabIndex='0'>
            Japan’s virus success has puzzled the world. Is its luck running
            out?
          </Link>
        </h2>
        <p>
          The property, complete with a 30-seat screening room, a 100-seat
          amphitheater and a swimming pond with sandy beach and outdoor shower…
        </p>
        <div className='post-meta'>
          <div className='meta-categories'>
            <Link href='/post-details-one' tabIndex='0'>
              TECHNOLOGY
            </Link>
          </div>
          <div className='meta-date'>
            <span>March 26, 2020</span>
          </div>
        </div>
      </div>
      <div className='post_play_btn' onClick={() => setOpen(true)}>
        <a
          className='video-popup'
          onClick={(e) => e.preventDefault()}
          href='#'
          tabIndex='0'
        >
          <i className='fas fa-play'></i>
        </a>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='eEzD-Y97ges'
        onClose={() => setOpen(false)}
      />
    </div>
  )
}
