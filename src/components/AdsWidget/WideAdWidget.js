import Link from 'next/link'
import React from 'react'

export default function WideAdWidget() {
  return (
    <div className='add-area text-center'>
      <Link href='/'>
        <img src='/images/ads/banner.png' alt='' />
      </Link>
    </div>
  )
}
