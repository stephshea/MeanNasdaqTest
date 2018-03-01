var mongoose = require('mongoose');
var Search = mongoose.model('Search');

module.exports.getOneSymbol = function(req, res) {
var symbol = req.params.stock.Symbol;
    // var thisStock = stockData(stockId);
    //can stockId be symbol?
    console.log("GET stockSymbol", symbol);
Search
        .findById(symbol)
        .exec(function(err, doc) {
             var response = {
                status : 200,
                message: doc
            };
            if(err) {
            console.log("Error finding stock symbol");
            response.status = 500;
            response.message = err;
                
            } else if(!doc) {
                response.status = 404;
                response.message = {
                        "message" : "Stock Symbol not found"
                };
            }     
            res
                .status(response.status)
                .json(response.message);
        });
};

var _doSearch = function(req, res, stock) {
    //in mongoose subdocuments like reviews are held in an array
    console.log(req.body.search);
    
    
    stock.search.push({
        search: req.body.search
    });
    
    stock.search.save(function(err, searchUpdated) {
        //save runs on model instance, in this case model is 'stock'
      console.log(stock.search);
      if(err) {
          res
            .status(500)
            .json(err)
      } else {
          res
            .status(201)
            .json(stock.search[searchUpdated.search.length-1]);
            //getting the last search query
      }
        
    });
    
};
