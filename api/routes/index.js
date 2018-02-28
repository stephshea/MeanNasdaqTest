var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');
var ctrlComments = require('../controllers/comments.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');
var ctrlSearch = require('../controllers/search.controllers.js');
router
  .route('/stocks')
  .get(ctrlStocks.stocksGetAll);

router
    .route('/stock/:stockId')
    .get(ctrlStocks.stocksGetOne);
    // .put(ctrlStocks.stocksUpdateOne);
    //patch updates just one


    
// Comment routes
router
  .route('/stock/:stockId/comments')
  .get(ctrlComments.commentsGetAll)
//must be logged in to post comments
  .post(ctrlComments.commentsAddOne);
  // .post(ctrlUsers.authenticate, ctrlComments.commentsAddOne);
  
router
    .route('/stock/:stockId/comments/:commentId')
    //creating a url route for data
    .get(ctrlComments.commentsGetOne)
    .put(ctrlComments.commentsUpdateOne);
//     .delete(ctrlComments.commentsDeleteOne);

//search route
router
    .route('/search/:Symbol')
    //or symbol, Symbol
    .get(ctrlSearch.getOneSymbol);
    
    //Authentication
router
  .route('/users/register')
  .post(ctrlUsers.register);

router
  .route('/users/login')
  .post(ctrlUsers.login);  

module.exports = router;