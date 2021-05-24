import React from 'react';
import Image from 'next/image';

const Layout = ({ children }) => (
  <>
    <div className="bgImage">
      <Image
        objectFit="cover"
        src="/dalai.jpg"
        alt="Dalai Puma Background"
        layout="fill"
        quality={75}
      />
    </div>
    <div className="bgImage gif">
      <Image
        objectFit="cover"
        src="/dalai.webp"
        alt="Dalai Puma Background Gif"
        layout="fill"
        quality={75}
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
        .bgImage {
          position: fixed;
          right: 0;
          bottom: 0;
          min-width: 100%;
          min-height: 100%;
          z-index: -2;
        }
        .gif {
          z-index: -1;
        }
      `}
    </style>
  </>
);

export default Layout;
