import React from 'react'

export default function CommentForm() {
  return (
    <div className='post-form-area'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='section-title'>
              <h3 className='title'>Leave an opinion</h3>
            </div>
            <div className='post-form-box'>
              <form action='#'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='input-box'>
                      <input type='text' placeholder='Full name' />
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='input-box'>
                      <input type='text' placeholder='Email address' />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='input-box'>
                      <textarea
                        name='#'
                        id='#'
                        cols='30'
                        rows='10'
                        placeholder='Tell us about your opinion…'
                      ></textarea>
                      <button className='main-btn' type='button'>
                        POST OPINION
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
