import React from 'react'

export default function SportsFixtures({ dark }) {
  return (
    <div className='upcoming-matches-post mt-35'>
      <div
        className={`section-title ${
          dark ? 'section-title-2' : ''
        } d-flex justify-content-between align-items-center`}
      >
        <h3 className='title'>Upcoming Matches</h3>
        <a href='#'>SEE ALL</a>
      </div>
      <div className='upcoming-matches-post-items'>
        <div
          className={`upcoming-matches-post-item ${
            dark ? 'upcoming-matches-post-item-dark' : ''
          } d-flex align-items-center`}
        >
          <div className='upcoming-matches-flag'>
            <img src='/images/flag/flag-1.png' alt='flag' />
          </div>
          <div className='upcoming-matches-content'>
            <span>
              Germany <span>VS</span> France
            </span>
            <ul>
              <li>Tomorrow</li>
              <li>22:30 (CST)</li>
            </ul>
          </div>
          <div className='upcoming-matches-circle'>
            <div className='circle-bar'>
              <div className='first circle'></div>
            </div>
          </div>
        </div>
        <div
          className={`upcoming-matches-post-item ${
            dark ? 'upcoming-matches-post-item-dark' : ''
          } d-flex align-items-center`}
        >
          <div className='upcoming-matches-flag'>
            <img src='/images/flag/flag-2.png' alt='flag' />
          </div>
          <div className='upcoming-matches-content'>
            <span>
              Spain <span>VS</span> Portugal
            </span>
            <ul>
              <li>Tomorrow</li>
              <li>22:30 (CST)</li>
            </ul>
          </div>
          <div className='upcoming-matches-circle'>
            <div className='circle-bar'>
              <div className='first circle'></div>
            </div>
          </div>
        </div>
        <div
          className={`upcoming-matches-post-item ${
            dark ? 'upcoming-matches-post-item-dark' : ''
          } d-flex align-items-center`}
        >
          <div className='upcoming-matches-flag'>
            <img src='/images/flag/flag-3.png' alt='flag' />
          </div>
          <div className='upcoming-matches-content'>
            <span>
              Russia <span>VS</span> Italy
            </span>
            <ul>
              <li>Tomorrow</li>
              <li>22:30 (CST)</li>
            </ul>
          </div>
          <div className='upcoming-matches-circle'>
            <div className='circle-bar'>
              <div className='first circle'></div>
            </div>
          </div>
        </div>
        <div
          className={`upcoming-matches-post-item ${
            dark ? 'upcoming-matches-post-item-dark' : ''
          } d-flex align-items-center`}
        >
          <div className='upcoming-matches-flag'>
            <img src='/images/flag/flag-4.png' alt='flag' />
          </div>
          <div className='upcoming-matches-content'>
            <span>
              Croatia <span>VS</span> England
            </span>
            <ul>
              <li>Tomorrow</li>
              <li>22:30 (CST)</li>
            </ul>
          </div>
          <div className='upcoming-matches-circle'>
            <div className='circle-bar'>
              <div className='first circle'></div>
            </div>
          </div>
        </div>
        <div
          className={`upcoming-matches-post-item ${
            dark ? 'upcoming-matches-post-item-dark' : ''
          } d-flex align-items-center`}
        >
          <div className='upcoming-matches-flag'>
            <img src='/images/flag/flag-5.png' alt='flag' />
          </div>
          <div className='upcoming-matches-content'>
            <span>
              Germany <span>VS</span> France
            </span>
            <ul>
              <li>Tomorrow</li>
              <li>22:30 (CST)</li>
            </ul>
          </div>
          <div className='upcoming-matches-circle'>
            <div className='circle-bar'>
              <div className='first circle'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
