# angular-off [![Build Status](https://travis-ci.org/gdi2290/angular-off.png?branch=master)](https://travis-ci.org/gdi2290/angular-off)

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
