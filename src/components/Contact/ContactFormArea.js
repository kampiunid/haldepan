import React from 'react'
import NewsLetterTwo from '../Newsletter/NewsLetterTwo'
import WidgetOne from '../SocialMediaWidgets/WidgetOne'

export default function ContactFormArea() {
  return (
    <section className='contact-area pb-90'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='contact-box'>
              <form action='#'>
                <h3 className='title'>
                  Let’s work together! <br /> Fill out the form.
                </h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='input-box'>
                      <input type='text' placeholder='Full name' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='input-box'>
                      <input type='text' placeholder='Subject' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='input-box'>
                      <input type='email' placeholder='Email address' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='input-box'>
                      <input type='email' placeholder='Phone number' />
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='input-box'>
                      <textarea
                        name='#'
                        id='#'
                        cols='30'
                        rows='10'
                        placeholder='Tell us about your message…'
                      ></textarea>
                      <button className='main-btn'>SEND MESSAGE</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='contact-sidebar'>
              <WidgetOne />
              <NewsLetterTwo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
