bookScan.controller('foundBookCtrl', ['$scope', '$ionicPlatform', 'foundBookService', '$state',
  function($scope, $ionicPlatform, foundBookService, $state) {

    var bookInfo = foundBookService.getFoundBook();
    $scope.lowestUsedPrice = bookInfo.getElementsByTagName("LowestUsedPrice")[0].getElementsByTagName("FormattedPrice")[0].innerHTML;
    $scope.amountUsed = bookInfo.getElementsByTagName("TotalUsed")[0].innerHTML;
    $scope.newPrice = bookInfo.getElementsByTagName("ListPrice")[0].getElementsByTagName("FormattedPrice")[0].innerHTML;
    $scope.salesRank = bookInfo.getElementsByTagName("SalesRank")[0].innerHTML;
    $scope.bookTitle = bookInfo.getElementsByTagName("Title")[0].innerHTML;
    $scope.bookAuthor = bookInfo.getElementsByTagName("Author")[0].innerHTML;
    $scope.bookPicture = bookInfo.getElementsByTagName("LargeImage")[0].getElementsByTagName("URL")[0].innerHTML;

}]);
