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

blog.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.articles = articles; 
}]);

blog.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);