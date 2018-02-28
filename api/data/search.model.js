var mongoose = require('mongoose');

// var commentSchema = new mongoose.Schema({
//     comment: {
//         type: String,
//         required: true
//     },
//   createdOn: {
//         type: Date,
//         "default": Date.now
//   }
//     });
    
var searchSchema = new mongoose.Schema({
   Symbol:{
       type: String,
       required: true},
   Name: {
       type: String,
       required: true},
   LastSale: String,
   Sector: String,
   StockUrl: String
});
//   comments: [commentSchema]
// });

mongoose.model('Search', searchSchema);