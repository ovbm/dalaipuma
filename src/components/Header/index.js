import React, { useState, useRef, useEffect, forwardRef } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import Link from 'next/link';
import SocialLinks from '../Sociallinks';
import MenuIcon from './MenuIcon';
import MobileMenu from './MobileMenu';

const Header = forwardRef(({ headerHeight, setHeaderHeight }, headerRef) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) {
      return;
    }
    if (!isMenuOpen) {
      enableBodyScroll(menuRef.current);
    } else {
      disableBodyScroll(menuRef.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isMenuOpen, menuRef]);

  useEffect(() => {
    if (!headerRef.current) {
      return;
    }
    setHeaderHeight(headerRef.current.scrollHeight);
  }, [headerRef]);

  return (
    <header>
      <div className="content" ref={headerRef}>
        <nav>
          <Link href="/">
            <a style={{ marginRight: 24 }}>Home</a>
          </Link>

          <Link href="/shows">
            <a>Shows</a>
          </Link>
        </nav>
        <SocialLinks />
        <button
          className="menubutton"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon size={36} />
        </button>
      </div>
      <MobileMenu
        headerHeight={headerHeight}
        isMenuOpen={isMenuOpen}
        ref={menuRef}
      />

      <style jsx>{`
        header {
          z-index: 10;
          position: absolute;
          width: 100%;
        }
        .content {
          position: relative;
          z-index: 2;
          display: flex;
          padding: 16px;
          align-items: center;
          justify-content: space-between;
        }
        nav {
          display: flex;
          a {
            font-size: 1.5em;
          }
          @media screen and (max-width: 700px) {
            display: none;
          }
        }
        .menubutton {
          background: none;
          color: red;
          border: none;
          display: none;
          transition: color 0.4s;
          @media screen and (max-width: 700px) {
            display: block;
          }
        }
        .menubutton:hover  {
          color: magenta;
        }
      `}</style>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;
