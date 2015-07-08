define(['controllers@app','services@app','ng-cordova'],function(){
  return angular.module('app', ['ionic', 'app.controllers', 'app.services','ngCordova'])

    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleLightContent();
        }
      });
    })

    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('app', {
            url: '',
            abstract: true,
            templateUrl: 'templates/sidemenus/sidemenus.tpl.html'
          }).state('app.tabs',{
            url: '/tabs',
            views: {
              'menuContent': {
                templateUrl: "templates/tabs.html"
              }
            }
          }).state('app.tabs.dash',{
            url: '/dash',
            views: {
              'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
              }
            }
          }).state('app.tabs.chats',{
            url: '/chats',
            views: {
              'tab-chats': {
                templateUrl: 'templates/tab-chats.html',
                controller: 'ChatsCtrl'
              }
            }
          }).state('app.tabs.chat-detail',{
            url: '/chats/:chatId',
            views: {
              'tab-chats': {
                templateUrl: 'templates/chat-detail.html',
                controller: 'ChatDetailCtrl'
              }
            }
          }).state('app.tabs.account',{
            url: '/account',
            views: {
              'tab-account': {
                templateUrl: 'templates/tab-account.html',
                controller: 'AccountCtrl'
              }
            }
          }).state('app.tabs.music',{
            url: '/music',
            views: {
              'tab-music': {
                templateUrl: 'templates/tab-music.html'
              }
            }
          }).state('app.icons',{
            url: '/icons',
            views: {
              'menuContent': {
                templateUrl: 'templates/ui/icons.tpl.html'
              }
            }
          });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tabs/dash');

    });
});