angular.module('meannasdaq').controller('SearchController', SearchController);

function SearchController($route, $routeParams, $window, $location, stockDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    
 vm.symbolSearch = function() {
     var symbol = vm.symbol.toUpperCase();
     stockDataFactory.searchDisplay(symbol).then(function(response) {
        console.log("searchdisplayctrl", response);
        vm.stock = response.data[0];
        
    // var postData = {
    //     search: vm.search,
    // }
     
    // console.log("symbol search is:", vm);
    
    
        stockDataFactory.saveSearch(symbol).then(function(response) { 
            console.log("save search", response);
    }).catch(function(err) {
				console.log(err);
			});
 });
}
}

// vm.saveSearch = function(req, res, stock) {
//     //in mongoose subdocuments like reviews are held in an array
//     console.log(req.body.stock);
//     console.log(req.body.search);
    
//     console.log("save search");
//     stock.search.push({
//         search: req.body.search
//     });
    
//     stock.search.save(function(err, searchUpdated) {
//         //save runs on model instance, in this case model is 'stock'
//       console.log(stock.search);
//       if(err) {
//           res
//             .status(500)
//             .json(err)
//       } else {
//           res
//             .status(201)
//             .json(stock.search[searchUpdated.search.length-1]);
//             //getting the last search query
//       }
    
//     });

// }
