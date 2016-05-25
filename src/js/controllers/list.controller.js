function ListController($scope, $http, URL, $stateParams, $state) {

  function init() {
    $http.get(URL + $stateParams.contactId).then ( (res) =>{
      $scope.allContacts= res.data;
    });
  }

  // $scope.deleteContact = function (contactId) {
  //   $http.delete(URL + contactId).then( (res) => {
  //     $state.go('single');
  //   });
  // }
}
ListController.$inject = [ '$scope', '$http', 'URL', '$stateParams', '$state']
export { ListController };
