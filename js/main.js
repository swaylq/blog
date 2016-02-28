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

var blog = angular.module('blog',['ngAnimate']);

blog.controller('MainCtrl', ['$scope', '$anchorScroll', '$location', '$animate', function ($scope, $anchorScroll, $location, $animate) {
    $scope.articles = articles; 
    $scope.articles.forEach(function (one){
        one.height = '80px';
        one.isOpen = false;
    });
    $scope.toggle = function (index) {
        $scope.articles[index].isOpen = !$scope.articles[index].isOpen;
        if (!$scope.articles[index].isOpen) {
            $location.hash('article-' + index);
            $anchorScroll();
        }
    }
  
}]);

blog.directive('articleContent', ['$http', function ($http){
    return {
        restrict: 'EA',
        link: function (scope, element, attr) {
            var file = attr.articleContent;
            $http.get('/articles/' + file).success(function (data){
                htmlContent = markdown.toHTML(data);
                element.html(htmlContent);
            })
        }
    }
}])

blog.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);