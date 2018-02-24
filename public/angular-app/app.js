angular.module('meannasdaq', ['ngRoute', 'angular-jwt']).config(config).run(run);
function config($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
    
    $routeProvider
        .when('/', {
        templateUrl: 'angular-app/main/main.html',
        controller: StocksController,
        controllerAs: 'vm',
        access: {
            restricted: false
        }
        })
        
       .when('/stocks', {
        templateUrl: 'angular-app/stock-list/stocks.html',
        controller: StocksController,
        controllerAs: 'vm',
        access: {
                restricted: false
            }
        })
        
        .when('/stock/:id', {
              templateUrl: 'angular-app/stock-display/stock.html',
            controller: StockController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        
           .when('/register', {
              templateUrl: 'angular-app/register/register.html',
            controller: RegisterController,
            controllerAs: 'vm',
            access: {
                restricted: false
            }
        })
        
           .when('/links', {
              templateUrl: 'angular-app/links/links.html',
              access: {
                restricted: true
            }
        })
        
         .otherwise({
              redirectTo: '/'
        });
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}