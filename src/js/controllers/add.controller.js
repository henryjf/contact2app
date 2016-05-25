function AddController ($scope, $http, URL, $state) {

  $scope.addContactInfo = function(contactObj) {

      $http.post(URL, contactObj).then((res) => {
        // console.log(res);

          $state.go('list');
      });
    }
}

AddController.$inject = ['$scope', '$http', 'URL', '$state'];
export { AddController };
