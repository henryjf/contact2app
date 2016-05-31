function ListController($scope, $http, URL) {

//initializes list page
    init();
//api request to return all contacts listed in the data
  function init() {
    $http.get(URL).then ( (res) =>{
      $scope.allContacts= res.data;
    });
  }

}
ListController.$inject = ['$scope', '$http', 'URL']
export { ListController };
