import React from 'react';

const Content = ({ activePage }) => {
  return (
    <div className='main-content'>
      {activePage === 'One' ? (
        <div>
          <h1>This is Page One Content</h1>
        </div>
      ) : null}
      {activePage === 'Two' ? (
        <div>
          <h1>This is Page Two Content</h1>
        </div>
      ) : null}
      {activePage === 'Three' ? (
        <div>
          <h1>This is Page Three Content</h1>
        </div>
      ) : null}
    </div>
  );
};

export default Content;
