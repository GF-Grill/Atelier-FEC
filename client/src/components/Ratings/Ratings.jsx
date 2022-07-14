import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import IdContext from '../Context';
import Stars from './Stars';
// import Comfort from './Comfort';
import ReviewList from './ReviewList';
import MoreReview from './MoreReview';
import AddReview from './AddReview';

// require('dotenv').config();

function Ratings() {
  // WORK: const productId = useContext(IdContext);
  // ERROR: const contextType = IdContext;
  const { productId, setProductId } = useContext(IdContext);
  // reviews: array of objects
  const [reviews, setReviews] = useState([]);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [sort, setSort] = useState('relevant');
  const [comfort, setComfort] = useState({});

  // send GET all reviews request when page is rendered
  useEffect(() => {
    // axios.get(`http://localhost:${process.env.PORT}/reviews`, {
    axios.get('http://localhost:7777/reviews', {
      params: {
        product_id: productId,
        sort,
      },
    })
      .then((res) => {
        console.log('SORT NOT CHANGED, SORT', sort);
        console.log('IN RATINGS, GET ALL REVIEWS SUCCESS!', res);
        setReviews(res.data.results);
        setDisplayedReviews(res.data.results.slice(0, 2));
      })
      .catch((err) => {
        console.log('SORT NOT CHANGED');
        console.log('IN RATINGS, GET ALL REVIEWS FAILED', err);
      });
    axios.get('http://localhost:7777/reviews/meta', {
      params: {
        product_id: productId,
      },
    })
      .then((res) => {
        console.log('SORT NOT CHANGED, SORT', sort);
        console.log('IN RATINGS, GET META SUCCESS!', res.data.characteristics);
        setComfort(res.data.characteristics);
      })
      .catch((err) => {
        console.log('SORT NOT CHANGED');
        console.log('IN RATINGS, GET META FAILED', err);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:7777/reviews', {
      params: {
        product_id: productId,
        sort,
      },
    })
      .then((res) => {
        console.log('SORT CHANGED, SORT', sort);
        console.log('IN RATINGS, GET ALL REVIEWS SUCCESS!', res);
        setReviews(res.data.results);
        setDisplayedReviews(res.data.results.slice(0, 2));
      })
      .catch((err) => {
        console.log('SORT CHANGED');
        console.log('IN RATINGS, GET ALL REVIEWS FAILED', err);
      });
  }, [sort]);

  return (
    <div>
      <header>This is Ratings</header>
      <Stars reviews={reviews} />
      {/* <Comfort comfort={comfort} /> */}
      <ReviewList
        reviews={reviews}
        displayedReviews={displayedReviews}
        sort={sort}
        setSort={setSort}
      />
      <MoreReview
        reviews={reviews}
        displayedReviews={displayedReviews}
        setDisplayedReviews={setDisplayedReviews}
      />
      <AddReview />
    </div>
  );
}

export default Ratings;
