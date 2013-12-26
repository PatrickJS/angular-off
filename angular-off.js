!function(module, angular, undefined) {
  'use strict';

  angular.module('ngOff', ['angular-off']);

  /* Config */
  module.config(['$provide', function($provide) {

    function ngOff(eventName, fn) {
      if (this.$$listeners) {
        if (arguments.length > 1) {
          var namedListeners = this.$$listeners[eventName];
          if (namedListeners) {
            namedListeners.splice(namedListeners.indexOf(fn), 1);
          }
        } else {
          this.$$listeners[eventName] = null;
        } // end args > 1
      } // end if $$listeners
    }

    $provide.decorator('$rootScope', ['$delegate', function($delegate) {
      Object.defineProperty($delegate.constructor.prototype, '$off', {
        value: ngOff,
        enumerable: false
      });
      return $delegate;
    }]);

  }]);

}(angular.module('angular-off', []), angular);
