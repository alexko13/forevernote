angular.module('forevernote', [
  'note',
  'ngRoute'
  ])
.config(function($routeProvider) {
  $routeProvider
  .when('/new-note', {
    templateUrl: 'note/new-note.html',
    controller: 'NoteController'
  })
  .otherwise({
    redirectTo: '/new-note'
  });
});
