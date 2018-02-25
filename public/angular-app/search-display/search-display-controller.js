angular.module('meannasdaq').controller('SearchController', SearchController);



function StockController($route, $routeParams, $window, stockDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    // vm.title= 'MEAN Nasdaq App';
    var id = $routeParams.id;
    stockDataFactory.stockDisplay(id).then(function(response) {
         console.log(response);
        vm.stock = response.data;
    });