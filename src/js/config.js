function config ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

//routes for each page and which controller is attached 
  $stateProvider
    .state('list', {
      url: '/',
      templateUrl: 'templates/list.tpl.html',
      controller: 'ListController'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })
    .state('single', {
      url: '/single/:contactId',
      templateUrl: 'templates/single.tpl.html',
      controller: 'SingleController'
    })
}
config.$inject = ['$stateProvider', '$urlRouterProvider']
export { config };
