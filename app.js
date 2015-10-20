angular.module('myDerp', [])

.controller('derpCtrl',["$scope","$http", function(s, h)
{
      var onDerpComplete = function(response)
      {
            s.user = response.data;
      };

      h.get("https://api.github.com/users/rastamusprime")
      .then(onDerpComplete);

}]);
