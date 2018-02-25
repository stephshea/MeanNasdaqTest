var mongoose = require('mongoose');
var Stock = mongoose.model('Stock')







app.controller('searchCtrl',function($scope,$http){
    $http.get('data.json').success(function(data, status, headers, config) {
        $scope.items = data.data;
    }).error(function(data, status, headers, config) {
        console.log("No data found..");
  });
});


angular.module('meannasdaq').controller(SearchStockController', SearchController);

function StockController($route, $routeParams, $window, stockDataFactory, AuthFactory, jwtHelper) {
    var vm = this;
    // vm.title= 'MEAN Nasdaq App';
    var id = $routeParams.id;
    stockDataFactory.stockDisplay(id).then(function(response) {
         console.log(response);
        vm.stock = response.data;
    });