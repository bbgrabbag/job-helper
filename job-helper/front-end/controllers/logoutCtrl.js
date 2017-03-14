angular.module("jobHelper")
.controller("logoutCtrl", ["$scope","$localStorage","userService", function($scope,$localStorage, userService){
    $scope.userService = userService;
    $scope.logout= function(){
        userService.logout();
    }
}]);