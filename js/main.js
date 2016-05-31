var app=angular.module("frankrossManagement",['ngMaterial'])
                .controller('loginCtrl', function(){

                })
                .controller('dashboardCtrl', function(){

                })
                .controller('userProfileCtrl', function($scope){
                    $scope.name = "Debayan Sen"
                })
                .controller('BasicDemoCtrl', function DemoCtrl($mdDialog) {
                    var originatorEv;
                    this.openMenu = function($mdOpenMenu, ev) {
                      originatorEv = ev;
                      $mdOpenMenu(ev);
                    };
                    this.notificationsEnabled = true;
                    this.toggleNotifications = function() {
                      this.notificationsEnabled = !this.notificationsEnabled;
                    };
                    this.redial = function() {
                      $mdDialog.show(
                        $mdDialog.alert()
                          .targetEvent(originatorEv)
                          .clickOutsideToClose(true)
                          .parent('body')
                          .title('Suddenly, a redial')
                          .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
                          .ok('That was easy')
                      );
                      originatorEv = null;
                    };
                    this.checkVoicemail = function() {
                      // This never happens.
                    };
                })
                ;

var user = {
    "empID":"EFRL4984",
    "name":"Debayan Sen",
    "position":"Software Engineer",
    "doj":"01-March-2016"
}
