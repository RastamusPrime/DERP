angular.module('myDerp', [])

.controller('derpCtrl',["$scope","$http", function(s, h)
{
       onDerpComplete = function(response)
      {
            s.user = response.data;
      };

      onError = function(reason){
            s.error = "You're an Idoit!!!<br />Put in a real person.";
      };

      s.search = function(username){
      h.get("https://api.github.com/users/" + username)
      .then(onDerpComplete, onError);

      s.username="angular";
      s.message= "GO ROOOOOOOYYAAALS!";
};
}]);
