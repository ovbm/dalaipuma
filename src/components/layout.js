import React from 'react';

const Layout = ({ children }) => (
  <>
    <div className="bg">
      <img
        src="/dalai.jpg"
        alt="Dalai Puma Background"
        className="bg"
      />
    </div>
    <div className="bg gif">
      <img
        src="/dalai.webp"
        alt="Dalai Puma Background Gif"
        className="bg"
      />
    </div>
    <div>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: `0 auto`,
          maxWidth: 960,
          alignItems: 'center',
          padding: '2em 0 4em 0',
        }}
      >
        {children}
      </main>
    </div>
    <style jsx>
      {`
        .bg {
          position: fixed;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
          z-index: -2;
        }
        .image {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .gif {
          z-index: -1;
        }
      `}
    </style>
  </>
);

export default Layout;
