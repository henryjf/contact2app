function SingleController ($scope, $http, URL, $stateParams, $state) {

  init();

  function init() {

    $http.get(URL + $stateParams.contactId).then( (res) => {
      $scope.singleContact = res.data;
    });
  }
  $scope.deleteContact = function (contactId) {
    $http.delete(URL + contactId).then( (res) =>{
      $state.go('list')
    });
  }
}
SingleController.$inject = ['$scope', '$http', 'URL', '$stateParams', '$state'];
export { SingleController };
