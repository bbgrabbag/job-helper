angular.module("jobHelper")
.controller("authCtrl", ["$scope","$localStorage","userService", function($scope,$localStorage, userService){
    $scope.userService = userService;
    $scope.user = $localStorage.user;
    $scope.logout= function(){
        userService.logout();
    }
}]);