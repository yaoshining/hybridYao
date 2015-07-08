define([],function(){
    return angular.module('app.services', [])

        .factory('Chats', function() {
            // Might use a resource here that returns a JSON array

            // Some fake testing data
            var chats = [{
                id: 0,
                name: 'Ben Sparrow',
                lastText: 'You on your way?',
                face: 'http://114.215.109.39/images/avatars/avatar.png'
            }, {
                id: 1,
                name: 'Shining Yao',
                lastText: 'Hey, it\'s me',
                face: 'http://114.215.109.39/images/avatars/yao.jpg'
            },{
                id: 2,
                name: 'Adam Bradleyson',
                lastText: 'I should buy a boat',
                face: 'http://114.215.109.39/images/avatars/avatar3.png'
            }, {
                id: 3,
                name: 'Perry Governor',
                lastText: 'Look at my mukluks!',
                face: 'http://114.215.109.39/images/avatars/avatar4.png'
            }, {
                id: 4,
                name: 'Mike Harrington',
                lastText: 'This is wicked good ice cream.',
                face: 'http://114.215.109.39/images/avatars/user.jpg'
            }];

            return {
                all: function() {
                    return chats;
                },
                remove: function(chat) {
                    chats.splice(chats.indexOf(chat), 1);
                },
                get: function(chatId) {
                    for (var i = 0; i < chats.length; i++) {
                        if (chats[i].id === parseInt(chatId)) {
                            return chats[i];
                        }
                    }
                    return null;
                }
            };
        });
});
