# angular-off

```javascript
angular.module('controllers', [])
  .controller('MainCtrl', function() {
  
    $scope.$on('$routeChangeError', function(event, current, prevous, rejection) {
      alert('Filed to change routes!');
    });
    
    $scope.button = function() {
     $scope.$off('$routeChangeError');
    };
    
  });

```
