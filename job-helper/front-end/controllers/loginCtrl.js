angular.module("jobHelper")
.controller("loginCtrl", ["$scope","$location","userService", function($scope, $location, userService){
    $scope.login = function(user){
        userService.login(user)
        .then(function(response){
            console.log(response);
            if(response.status > 200 && response.status < 299){
            $location.path("/listings");
            } else {
            console.log(response);
            $scope.message = response.message;
            }
        });
    }
}]);