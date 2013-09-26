
(function () {
  angular.injector(['ng']).injector.get('$rootScope')
      .constructor.prototype.$off = function(eventName, fn) {
        if(this.$$listeners) {
          if (arguments.length > 1) {
            var namedListeners = this.$$listeners[eventName];
            if(namedListeners) {
              for(var i = 0; i < namedListeners.length; i++) {
                if(namedListeners[i] === fn) {
                  namedListeners.splice(i, 1);
                }
              }
            }
          } else {
            this.$$listeners[eventName] === null;
          }
        }
      }
}());
