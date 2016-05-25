function SingleController ($scope, $http, URL) {

  init();

  function init() {

    $http.get(URL).then((res) => {
      $scope.allContacts = res.data;
    });
  }
}
SingleController.$inject = ['$scope', '$http', 'URL'];
export { SingleController };
