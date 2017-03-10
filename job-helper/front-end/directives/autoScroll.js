angular.module("jobHelper")
.directive("autoScroll", ["$location", "$anchorScroll", function($location, $anchorScroll){
    function linkFn(scope, element, attrs){
      $location.hash(attrs.scrollToLast);
      $anchorScroll();
  }
  
  return {
    restrict: 'AE',
    scope: {
      
    },
    link: linkFn
  };
}]);