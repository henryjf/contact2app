function AddController ($scope, $http, URL, $state) {

//adds contact info to database and then sends user to list page
  $scope.addContactInfo = function(contactObj) {
      $http.post(URL, contactObj).then((res) => {

          $state.go('list');
      });
    }
}

AddController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddController };
