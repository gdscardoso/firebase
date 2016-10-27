(function () {
    "use strict";

    angular.module('app', ['ngMaterial']);
    
    angular.module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$scope', '$mdSidenav'];
     
    function loginController($scope, $mdSidenav) {
        var vm = this;
        vm.isOpen  = false;
        vm.open = open;
        vm.close = close;
        
        function open() {
            $mdSidenav('sidenav').open();
        }
        
        function close() {
            $mdSidenav('sidenav').close();
        }
    }

})();