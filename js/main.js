/* global $ */
/* global angular */
/* global articles */
/* global NProgress */
var articles = [
    {
        id: 0,
        title: 'Try Git 0x00',
        createdAt: 'Mar 5, 2016',
        summary: 'Git is a widely used source code management system for software development. These articles will lead you to learn it as fast as possible.',
        file: 'try-git-0.md',
        type: 'Technical articles'
    },
    {
        id: 1,
        title: 'Try Git 0x01',
        createdAt: 'Mar 5, 2016',
        summary: 'Git is a widely used source code management system for software development. These articles will lead you to learn it as fast as possible.',
        file: 'try-git-1.md',
        type: 'Technical articles'
    },
    {
        id: 2,
        title: 'Try Git 0x02',
        createdAt: 'Mar 5, 2016',
        summary: 'Git is a widely used source code management system for software development. These articles will lead you to learn it as fast as possible.',
        file: 'try-git-2.md',
        type: 'Technical articles'
    },
    {
        id: 3,
        title: 'Try Git 0x03',
        createdAt: 'Mar 5, 2016',
        summary: 'Git is a widely used source code management system for software development. These articles will lead you to learn it as fast as possible.',
        file: 'try-git-3.md',
        type: 'Technical articles'
    }
];

$(document).ready(function (){
    NProgress.start();
});

$(window).load(function (){
    NProgress.done();
});

var blog = angular.module('blog', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
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
    
blog.controller('NavCtrl', ['$scope', '$location', function ($scope, $location){
    $scope.nav = $location.path();
    console.log($scope.nav);
    $scope.goto = function (path) {
        $location.path(path);
        $scope.nav = '/' + path;
    }
}]);

blog.controller('WorkCtrl', ['$scope', function ($scope){
    console.log('work controller');
}]);

blog.controller('AboutCtrl', ['$scope', function ($scope){
    console.log('about controller');
}]);

blog.controller('BlogCtrl', ['$scope', function ($scope){
    console.log('blog controller');
    
    $scope.types = ['Technical articles', 'Literary notes'];
    $scope.currentType = 'Technical articles';
    $scope.articles = articles;
}]);

blog.controller('ContactCtrl', ['$scope', function ($scope){
    console.log('contact controller');
}]);

blog.controller('ArticleCtrl', ['$scope', '$stateParams', function ($scope, $stateParams){
    var id = $stateParams.articleID
    articles.forEach(function (article){
        if (article.id == Number(id)) {
            $scope.article = article;
        }
    });
}]);

blog.directive('markdownData', ['$http', function ($http){
    return {
        restrict: 'EA',
        scope: {
          file: '=file'
        },
        link: function (scope, element, attr) {
            var file = attr.markdownData;
            console.log(file);
            $http.get('/markdowns/' + file).success(function (data){
                htmlContent = marked(data);
                element.html(htmlContent);
            })
        }
    }
}])