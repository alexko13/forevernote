angular.module('forevernote', [
  'services',
  'note',
  'ngRoute',
  ])

.config(function($routeProvider) {
  $routeProvider
  .when('/new-note', {
    templateUrl: 'note/new-note.html',
    controller: 'NoteController'
  })
  .when('/display-notes', {
    templateUrl: 'note/display-notes.html',
    controller: 'NoteController'
  })
  .otherwise({
    redirectTo: '/display-notes'
  });
  
});
