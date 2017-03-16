angular.module("jobHelper")
.service("tokenService", ["$localStorage", function($localStorage){
    this.storeToken = function(token){
        $localStorage.token = token;
    };
    this.getToken = function(){
        return $localStorage.token;
    };
    this.removeToken = function(){
        delete $localStorage.token;
        delete $localStorage.user;
    }
}]);