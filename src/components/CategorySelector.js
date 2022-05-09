import React from 'react';

export default function CategorySelector(props) {
  return (
    <div className='category--selecter m-5'>
      <div className='btn-group'>
        <button type='button' className='btn btn-danger btn-lg'>
          Select Category
        </button>
        <button
          type='button'
          className='btn btn-danger dropdown-toggle dropdown-toggle-split'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          <span className='visually-hidden'>Toggle Dropdown</span>
        </button>
        <ul className='dropdown-menu'>
          <li>
            <button
              type='button'
              className='btn btn-outline-light dropdown-item'
              onClick={props.categoryBusiness}
            >
              Business
            </button>
          </li>
          <li>
            <button
              type='button'
              className='btn btn-outline-light dropdown-item'
              onClick={props.categoryEntertainment}
            >
              Entertainment
            </button>
          </li>
          <li>
            <button
              type='button'
              className='btn btn-outline-light dropdown-item'
              onClick={props.categoryGeneral}
            >
              General
            </button>
          </li>
          <li>
            <button
              type='button'
              className='btn btn-outline-light dropdown-item'
              onClick={props.categoryHealth}
            >
              Health
            </button>
          </li>
          <li>
            <button
              type='button'
              className='btn btn-outline-light dropdown-item'
              onClick={props.categoryScience}
            >
              Science
            </button>
          </li>
          <li>
            <button
              type='button'
              className='btn btn-outline-light dropdown-item'
              onClick={props.categorySports}
            >
              Sports
            </button>
          </li>
          <li>
            <button
              type='button'
              className='btn btn-outline-light dropdown-item'
              onClick={props.categoryTechnology}
            >
              Technology
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
