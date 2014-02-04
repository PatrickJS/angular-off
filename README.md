# angular-off [![Build Status](https://travis-ci.org/gdi2290/angular-off.png?branch=master)](https://travis-ci.org/gdi2290/angular-off)

Providing the method $off for $rootScope in Angular.js

#How do I add this to my project?

You can download angular-momentjs by:

* (prefered) Using bower and running `bower install angular-momentjs --save`
* Using npm and running `npm install angular-momentjs --save`
* Downloading it manually by clicking [here to download development unminified version](https://raw.github.com/gdi2290/angular-momentjs/master/angular-momentjs.js)


````html
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.10/angular.min.js"></script>
<script src="app/bower_components/angular-off/angular-off.js"></script>
<script>
  angular.module('YOUR_APP', [
    'controllers'
  ]);

  angular.module('controllers', [])
    .controller('MainCtrl', function() {

      $scope.$on('$routeChangeError', function alertEvent(event, current, prevous, rejection) {
        alert('Filed to change routes!');
      });

      $scope.button = function() {
       $scope.$off('$routeChangeError', alertEvent);
      };

    });
</script>

````
