import React, { forwardRef } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from 'next/image';

const MobileMenu = forwardRef(({ headerHeight, isMenuOpen }, ref) => {
  const router = useRouter();
  console.log(router.asPath === '/shows');

  return (
    <div className="mobile-menu" ref={ref}>
      <div className="mobile-menu-bg">
        <Image
          src="/cheeta.png"
          layout="fill"
          objectFit="cover"
          alt="Dalai Puma Background"
          className="bg"
        />
      </div>
      <div className="mobile-menu-content">
        <Link href="/">
          <a
            style={{
              textDecoration: router.asPath === '/' ? 'underline' : 'none',
            }}
          >
            Home
          </a>
        </Link>
        <Link href="/shows">
          <a
            style={{
              textDecoration: router.asPath === '/shows' ? 'underline' : 'none',
            }}
          >
            Shows
          </a>
        </Link>
        <Link href="/ashtray">
          <a
            style={{
              textDecoration: router.asPath === '/shows' ? 'underline' : 'none',
            }}
          >
            Ashtray
          </a>
        </Link>
      </div>

      <style jsx>{`
        .mobile-menu {
          color: white;
          position: fixed;
          z-index: 1;
          flex-direction: column;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0;
          padding-top: ${headerHeight}px;
          visibility: ${isMenuOpen ? 'visible' : 'hidden'};
          opacity: ${isMenuOpen ? 1 : 0};
          transition: opacity 0.4s;
          display: none;
          @media screen and (max-width: 700px) {
            display: flex;
          }
        }
        .mobile-menu-bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .mobile-menu-content {
          display: flex;
          z-index: 2;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-bottom: ${headerHeight}px;
          height: 100%;
          width: 100%;
        }
        .mobile-menu-content a {
          font-size: 3em;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
