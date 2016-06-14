angular.module("frankrossManagement",['ngMaterial'])
// angular.module("frankrossManagement",['ngMaterial','ngRoute','hrModule','empModule'])

angular.module('frankrossManagement')
    .directive('efrLogin', function(){
        //Login directive
        return{
            restrict   : 'E',
            templateUrl: 'pages/partial/login.html'
        };
    })
    .directive('efrHeader', function(){
        //Header directive
        return{
            restrict   : 'E',
            templateUrl: 'pages/partial/header.html'
        };
    })
    .directive('efrFooter', function(){
        //Footer directive
        return{
            restrict   : 'E',
            templateUrl: 'pages/partial/footer.html'
        };
    })
    .directive('efrAside', function(){
        //Login directive
        return{
            restrict   : 'E',
            templateUrl: 'pages/partial/aside.html'
        };
    })
    ;

angular.module("frankrossManagement")
    .controller('loginCtrl', function(){

    })
    .controller('dashboardCtrl', function(){

    })
    .controller('userProfileCtrl', function($scope){
        $scope.name = user.name;
        $scope.pic = user.pic;
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
    "doj":"01-Mar-2016",
    "dob":"07-Jan-1989",
    "pic":"images/dummy.jpg"
}
