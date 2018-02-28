angular.module('meannasdaq').controller('SearchController', SearchController);

function SearchController($route, $routeParams, $window, stockDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    // vm.title= 'MEAN Nasdaq App';
    var symbol = $routeParams.Symbol;
    stockDataFactory.searchDisplay(symbol).then(function(response) {
         console.log(response);
        vm.stock = response.data;
 });
}



// vm.addSearch = function() {
//     var postData = {
//         search: vm.search
//     }
//     };
