angular.module("jobHelper")
.controller("loginCtrl", ["$scope","$location","userService", function($scope, $location, userService){
    $scope.login = function(user){
        userService.login(user)
        .then(function(response){
            if(response.status > 199 && response.status < 300){
            $location.path("/listings");
            } else {
            $scope.message = response.message;
            }
        });
    }
}]);