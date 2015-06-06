/* global $ */
/* global angular */
/* global articles */
/* global NProgress */
var blog = angular.module('blog',[]);

$(document).ready(function (){
    console.log('start');
    NProgress.start();
});

$(window).load(function (){
    console.log('end');
    NProgress.done();
});

blog.controller('MainCtrl', ['$scope', '$anchorScroll', '$location', function ($scope, $anchorScroll, $location) {
    $scope.articles = articles; 
    $scope.articles.forEach(function (one){
        one.height = '80px';
        one.isOpen = false;
    });
    $scope.open = function (index) {
        $scope.articles.forEach(function (one, i){
            if (i != index) {
                one.height = '80px';
                one.isOpen = false;
            } else {
                one.height = one.height == '80px' ? 'auto' : '80px';
                one.isOpen = one.height == '80px' ? false : true;
                if (one.height == 'auto') {
                    $location.hash('article-' + index);
                    $anchorScroll();
                }
            }
        });
    }
}]);

blog.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);