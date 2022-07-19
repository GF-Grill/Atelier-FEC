import React, { useState } from 'react';
import styled from 'styled-components';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import ThumbnailImage from './ThumbnailImage';

const ThumbnailContainer = styled.div`
  width: 10%;
  padding: 30px 0px 30px 10px;
  position: relative;
  background-color: rgb(248,248,248);
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const SliderIconUp = styled(MdExpandLess)`
height: 2em;
width: 2em;
position: absolute;
top: 5px;
background: rgb(248,248,248);
border-radius: 50%;
opacity: 0.5;
&:hover {
  opacity: 1;
}
`;

const SliderIconDown = styled(MdExpandMore)`
height: 2em;
width: 2em;
position: absolute;
bottom: 5px;
background: rgb(248,248,248);
border-radius: 50%;
opacity: 0.5;
&:hover {
  opacity: 1;
}
`;

export default function ThumbnailCarousel(props) {
  const { currentIndex, setIndex, photos } = props;

  const slideDown = () => {
    console.log('You clicked down');
  };

  return (
    <ThumbnailContainer>

      {currentIndex > 0 && <SliderIconUp />}

      {photos.map((image, index) => {
        return <ThumbnailImage
          image={image}
          index={index}
          key={image.thumbnail_url}
          currentIndex={currentIndex}
          setIndex={setIndex} />;
      })}

      {/* adjust this to show only 7 */}
      {currentIndex < photos.length - 1 && <SliderIconDown onClick={slideDown} />}

    </ThumbnailContainer>
  );
}
