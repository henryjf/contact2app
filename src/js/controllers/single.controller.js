function SingleController ($scope, $http, URL, $stateParams, $state) {

//initializes page display from the api
  init();

  function init() {
// api request to return only contact info associated w specific id
    $http.get(URL + $stateParams.contactId).then( (res) => {
      $scope.singleContact = res.data;
    });
  }

  //function to delete contact and then reroute to list page
  $scope.deleteContact = function (contactId) {
    $http.delete(URL + contactId).then( (res) =>{
      $state.go('list')
    });
  }
}
SingleController.$inject = ['$scope', '$http', 'URL', '$stateParams', '$state'];
export { SingleController };
