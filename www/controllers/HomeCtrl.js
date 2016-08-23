bookScan.controller('HomeCtrl', ['$scope','$cordovaBarcodeScanner','$ionicPlatform', '$ionicPopup', '$state','amazonService', 'foundBookService', '$rootScope', '$q', '$http',
  function($scope, $cordovaBarcodeScanner, $ionicPlatform, $ionicPopup, $state, amazonService, foundBookService, $rootScope, $q, $http) {

  $scope.bookSearch = {
    bookInfo:  ""
  }


  $scope.scan = function(){
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(barcodeData) {

        var query = amazonService.getAmazonQueryString(barcodeData.text);

        $http.get(query).then(function(itemData) {

          itemData = $.parseXML(itemData.data);

          // Set foundBook
          foundBookService.setFoundBook(itemData);

          // Reset $scope.bookSearch.bookInfo
          $scope.bookSearch.bookInfo = "";

          // Go to addproduct
          $state.go('foundbookview');

        }, function(error) {
          console.log("ERRROR", JSON.stringify(error));
        });

      }, function(error) {

          // Show popup containing scanning error
          $ionicPopup.show({
            title: "Barcode Scanning Error",
            template: error,
            buttons: [{
              text: 'Dismiss',
              type: 'button-default'
            }]
          });

      });
    });
  };

  $scope.searchBook = function() {

    console.log($scope.bookSearch.bookInfo.length);

    if ($scope.bookSearch.bookInfo.length !== 10 && $scope.bookSearch.bookInfo.length !== 13) {

      // Throw error regarding invalid entry
      $ionicPopup.show({
            title: "Invalid ISBN",
            template: "Please enter a valid ISBN-10 or ISBN-13 with no dashes.",
            buttons: [{
              text: 'Dismiss',
              type: 'button-default'
            }]
      });

    } else {

      var query = amazonService.getAmazonQueryString($scope.bookSearch.bookInfo);

      $http.get(query).then(function(itemData) {

        itemData = $.parseXML(itemData.data);

        // Set foundBook
        foundBookService.setFoundBook(itemData);

        // Reset $scope.bookSearch.bookInfo
        $scope.bookSearch.bookInfo = "";

        // Go to addproduct
        $state.go('foundbookview');

      }, function(error) {
        console.log("ERRROR", JSON.stringify(error));
      });

  };

}

}]);
