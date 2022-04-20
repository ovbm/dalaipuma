import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Header from '../Header';

const Layout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  return (
    <>
      <div className="bg">
        <Image
          src="/cheeta.png"
          layout="fill"
          objectFit="cover"
          alt="Dalai Puma Background"
          className="bg"
        />
      </div>
      <Header
        headerHeight={headerHeight}
        setHeaderHeight={setHeaderHeight}
        ref={headerRef}
      />
      <div>
        <main>{children}</main>
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
          .gif {
            z-index: -1;
          }
          main {
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            max-width: 960px;
            align-items: center;
            padding: ${headerHeight}px 15px 4em 15px;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: 'Gaegu', cursive;
            font-size: 150%;
            text-shadow: 2px 2px black;
            color: white;
          }
          a {
            color: red;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.4s;
          }
          a:hover {
            color: magenta;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
