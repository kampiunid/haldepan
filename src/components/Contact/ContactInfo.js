import React from 'react'

export default function ContactInfo() {
  return (
    <section className='contact-info-area pt-70 pb-90'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-4 col-md-6'>
            <div className='contact-info-item mt-30'>
              <h3 className='title'>Headquarters</h3>
              <span>
                <i className='fas fa-map-marker-alt'></i> LOCATION:
              </span>
              <ul>
                <li>44 Canal Center Plaza #200</li>
                <li>Alexandria, VA 22314, USA</li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='contact-info-item mt-30'>
              <h3 className='title'>Let’s talk</h3>
              <span>
                <i className='fas fa-phone'></i> CALL NOW:
              </span>
              <ul>
                <li>+41 27 966 26690</li>
                <li>+880 1945 381758</li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='contact-info-item mt-30'>
              <h3 className='title'>Let’s chat</h3>
              <span>
                <i className='fas fa-envelope'></i> EMAIL:
              </span>
              <ul>
                <li>hello@newspark.com</li>
                <li>adsales@@newspark.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='map-area'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9198.688804852873!2d90.4003856461435!3d23.80073745243844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605153382124!5m2!1sen!2sbd'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowfullscreen=''
                aria-hidden='false'
                tabIndex='0'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
