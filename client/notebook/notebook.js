angular.module('notebook', [])

.controller('NotebookController', function ($scope, $location, Notebook) {
  $scope.allNotebooks = [];
  $scope.notebook = {
    title: ''
  };

  $scope.useNotebook = function(notebook) {
    Notebook.currentNotebook = notebook;
    $location.url('/display-notes');
  };
  
  $scope.saveNotebook = function() {
    Notebook.saveNotebook($scope.notebook)
    .then(function(resp) {
      console.log(resp);
      Notebook.currentNotebook = resp.data;
      $location.url('/display-notes');
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
