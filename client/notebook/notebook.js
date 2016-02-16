angular.module('notebook', [])

.controller('NotebookController', function ($scope, $location, Notebook) {
  $scope.allNotebooks = [];
  $scope.notebook = {
    title: ''
  };
  
  $scope.saveNotebook = function() {
    Notebook.saveNotebook($scope.notebook)
    .then(function(resp) {
      console.log(resp);
      $location.url('/display-notebooks');
    })
    .catch(function(err) {
      console.error(err);
    });
  };

  $scope.getNotebooks = function() {
    Notebook.getNotebooks()
    .then(function(resp) {
      console.log(resp);
      $scope.allNotebooks = resp.data;
    })
    .catch(function(err) {
      console.error(err);
    });
  };

});
