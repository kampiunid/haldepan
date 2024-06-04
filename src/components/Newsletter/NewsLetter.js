import React from 'react'

export default function NewsLetter({ dark }) {
  return (
    <div
      className={`newsletter-box mt-45 ${dark ? 'newsletter-box-dark' : ''}`}
    >
      <h5 className='title'>Newsletter</h5>
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
