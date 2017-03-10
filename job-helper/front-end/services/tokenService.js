angular.module("jobHelper")
.service("tokenService", ["$localStorage", function($localStorage){
    this.storeToken = function(token){
        $localStorage.token = token;
    };
    this.getToken = function(token){
        return $localStorage.token;
    };
    this.removeToken = function(token){
        delete $localStorage.token;
        delete $localStorage.user;
    }
}]);