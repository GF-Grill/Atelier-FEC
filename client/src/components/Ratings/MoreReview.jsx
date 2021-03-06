import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

function MoreReview({ filteredReviews, displayedReviews, setDisplayedReviews }) {
  let button;
  if (filteredReviews.length > displayedReviews.length) {
    button = (
      <Button
        type="button"
        onClick={() => setDisplayedReviews(filteredReviews.slice(0, displayedReviews.length + 2))}
      >
        MORE REVIEWS
      </Button>
    );
  }

  return (
    <div>
      { button }
    </div>
  );
}

MoreReview.propTypes = {
  filteredReviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  displayedReviews: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  setDisplayedReviews: PropTypes.func,
};

MoreReview.defaultProps = {
  filteredReviews: [],
  displayedReviews: [],
  setDisplayedReviews: (e) => e,
};

export default MoreReview;
