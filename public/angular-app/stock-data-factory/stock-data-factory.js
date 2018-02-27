angular.module('meannasdaq').factory('stockDataFactory', stockDataFactory);


// myApp.factory('SearchService', function() {
//     var SearchService;
//     SearchService = {};

//     // The array that will contain search results
//     SearchService.arrSearchResults = [];

//     return SearchService;
//   }
// );
function stockDataFactory($http) {
    return {
        stockList: stockList,
        stockDisplay: stockDisplay,
        postComment: postComment
    };
    
    function stockList() {
        return $http.get('/api/stocks').then(complete).catch(failed);
    }
    // function stockList() {
    //     return $http.get('/api/stocks?count=100').then(complete).catch(failed);
    // }
    
    //  function stockListAll() {
    //     return $http.get('/api/stocks').then(complete).catch(failed);
    // }
    function stockDisplay(id) {
        return $http.get('/api/stock/' + id).then(complete).catch(failed);
    }
    
    function postComment(id, comment) {
        return $http.post('/api/stock/' + id + '/comments', comment).then(complete).catch(failed);
    }
    
    function postSearch() {
        
    }
    
    function complete(response) {
        return response;
    }
    
    function failed(error) {
        console.log(error.statusText);
    }
}