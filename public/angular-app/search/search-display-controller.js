angular.module('meannasdaq').controller('SearchController', SearchController);

function SearchController($route, $routeParams, $window, stockDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    // vm.title= 'MEAN Nasdaq App';
    
    
 vm.symbolSearch = function() {
     var symbol = vm.symbol;
    console.log(symbol)
     stockDataFactory.searchDisplay(symbol).then(function(response) {
        console.log("searchdisplayctrl", response);
        vm.stock = response.data[0];
        
    var postData = {
        search: vm.search,
    }
     
    console.log("symbol search is:", vm);
     
 });
}
}




