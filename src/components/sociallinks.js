import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.between ? 'space-between' : 'space-evenly'};
`;

export default function Sociallink({ white, between }) {
  return (
    <Container between={between}>
      <a
        href="https://www.instagram.com/dalai_puma/"
        aria-label="stagram link"
      >
        <FontAwesomeIcon
          size="3x"
          color='white'
          icon={faInstagram}
        />
      </a>
    </Container>
  );
}
