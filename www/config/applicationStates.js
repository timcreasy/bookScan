bookScan.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('index',{
    url:'/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .state('foundbookview', {
    url:'foundbookview',
    templateUrl: 'views/foundBookView.html',
    controller: 'foundBookCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
