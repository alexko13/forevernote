angular.module('forevernote', [
  'services',
  'note',
  'notebook',
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
  .when('/new-notebook', {
    templateUrl: 'notebook/new-notebook.html',
    controller: 'NotebookController'
  })
  .when('/display-notebooks', {
    templateUrl: 'notebook/display-notebooks.html',
    controller: 'NotebookController'
  })
  .otherwise({
    redirectTo: '/display-notebooks'
  });
  
});
