var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
   createdOn: {
        type: Date,
        "default": Date.now
   }
    });
    
var stockSchema = new mongoose.Schema({
   Symbol:{
       type: String,
       required: true},
   Name: {
       type: String,
       required: true},
   LastSale: String,
   Ssector: String,
   StockUrl: String,
  comments: [commentSchema]
});


    
// var roomSchema= new mongoose.Schema({
//         type: String,
//         number: Number,
//         description: String,
//         photos: [String],
//         price: Number
// });


mongoose.model('Stock', stockSchema);