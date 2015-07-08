'use strict';
export var startModule =  angular.module('app.controllers', [])

  .controller('DashCtrl', function($scope) {})

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    }
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }).controller('MusicCtrl', function($scope,$ionicModal,$cordovaCamera,$cordovaImagePicker){
    $scope.takePhoto = function(){
      $cordovaCamera.getPicture({
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        //targetWidth: 100,
        //targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      }).then(function(imageData){
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      },function(){

      });
    };
    $scope.pickPicture = function(){
      var options = {
        maximumImagesCount: 10,
        width: 800,
        height: 800,
        quality: 80
      };

      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          var image = document.getElementById('myImage');
          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            image.src = results[i];
          }
        }, function(error) {

        });
    };
    $scope.showModal = function(){
      $ionicModal.fromTemplateUrl('myModal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //当我们用到模型时，清除它！
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // 当隐藏的模型时执行动作
      $scope.$on('modal.hide', function() {
        // 执行动作
      });
      // 当移动模型时执行动作
      $scope.$on('modal.removed', function() {
        // 执行动作
      });
    };
  }).controller('IconCtrl', function($scope){
    $scope.icons = [{
      name: 'ionic'
    },{
      name: 'arrow-up-a'
    },{
      name: 'arrow-right-a'
    },{
      name: 'arrow-down-a'
    },{
      name: 'arrow-left-a'
    },{
      name: 'arrow-up-b'
    },{
      name: 'arrow-right-b'
    },{
      name: 'arrow-down-b'
    },{
      name: 'arrow-left-b'
    },{
      name: 'arrow-up-c'
    },{
      name: 'arrow-right-c'
    },{
      name: 'arrow-down-c'
    },{
      name: 'arrow-left-c'
    },{
      name: 'arrow-return-right'
    },{
      name: 'arrow-return-left'
    },{
      name: 'arrow-swap'
    },{
      name: 'arrow-shrink'
    },{
      name: 'arrow-expand'
    },{
      name: 'arrow-move'
    },{
      name: 'arrow-resize'
    },{
      name: 'chevron-up'
    },{
      name: 'chevron-right'
    },{
      name: 'chevron-down'
    },{
      name: 'chevron-left'
    },{
      name: 'navicon-round'
    },{
      name: 'navicon'
    },{
      name: 'drag'
    },{
      name: 'log-in'
    },{
      name: 'log-out'
    },{
      name: 'checkmark-round'
    },{
      name: 'checkmark'
    },{
      name: 'checkmark-circled'
    },{
      name: 'close-round'
    },{
      name: 'close'
    },{
      name: 'close-circled'
    },{
      name: 'plus-round'
    },{
      name: 'plus'
    },{
      name: 'plus-circled'
    },{
      name: 'minus-round'
    },{
      name: 'minus'
    },{
      name: 'minus-circled'
    },{
      name: 'information'
    },{
      name: 'information-circled'
    },{
      name: 'help'
    },{
      name: 'help-circled'
    },{
      name: 'backspace-outline'
    },{
      name: 'backspace'
    },{
      name: 'help-buoy'
    },{
      name: 'asterisk'
    },{
      name: 'alert'
    },{
      name: 'alert-circled'
    }];
  });