import React from 'react';

export default function CategoryChangedAlert(props) {
  return (
    <div>
      <div className='alert alert-info fade show' role='alert'>
        Your category has been successfully changed to{' '}
        <strong>
          {props.currentCategory === 'breaking-news'
            ? 'General'
            : props.currentCategory[0].toUpperCase() +
              props.currentCategory.slice(1)}
        </strong>
        .
      </div>
    </div>
  );
}
