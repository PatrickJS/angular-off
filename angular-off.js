;(function(module, angular, undefined) {
'use strict';

angular.module('ngOff', ['angular-off']);

/* Config */
module.config(['$provide', function($provide) {
  $provide.decorator('$rootScope', ['$delegate', function($delegate) {

    Object.defineProperty($delegate.constructor.prototype, '$off', {
      value: function(eventName, fn) {
        if (this.$$listeners) {
          if (arguments.length > 1) {
            var namedListeners = this.$$listeners[eventName];
            if (namedListeners) {
              namedListeners.splice(namedListeners.indexOf(fn), 1);
            }
          } else {
            this.$$listeners[eventName] = null;
          }
        } // end if $$listeners
      }, // end value
      enumerable: false
    });

    return $delegate;
  }]);
}]);

}(angular.module('angular-off', []), angular));
