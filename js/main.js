require('../sass/base.scss');
var articles = require('./article.js');

$(document).ready(function () {
  NProgress.start();
});

$(window).on('load', function () {
  NProgress.done();
});

var blog = angular.module('blog', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('work', {
        url: '/work',
        templateUrl: 'templates/work.html',
        controller: 'WorkCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'templates/blog.html',
        controller: 'BlogCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl'
      })
      .state('article', {
        url: '/article/:articleID',
        templateUrl: '/templates/article.html',
        controller: 'ArticleCtrl'
      });
    $urlRouterProvider.otherwise('/blog');
  });

blog.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.nav = $location.path();
  $scope.goto = function (path) {
    $location.path(path);
    $scope.nav = '/' + path;
  }
}]);

blog.controller('WorkCtrl', ['$scope', function ($scope) {
  console.log('work controller');
}]);

blog.controller('AboutCtrl', ['$scope', function ($scope) {
  console.log('about controller');
}]);

blog.controller('BlogCtrl', ['$scope', function ($scope) {
  console.log('blog controller');

  $scope.types = ['Technical articles', 'Literary notes'];
  $scope.currentType = 'Technical articles';
  $scope.articles = articles;

  $scope.showArticle = function (article) {
    if (article.url != '') {
      window.location.href = article.url;
    } else {
      window.location.href = '/#/article/' + article.id;
    }
  }
}]);

blog.controller('ContactCtrl', ['$scope', function ($scope) {
  console.log('contact controller');
}]);

blog.controller('ArticleCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
  var id = $stateParams.articleID
  articles.forEach(function (article) {
    if (article.id == Number(id)) {
      $scope.article = article;
    }
  });
}]);

blog.directive('markdownData', ['$http', function ($http) {
  return {
    restrict: 'EA',
    scope: {
      file: '=file'
    },
    link: function (scope, element, attr) {
      var file = attr.markdownData;
      $http.get('/markdowns/' + file).success(function (data) {
        htmlContent = marked(data);
        element.html(htmlContent);
      })
    }
  }
}])
