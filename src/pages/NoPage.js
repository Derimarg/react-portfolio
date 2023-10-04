import React from 'react';

const NoPage = () => {
  return (<section>
    <div className="page-section bg-dark text-white">
      <div className="container px-4 px-lg-5 text-center">
        <h1
          className="mt-0 text-white font-weight-bold"
          data-testid="h1tag"
        >
          ⚠ 404 Page not found
        </h1>
        <hr className="divider" />
      </div>
    </div>
  </section>)
};

export default NoPage;