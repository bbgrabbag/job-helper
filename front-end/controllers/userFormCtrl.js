angular.module("jobHelper")
.controller("userFormCtrl", ["$scope","httpService","userService","$location", function($scope, httpService,userService, $location, $anchorScroll){
    if(!userService.isAuthenticated())$location.path("/login");
    $scope.submitForm = function(isValid, newPosting){
        if(isValid){
            httpService.postNew("http://localhost:8000/api/postings", newPosting)
            .then(function(posted){
                $scope.newPosting = {};
            });
            $location.path("/listings");
            
        }
    };
}]);