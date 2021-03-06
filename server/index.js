/* eslint-disable camelcase */
// see .env for environment config variable
require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const route = require('./routes');

const app = express();
// Set up static service of assets;
// const route = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.static(path.join(__dirname, '../client/dist')));

// Add app-wide middleware
// app.get('/qa/questions', (req, res) => {
//   const { product_id } = req.params;
//   getQuestions(product_id, (cb) => {
//     res.send(cb);
//   });
// });

const PORT = process.env.PORT || 3000;

app.get('/products', route.getProducts);
app.get('/products/:id', route.getProductInfo);
app.get('/products/:id/styles', route.getProductStyles);
app.get('/products/:id/related', route.getRelatedProduct);
app.get('/qa/questions', route.getQuestions);
// this is how to handle path parameters. No need ':' in postman
app.get('/qa/questions/:qid/answers', route.getAnswers);
app.put('/qa/answers/:answerId/helpful', route.putHelpfulAnswers);
app.put('/qa/questions/:qid/helpful', route.putHelpfulQuestion);
app.post('/qa/questions', route.postQuestion);
app.post('/qa/questions/:qid/answers', route.postAnswer);
app.put('/qa/answers/:answerId/report', route.putReportAnswer);
app.get('/reviews', route.getReviews);
app.get('/reviews/meta', route.getReviewMeta);
app.put('/reviews/:id/helpful', route.markReviewHelpful);
app.put('/reviews/:id/report', route.reportReview);
app.post('/reviews', route.postReview);

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
