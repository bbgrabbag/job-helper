angular.module("jobHelper")
.controller("authCtrl", ["$scope","$localStorage","userService", function($scope,$localStorage, userService){
    $scope.userService = userService;
    $scope.userName = $localStorage.user;
    $scope.logout= function(){
        userService.logout();
    }
}]);