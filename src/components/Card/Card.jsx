import React from 'react';
import S from './styledCard';

const Card = (
  // eslint-disable-next-line react/prop-types
  { roundPrice, numOfPlayers } // featureActivated
) => (
  <S.CardWrapper>
    <S.CardBody>
      <S.H2Title>{roundPrice}</S.H2Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <S.H5Title>{`${numOfPlayers}/10`}</S.H5Title>
    </S.CardBody>
  </S.CardWrapper>
);

export default Card;
