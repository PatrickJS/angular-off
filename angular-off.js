(function () {
  angular.injector(['ng']).injector.get('$rootScope')
      .constructor.prototype.$off = function(eventName, fn) {
        if(this.$$listeners) {
          if (arguments.length > 1) {
            var namedListeners = this.$$listeners[eventName];
            if(namedListeners) {
              namedListeners.splice(namedListeners.indexOf(fn), 1);
            }
          } else {
            this.$$listeners[eventName] = null;
          }
        } // end if $$listeners
      }; //end $off
}());
