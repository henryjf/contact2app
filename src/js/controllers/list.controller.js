function ListController($scope, $http, URL) {

    init();

  function init() {
    $http.get(URL).then ( (res) =>{
      $scope.allContacts= res.data;
    });
  }

}
ListController.$inject = ['$scope', '$http', 'URL']
export { ListController };
