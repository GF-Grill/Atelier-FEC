import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const DescriptionContainer = styled.div`
  border: 2px;
  border-right-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const OverviewSlogan = styled.p`
  text-align: center;
  padding-bottom: 2px;
  font-weight: bold;
`;

const OverviewDescriptionContainer = styled.p`
  text-align: center;
  padding-bottom: 2px;
`;

export default function ProductDescription(props) {
  const { slogan, description } = props;

  return (
    <DescriptionContainer>
      <OverviewSlogan>
        <em>{ slogan }</em>
      </OverviewSlogan>
      <OverviewDescriptionContainer>
        { description }
      </OverviewDescriptionContainer>
    </DescriptionContainer>
  );
}

ProductDescription.propTypes = {
  slogan: PropTypes.string,
  description: PropTypes.string,
};

ProductDescription.defaultProps = {
  slogan: '',
  description: '',
};
