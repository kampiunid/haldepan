import React from 'react'

export default function NewsLetterWhite() {
  return (
    <div className='post-newsletter mt-40'>
      <h3 className='title'>Newsletter</h3>
      <p>
        Your email address will not be this published. Required fields are News
        Today.
      </p>
      <form action='#'>
        <div className='input-box'>
          <input type='text' placeholder='Your email address' />
          <button type='button'>SIGN UP</button>
        </div>
      </form>
      <span>We hate spam as much as you do</span>
    </div>
  )
}
