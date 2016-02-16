angular.module('note', [])

.controller('NoteController', function ($scope, $http) {
  $scope.note = '';
  
  $scope.saveNote = function() {
    console.log('Saving Note ...');
    console.log($scope.note);

    $http({
      method: 'POST',
      url: '/api/note',
      data: { test: 'test' }
    });

  };
});
