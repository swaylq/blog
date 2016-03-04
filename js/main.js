/* global $ */
/* global angular */
/* global articles */
/* global NProgress */
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
        $urlRouterProvider.otherwise('/about');
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
}]);

blog.controller('ContactCtrl', ['$scope', function ($scope){
    console.log('contact controller');
}]);

blog.controller('ArticleCtrl', ['$scope', '$stateParams', function ($scope, $stateParams){
    console.log('article controller');
    console.log($stateParams.articleID);
}]);

blog.directive('markdownData', ['$http', function ($http){
    return {
        restrict: 'EA',
        link: function (scope, element, attr) {
            var file = attr.markdownData;
            $http.get('/markdowns/' + file).success(function (data){
                htmlContent = markdown.toHTML(data);
                element.html(htmlContent);
            })
        }
    }
}])