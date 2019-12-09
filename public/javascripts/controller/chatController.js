app.controller('chatController', ['$scope', ($scope) => {
    $scope.activeTab = 2;

    $scope.changeTab = tab => {
        $scope.activeTab = tab; // Chats Tab = 1, Online Users Tab = 2
    }
    const socket = io.connect("http://localhost:3000");
}]);