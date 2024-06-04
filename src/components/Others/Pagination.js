import React from 'react'

export default function Pagination({ customClass }) {
  return (
    <div className={`pagination-item ${customClass}`}>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          <li className='page-item active'>
            <a className='page-link' href='#'>
              01
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              02
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              ...
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              50
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#' aria-label='Next'>
              <span aria-hidden='true'>
                <i className='fas fa-caret-right'></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
