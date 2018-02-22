var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    //  name : {
    //     type: String,
    //     required: true
    // },
    // rating: {
    //     type: Number,
    //     min: 0,
    //     max: 5,
    //     required: true
    // },
    Comment: {
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
   sector: String,
   StockUrl: String,
  Comments: [commentSchema]
});


    
// var roomSchema= new mongoose.Schema({
//         type: String,
//         number: Number,
//         description: String,
//         photos: [String],
//         price: Number
// });


mongoose.model('Stock', stockSchema);