import React from 'react';
import ErrorBoundary from '../errorBoundary';
import NavBar from '../navBar';

function Layout({ children }) {
  return (
    <div className="flex flex-row absolute top-0 bottom-0 right-0 left-0 overflow-y-scroll">
      <ErrorBoundary>
        <NavBar />
        <ErrorBoundary>
          <main className="m-4 mx-auto p-4 w-2/3">{children}</main>
        </ErrorBoundary>
        {/* Footer */}
      </ErrorBoundary>
    </div>
  );
}

export default Layout;
