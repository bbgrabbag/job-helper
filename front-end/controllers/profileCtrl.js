angular.module("jobHelper")
.controller("profileCtrl", ["$scope", "userService", function($scope, userService){
    $scope.editProfile =function(user){
        console.log(user,userService.user._id);
    }
    $scope.removeUser = function(){
        console.log(userService.user);
    }
}]);