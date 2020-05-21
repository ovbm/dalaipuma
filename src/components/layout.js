import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import dalaiGIF from '../images/dalai.gif';

const Layout = ({ children }) => {
  const { background1 } = useStaticQuery(
    graphql`
      query {
        background1: file(relativePath: { eq: "dalai.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `,
  );
  return (
    <>
      <Image fluid={background1.childImageSharp.fluid} />
      <Gif src={dalaiGIF} alt="Otter dancing with a fish" />
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
    </>
  );
};

const Gif = styled.img`
  position: fixed !important;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

const Image = styled(Img)`
  position: fixed !important;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -2;
`;

export default Layout;
