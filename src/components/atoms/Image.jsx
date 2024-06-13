import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2vh;
`;

function Image({ src, alt }) {
  return <StyledImage src={src} alt={alt} />;
}

export default Image;